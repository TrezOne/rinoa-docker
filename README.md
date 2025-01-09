# List of Services

`~> yq '.services | to_entries | map({service: .key, image: .value.image})' docker-compose.yml`
```json
<!-- SERVICES_LIST_START -->
[
  {
    "service": "actual_server",
    "image": "docker.io/actualbudget/actual-server:latest"
  },
  {
    "service": "adguard",
    "image": "adguard/adguardhome:latest"
  },
  {
    "service": "apprise",
    "image": "lscr.io/linuxserver/apprise-api:latest"
  },
  {
    "service": "audiobookshelf",
    "image": "ghcr.io/advplyr/audiobookshelf:latest"
  },
  {
    "service": "authelia",
    "image": "authelia/authelia:master"
  },
  {
    "service": "authelia-pg",
    "image": "postgres:16-alpine"
  },
  {
    "service": "bazarr",
    "image": "lscr.io/linuxserver/bazarr:latest"
  },
  {
    "service": "bitmagnet",
    "image": "ghcr.io/bitmagnet-io/bitmagnet:latest"
  },
  {
    "service": "bitmagnet-pg-db",
    "image": "postgres:17-alpine"
  },
  {
    "service": "bitwarden",
    "image": "vaultwarden/server:latest"
  },
  {
    "service": "bluesky-pds",
    "image": "ghcr.io/bluesky-social/pds:latest"
  },
  {
    "service": "browserless",
    "image": "ghcr.io/browserless/chromium:latest"
  },
  {
    "service": "castopod",
    "image": "castopod/castopod:latest"
  },
  {
    "service": "cloudflared",
    "image": "cloudflare/cloudflared:latest"
  },
  {
    "service": "cloudflareddns",
    "image": "ghcr.io/hotio/cloudflareddns:latest"
  },
  {
    "service": "crowdsec",
    "image": "crowdsecurity/crowdsec:latest"
  },
  {
    "service": "crowdsec-dashboard",
    "image": "metabase/metabase"
  },
  {
    "service": "czkawka",
    "image": "jlesage/czkawka"
  },
  {
    "service": "dagu-scheduler",
    "image": "ghcr.io/dagu-org/dagu:latest"
  },
  {
    "service": "dagu-server",
    "image": "ghcr.io/dagu-org/dagu:latest"
  },
  {
    "service": "delugevpn",
    "image": "ghcr.io/binhex/arch-delugevpn:latest"
  },
  {
    "service": "docker-socket-proxy",
    "image": "ghcr.io/tecnativa/docker-socket-proxy:latest"
  },
  {
    "service": "docuseal",
    "image": "docuseal/docuseal:latest"
  },
  {
    "service": "duplicati",
    "image": "lscr.io/linuxserver/duplicati:latest"
  },
  {
    "service": "fastenhealth",
    "image": "ghcr.io/fastenhealth/fasten-onprem:main"
  },
  {
    "service": "flaresolverr",
    "image": "ghcr.io/flaresolverr/flaresolverr:latest"
  },
  {
    "service": "ghost",
    "image": "ghost:latest"
  },
  {
    "service": "gitea",
    "image": "gitea/gitea:1.22.2"
  },
  {
    "service": "gitea-db",
    "image": "postgres:14"
  },
  {
    "service": "gitea-opengist",
    "image": "ghcr.io/thomiceli/opengist:latest"
  },
  {
    "service": "gitea-runner",
    "image": "gitea/act_runner:latest"
  },
  {
    "service": "gitea-sonarqube-bot",
    "image": "justusbunsi/gitea-sonarqube-bot:v0.4.0"
  },
  {
    "service": "gluetun",
    "image": "qmcgaw/gluetun:latest"
  },
  {
    "service": "gotify",
    "image": "gotify/server"
  },
  {
    "service": "grafana",
    "image": "grafana/grafana-enterprise:latest"
  },
  {
    "service": "grafana-alloy",
    "image": "grafana/alloy:latest"
  },
  {
    "service": "grafana-loki",
    "image": "grafana/loki:latest"
  },
  {
    "service": "grafana-mimir",
    "image": "grafana/mimir:latest"
  },
  {
    "service": "grafana-mimir-memcached",
    "image": "memcached"
  },
  {
    "service": "grafana-pyroscope",
    "image": "grafana/pyroscope:latest"
  },
  {
    "service": "grafana-tempo",
    "image": "grafana/tempo:latest"
  },
  {
    "service": "homepage",
    "image": "ghcr.io/gethomepage/homepage:latest"
  },
  {
    "service": "hortusfox",
    "image": "ghcr.io/danielbrendel/hortusfox-web:latest"
  },
  {
    "service": "hugo",
    "image": "hugomods/hugo:exts"
  },
  {
    "service": "invidious",
    "image": "quay.io/invidious/invidious:latest"
  },
  {
    "service": "invidious-db",
    "image": "docker.io/library/postgres:14"
  },
  {
    "service": "invoice_ninja",
    "image": "invoiceninja/invoiceninja:5"
  },
  {
    "service": "invoice_ninja_proxy",
    "image": "nginx"
  },
  {
    "service": "it-tools",
    "image": "ghcr.io/corentinth/it-tools:latest"
  },
  {
    "service": "jellyfin",
    "image": "jellyfin/jellyfin"
  },
  {
    "service": "jitsi-etherpad",
    "image": "etherpad/etherpad:1.8.6"
  },
  {
    "service": "jitsi-jibri",
    "image": "jitsi/jibri:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "jitsi-jicofo",
    "image": "jitsi/jicofo:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "jitsi-jigasi",
    "image": "jitsi/jigasi:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "jitsi-jvb",
    "image": "jitsi/jvb:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "jitsi-prosody",
    "image": "jitsi/prosody:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "jitsi-web",
    "image": "jitsi/web:${JITSI_IMAGE_VERSION:-stable}"
  },
  {
    "service": "joplin-db",
    "image": "postgres:17-alpine"
  },
  {
    "service": "joplin",
    "image": "joplin/server:latest"
  },
  {
    "service": "komodo-core",
    "image": "ghcr.io/mbecker20/komodo:latest"
  },
  {
    "service": "komodo-ferretdb",
    "image": "ghcr.io/ferretdb/ferretdb"
  },
  {
    "service": "komodo-periphery",
    "image": "ghcr.io/mbecker20/periphery:latest"
  },
  {
    "service": "komodo-pg-db",
    "image": "postgres:17-alpine"
  },
  {
    "service": "librespeed",
    "image": "lscr.io/linuxserver/librespeed:latest"
  },
  {
    "service": "lidarr",
    "image": "lscr.io/linuxserver/lidarr:latest"
  },
  {
    "service": "lidify",
    "image": "thewicklowwolf/lidify:latest"
  },
  {
    "service": "lldap",
    "image": "lldap/lldap:stable"
  },
  {
    "service": "localai",
    "image": "localai/localai:latest-aio-cpu"
  },
  {
    "service": "maloja",
    "image": "krateng/maloja:latest"
  },
  {
    "service": "mariadb",
    "image": "ghcr.io/linuxserver/mariadb"
  },
  {
    "service": "meshcentral",
    "image": "ghcr.io/ylianst/meshcentral:master"
  },
  {
    "service": "minio",
    "image": "minio/minio"
  },
  {
    "service": "mongodb",
    "image": "mongo:7.0"
  },
  {
    "service": "multi-scrobbler",
    "image": "foxxmd/multi-scrobbler"
  },
  {
    "service": "n8n",
    "image": "docker.n8n.io/n8nio/n8n"
  },
  {
    "service": "navidrome",
    "image": "deluan/navidrome:latest"
  },
  {
    "service": "netbox",
    "image": "lscr.io/linuxserver/netbox:latest"
  },
  {
    "service": "netbox-db",
    "image": "postgres:17-alpine"
  },
  {
    "service": "nextcloud",
    "image": "lscr.io/linuxserver/nextcloud:latest"
  },
  {
    "service": "ollama",
    "image": "ollama/ollama"
  },
  {
    "service": "ombi",
    "image": "lscr.io/linuxserver/ombi:latest"
  },
  {
    "service": "paperless-ngx",
    "image": "ghcr.io/paperless-ngx/paperless-ngx:latest"
  },
  {
    "service": "plausible",
    "image": "ghcr.io/plausible/community-edition:v2.1.0"
  },
  {
    "service": "plausible_db",
    "image": "postgres:16-alpine"
  },
  {
    "service": "plausible_events_db",
    "image": "clickhouse/clickhouse-server:24.3.3.102-alpine"
  },
  {
    "service": "postal-smtp",
    "image": "ghcr.io/postalserver/postal:latest"
  },
  {
    "service": "postal-web",
    "image": "ghcr.io/postalserver/postal:latest"
  },
  {
    "service": "postal-worker",
    "image": "ghcr.io/postalserver/postal:latest"
  },
  {
    "service": "prowlarr",
    "image": "lscr.io/linuxserver/prowlarr:latest"
  },
  {
    "service": "radarec",
    "image": "thewicklowwolf/radarec:latest"
  },
  {
    "service": "radarr",
    "image": "lscr.io/linuxserver/radarr:latest"
  },
  {
    "service": "reactive-resume",
    "image": "amruthpillai/reactive-resume:latest"
  },
  {
    "service": "reactive-resume-pg",
    "image": "postgres:16-alpine"
  },
  {
    "service": "readarr",
    "image": "lscr.io/linuxserver/readarr:develop"
  },
  {
    "service": "redis",
    "image": "redis:alpine"
  },
  {
    "service": "redlib",
    "image": "quay.io/redlib/redlib:latest"
  },
  {
    "service": "sabnzbdvpn",
    "image": "ghcr.io/binhex/arch-sabnzbdvpn:latest"
  },
  {
    "service": "scraperr",
    "image": "jpyles0524/scraperr:latest"
  },
  {
    "service": "scraperr-api",
    "image": "jpyles0524/scraperr_api:latest"
  },
  {
    "service": "scrutiny",
    "image": "ghcr.io/analogj/scrutiny:master-omnibus"
  },
  {
    "service": "searxng",
    "image": "searxng/searxng:latest"
  },
  {
    "service": "semaphore",
    "image": "semaphoreui/semaphore:v2.10.32"
  },
  {
    "service": "slurpit-portal",
    "image": "slurpit/portal:latest"
  },
  {
    "service": "slurpit-scanner",
    "image": "slurpit/scanner:latest"
  },
  {
    "service": "slurpit-scraper",
    "image": "slurpit/scraper:latest"
  },
  {
    "service": "slurpit-warehouse",
    "image": "slurpit/warehouse:latest"
  },
  {
    "service": "sonarqube",
    "image": "mc1arke/sonarqube-with-community-branch-plugin:lts"
  },
  {
    "service": "sonarqube-pg-db",
    "image": "postgres:17-alpine"
  },
  {
    "service": "sonarr",
    "image": "lscr.io/linuxserver/sonarr:latest"
  },
  {
    "service": "sonashow",
    "image": "thewicklowwolf/sonashow:latest"
  },
  {
    "service": "soulseek",
    "image": "slskd/slskd"
  },
  {
    "service": "spotisub",
    "image": "blastbeng/spotisub:latest"
  },
  {
    "service": "swag",
    "image": "lscr.io/linuxserver/swag:latest"
  },
  {
    "service": "synapse",
    "image": "docker.io/matrixdotorg/synapse:latest"
  },
  {
    "service": "synapse-db",
    "image": "postgres:16-alpine"
  },
  {
    "service": "tandoor",
    "image": "vabene1111/recipes"
  },
  {
    "service": "tandoor-pg",
    "image": "postgres:16-alpine"
  },
  {
    "service": "traccar",
    "image": "traccar/traccar:latest"
  },
  {
    "service": "traccar-pg",
    "image": "postgres:16-alpine"
  },
  {
    "service": "unmanic",
    "image": "josh5/unmanic:latest"
  },
  {
    "service": "uptimekuma",
    "image": "louislam/uptime-kuma:latest"
  },
  {
    "service": "vault",
    "image": "hashicorp/vault:latest"
  },
  {
    "service": "wallabag",
    "image": "wallabag/wallabag"
  },
  {
    "service": "wallos",
    "image": "bellamy/wallos:latest"
  },
  {
    "service": "watchtower",
    "image": "ghcr.io/containrrr/watchtower:latest"
  },
  {
    "service": "wazuh.agent",
    "image": "opennix/wazuh-agent:latest"
  },
  {
    "service": "wazuh.dashboard",
    "image": "wazuh/wazuh-dashboard:${WAZUH_VERSION}"
  },
  {
    "service": "wazuh.indexer",
    "image": "wazuh/wazuh-indexer:${WAZUH_VERSION}"
  },
  {
    "service": "wazuh.manager",
    "image": "wazuh/wazuh-manager:${WAZUH_VERSION}"
  },
  {
    "service": "web-check",
    "image": "lissy93/web-check"
  },
  {
    "service": "whodb",
    "image": "clidey/whodb"
  },
  {
    "service": "your_spotify",
    "image": "lscr.io/linuxserver/your_spotify:latest"
  },
  {
    "service": "youtubedl",
    "image": "nbr23/youtube-dl-server:latest"
  },
  {
    "service": "zammad-backup",
    "image": "postgres:${ZAMMAD_POSTGRES_VERSION}"
  },
  {
    "service": "zammad-elasticsearch",
    "image": "bitnami/elasticsearch:${ZAMMAD_ELASTICSEARCH_VERSION}"
  },
  {
    "service": "zammad-init",
    "image": "${ZAMMAD_IMAGE_REPO}:${ZAMMAD_VERSION}"
  },
  {
    "service": "zammad-memcached",
    "image": "memcached:${ZAMMAD_MEMCACHE_VERSION}"
  },
  {
    "service": "zammad-nginx",
    "image": "${ZAMMAD_IMAGE_REPO}:${ZAMMAD_VERSION}"
  },
  {
    "service": "zammad-postgresql",
    "image": "postgres:${ZAMMAD_POSTGRES_VERSION}"
  },
  {
    "service": "zammad-railsserver",
    "image": "${ZAMMAD_IMAGE_REPO}:${ZAMMAD_VERSION}"
  },
  {
    "service": "zammad-redis",
    "image": "redis:${ZAMMAD_REDIS_VERSION}"
  },
  {
    "service": "zammad-scheduler",
    "image": "${ZAMMAD_IMAGE_REPO}:${ZAMMAD_VERSION}"
  },
  {
    "service": "zammad-websocket",
    "image": "${ZAMMAD_IMAGE_REPO}:${ZAMMAD_VERSION}"
  },
  {
    "service": "zitadel",
    "image": "ghcr.io/zitadel/zitadel:latest"
  },
  {
    "service": "zitadel-pg-db",
    "image": "postgres:16-alpine"
  }
]
<!-- SERVICES_LIST_END -->
```