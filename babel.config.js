module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-flow',
    ['@babel/preset-env', {
      modules: false
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-flow-strip-types'
  ]
}
