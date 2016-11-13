mkdir -p dist
rollup -c > dist/bundle.js
cp -r src/* dist/
