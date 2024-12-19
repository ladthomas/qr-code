
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Supprime les types Flow pour éviter les erreurs de Jest
require('@babel/register')({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-transform-flow-strip-types'],
});
