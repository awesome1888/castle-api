#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"

docker run -d -p 3000:3000 awesome1888/city-api_api:$VERSION
