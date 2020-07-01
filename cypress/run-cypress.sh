#!/usr/bin/env bash

testExitCode=0

npm run start-background

case "$1" in
    case:open)
        cypress open
        ;;
    *)
        cypress run
        ;;
esac

testExitCode=$(($testExitCode + $?))
npm run kill-background

if [ "$testExitCode" -ne "0" ]; then
    echo "\n***************************************************"
    echo "Cypress test failures!"
    echo "***************************************************\n"
    exit $testExitCode
fi
