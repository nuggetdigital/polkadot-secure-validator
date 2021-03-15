const chalk = require("chalk")
const fs = require("fs-extra")

const { validatorSshPrivateKeyPath } = require("./env")

module.exports = {
  keys: () => {
    if (!validatorSshPrivateKeyPath) {
      console.log(
        chalk.red(
          "Please, export the path of the file with the private SSH key you want to use on validators as the environment variable SSH_PRIVATE_KEY"
        )
      )
      process.exit(-1)
    }

    const validatorPublicKey = publicKeyFromPrivateKeyPath(
      validatorSshPrivateKeyPath
    )

    return { validatorPublicKey }
  }
}

function publicKeyFromPrivateKeyPath(privateKeyPath) {
  return fs.readFileSync(`${privateKeyPath}.pub`, "utf8").trim()
}
