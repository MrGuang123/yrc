module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    // 解决react18不引入react报错问题
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ]
  ]
}