provider "aws" {
  project     = var.state_project
  version     = "~>2.15"
}

terraform {
  backend "s3" {
    bucket = "terraform-states"
    key    = "zyzx.tfstate"
    region = "us-east-1"
  }
}
