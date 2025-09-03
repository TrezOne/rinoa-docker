const fs = require('fs');
const yaml = require('js-yaml');

/**
 * Recursively traverse the object and extract all image entries.
 * @param {object} obj - The YAML object to traverse.
 * @param {Array<string>} path - Key path for generating service names.
 * @returns {Array} - List of {depName, currentValue, service}.
 */
function extractImages(obj, path = []) {
  const result = [];

  if (typeof obj !== 'object' || obj === null) return result;

  // Resolve merged objects (anchors or << merges)
  let mergedObj = {};
  if (obj['<<']) {
    const merge = obj['<<'];
    if (Array.isArray(merge)) {
      merge.forEach(m => Object.assign(mergedObj, m));
    } else if (typeof merge === 'object') {
      Object.assign(mergedObj, merge);
    }
  }
  // Merge top-level keys last to override anchor defaults
  Object.assign(mergedObj, obj);

  // If an image key exists, capture it
  if (mergedObj.image) {
    const [depName, currentValue] = mergedObj.image.split(':');
    result.push({
      depName: depName,
      currentValue: currentValue || 'latest',
      service: path.join('/') || 'root'
    });
  }

  // Recursively traverse all keys
  for (const [key, value] of Object.entries(mergedObj)) {
    // Skip the << key since we've already processed it
    if (key === '<<') continue;
    result.push(...extractImages(value, [...path, key]));
  }

  return result;
};

module.exports = function extractDockerImages(fileContent) {
  try {
    // Parse YAML with anchors preserved
    const doc = yaml.load(fileContent, { schema: yaml.DEFAULT_FULL_SCHEMA });
    return extractImages(doc);
  } catch (err) {
    console.error('Failed parsing docker-compose.yml:', err);
    return [];
  }
};
