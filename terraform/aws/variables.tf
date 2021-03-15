variable "state_project" {
  default = "zyzx"
}

variable "project_id" {
  default = "zyzx"
}

variable "location" {
  default = "us-east-1"
}

variable "zone" {
  default = "us-east-1a"
}

variable "machine_type" {
  default = "m4.large"
}

variable "public_key" {
  default = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEzsnQyKeQ90u0hyYo8G9lD6ewbTVN9juJPjOUghYt82 zyzx"
}

variable "ssh_user" {
  default = ""
}

variable "node_count" {
  default = 1
}

variable "name" {
  default = "node"
}

variable "image" {
  default = "ami-0e6273fe5a9a1ad93"
}
