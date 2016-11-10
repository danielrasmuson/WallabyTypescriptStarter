mkdir -p dist
./node_modules/rollup/bin/rollup src/bootstrap.js -o dist/bootstrap.js --format=cjs
./node_modules/rollup/bin/rollup src/bootstrap-tests.js -o dist/bootstrap-tests.js --format=cjs
