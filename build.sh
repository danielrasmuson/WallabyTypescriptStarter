mkdir -p dist
rollup src/bootstrap.js -o dist/bundle.js --format=cjs
rollup src/bootstrap-tests.js -o dist/bootstrap-tests.js --format=cjs
cp -r src/* dist/
