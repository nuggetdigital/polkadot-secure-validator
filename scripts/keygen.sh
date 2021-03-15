#!/bin/bash

set -eEuo pipefail

ssh-keygen -o -a 10000 -t ed25519 -f ~/.ssh/id_ed25519_zyzx -C "zyzx"

eval $(ssh-agent)

ssh-add ~/.ssh/id_ed25519_zyzx

cat ~/.ssh/id_ed25519_zyzx.pub