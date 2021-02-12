#!/bin/bash
#
# Validate all HTML files.
#
set -e

echo ""
echo "Validating HTML using"
echo "https://github.com/dcycle/docker-html-validate"
echo ""
echo "** If this fails, please run ./scripts/deploy.sh first! **"
echo ""
echo "Start by checking the basic markup..."
echo ""
find ./docs/_site -name "*.html" | xargs -I{} ./scripts/validate-html-file.sh {}
echo ""
echo "Now check the dom captures generated by ./scripts/end-to-end-tests.sh"
echo "as the markup generated by Javascript also needs to be valid."
echo ""
mkdir -p ./do-not-commit/dom-captures
find ./do-not-commit/dom-captures -name "*.html" | xargs -I{} ./scripts/validate-html-file.sh {}