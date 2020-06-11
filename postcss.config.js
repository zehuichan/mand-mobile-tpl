module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      minPixelValue: 1
    }
  }
}
