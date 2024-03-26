import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  context: __dirname + '/src',

  entry: {
    app: './index.js',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'frontend.js',
    libraryTarget: 'var',
    library: 'plugin',
  },

  // uncomment for disable minimalization
  // optimization: {
  //   minimize: false,
  // },
};
