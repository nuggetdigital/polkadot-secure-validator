provider "aws" {
  project     = var.state_project
  region = "us-east-1"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket = "zyzx-terraform-remote-state"
    key    = "zyzx.tfstate"
    region = "us-east-1"
  }
}
