const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name:"@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],

  webpackFinal: async config => {
    config.module.rules.push(
      {
      test: /\.(ts|tsx|js|jsx)$/,
      include: path.resolve(__dirname, "../src"),
      use:[
        require.resolve("ts-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ]
    },
    { 
      test: /\.s[c|a]ss?$/,
      use:[
          { loader: require.resolve("style-loader") },
          { loader: require.resolve('css-loader') },
          { loader: require.resolve('sass-loader') },
      ] 
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')
    return config;
  },
};
