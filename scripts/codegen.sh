#!/bin/sh
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# $1 = feature name get from user
ENDPOINT_NAME=$1

#check ENDPOINT_NAME not exits , throw error
if [ -z "$ENDPOINT_NAME" ]
    then
        echo ""
        echo "${RED}:: No endpoint name supplied${NC}"
        echo "${GREEN}Example: pnpm codegen ${BLUE}<Apollo service name>${NC}"
        echo "${BLUE}<Apollo service name>${NC} is value from enum 'ApolloService' "
        echo ""
        echo "👉'${GREEN}pnpm codegen Private'👈 copy this and try"
        echo ""
        exit 1
fi

export ENDPOINT_NAME=$ENDPOINT_NAME

echo "-Gen hook"
graphql-codegen --config codegen.ts
echo ":End gen hook"
