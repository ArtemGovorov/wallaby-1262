module.exports = function () {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.test.ts'
    ],

    tests: [
      'src/**/*.test.ts'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },
    
    setup: () => {
      !require.extensions['.ts'] && require('ts-node').register({
        ignore: false
      })
    }
  };
};