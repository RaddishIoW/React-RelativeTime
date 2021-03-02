module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      modules: false
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
  minified: true,
  ignore: [
    '**/*.d.ts',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/mocks'
  ]
}
