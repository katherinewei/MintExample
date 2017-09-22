// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  parser: 'sugarss',
  map: false,
  from: '/path/to/src.sss',
  to: '/path/to/dest.css',
  plugins: {
    'postcss-plugin': {}
  }
}
