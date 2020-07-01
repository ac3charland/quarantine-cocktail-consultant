#!/usr/bin/env bash

testExitCode=0

npm run start-background

pkill -f "(chrome)?(--headless)"
backstop $1 --config=backstop/scenarios.js --filter=$2
testExitCode=$(($testExitCode + $?))
npm run kill-background

if [ "$testExitCode" -ne "0" ]; then
    echo "\n***************************************************"
    echo "Backstop test failures!"
    echo "***************************************************\n"
    exit $testExitCode
fi