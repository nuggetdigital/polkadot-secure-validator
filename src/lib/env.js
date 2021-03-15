module.exports = {
  validatorSshPrivateKeyPath: process.env.SSH_PRIVATE_KEY,
  nodeExporterUsername: process.env.NODE_EXPORTER_USERNAME || "prometheus",
  nodeExporterPassword: process.env.NODE_EXPORTER_PASSWORD || "node_exporter"
}
