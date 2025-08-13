const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    // Настраиваем TypeScript loader
    config.module.rules.push({
      test: /\.[tj]sx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      ],
      exclude: /node_modules/,
    });

    // Добавляем поддержку SCSS
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]__[hash:base64:5]',
              auto: /\.module\.\w+$/i,
            },
            importLoaders: 2,
          },
        },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ]
    });

    // Добавляем поддержку SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Добавляем алиасы как в основном webpack конфиге
    config.resolve.alias = {
      ...config.resolve.alias,
      fonts: path.resolve(__dirname, '..', './src/fonts'),
      src: path.resolve(__dirname, '..', './src'),
      components: path.resolve(__dirname, '..', './src/components'),
    };

    // Добавляем расширения для TypeScript
    config.resolve.extensions = [
      ...config.resolve.extensions,
      '.ts',
      '.tsx'
    ];

    return config;
  }
};

module.exports = config;
