module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
    ],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-flow-strip-types'], // Ignore les types Flow
      },
    },
  };
  