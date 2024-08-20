module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
          ],
          alias: {
            '@penn/schemas': './src/app/schemas/index.tsx',
            '@penn/hooks': './src/app/hooks/index.tsx',
            '@penn/utils': './src/app/utils/index.tsx',
            '@penn/layout': './src/app/components/layout/index.tsx',
            '@penn/screens': './src/app/screens/index.tsx',
            '@penn/context': './src/app/context/index.tsx',
            '@penn/theme': './src/app/theme/index.tsx',
            '@penn/types': './src/app/types/index.tsx',
            '@penn-ui/common': './src/app/components/common/index.tsx',
            '^react-native$': 'react-native-web',
          },
        },
      ],
    ],
  };
};
