// Penser à mettre ce document à jour si besoin en fonction des nouveaux chemins absolus à ajouter

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@data': './data',
            '@hooks': './hooks',
            '@style': './style',
          },
        },
      ],
    ],
  }
}
