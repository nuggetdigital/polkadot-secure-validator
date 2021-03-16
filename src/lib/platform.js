const { Terraform } = require("./clients/terraform")

class Platform {
  constructor(cfg) {
    this.config = JSON.parse(JSON.stringify(cfg))

    this.tf = new Terraform(this.config)
  }

  async sync() {
    await this.tf.sync("apply")
    const validatorIpAddresses = await this._getValidatorIpAddresses()
    return { validatorIpAddresses }
  }

  async output() {
    await this.tf.initNodes()
    const validatorIpAddresses = await this._getValidatorIpAddresses()
    return { validatorIpAddresses }
  }

  async plan() {
    return this.tf.sync("plan")
  }

  async clean() {
    return this.tf.clean()
  }

  async _extractOutput(type, nodeSet) {
    const self = this

    const output = await Promise.all(
      nodeSet.map(async (node, i) => {
        const ipAddress = await self.tf.nodeOutput(type, i, "ip_address")
        return JSON.parse(ipAddress.toString())
      })
    )

    return output
  }

  async _getValidatorIpAddresses() {
    return await this._extractOutput("validator", this.config.validators.nodes)
  }
}

module.exports = {
  Platform
}
