module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ecawebshop/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets'
}
