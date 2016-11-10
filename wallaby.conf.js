module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'src/**/*.ts'},
      {pattern: 'src/**/*.test.ts', ignore: true}
    ],
    tests: [
      {pattern: 'src/**/*test.ts'}
    ],
    testFramework: 'jasmine',
    env: {
      type: 'node',
    },
    compilers: {
      'src/**/*.ts': wallaby.compilers.typeScript()
    }
  };
};
