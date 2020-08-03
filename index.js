module.exports = function () {
  return {
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-transform-react-jsx', {
        pragma: 'Machinat.createElement',
        pragmaFrag: 'Machinat.Fragment',
      }],
    ],
  };
};
