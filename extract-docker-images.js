const fs = require('fs');
const yaml = require('js-yaml');

module.exports = function extractDockerImages(fileContent) {
  const result = [];

  try {
    const doc = yaml.load(fileContent, { schema: yaml.DEFAULT_SCHEMA });

    if (!doc.services) return [];

    for (const [serviceName, serviceDef] of Object.entries(doc.services)) {
      let image = serviceDef.image;

      // Resolve anchors/merges if image is not directly present
      if (!image && serviceDef['<<']) {
        const merge = Array.isArray(serviceDef['<<']) ? serviceDef['<<'] : [serviceDef['<<']];
        merge.forEach(m => {
          if (m && m.image && !image) {
            image = m.image;
          }
        });
      }

      if (image) {
        const [depName, currentValue] = image.split(':');
        result.push({
          depName: depName,
          currentValue: currentValue || 'latest',
          service: serviceName // For Renovate PR titles
        });
      }
    }
  } catch (err) {
    console.error('Failed parsing docker-compose.yml:', err);
  }

  return result;
};
