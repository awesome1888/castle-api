#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"

docker build --no-cache -t awesome1888/city-api_api:$VERSION -f docker/production.dockerfile .;
