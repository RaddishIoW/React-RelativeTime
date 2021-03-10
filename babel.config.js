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
    'src/__test__',
    '**/mocks'
  ]
}
