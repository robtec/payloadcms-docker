#!/bin/bash

set -e

function buildRunApp() {
    echo -e ">>> running setup and build"
    yarn install
    yarn build
}

buildRunApp

exec "$@"
