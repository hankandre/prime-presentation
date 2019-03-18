module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: { browsers: ['last 2 Chrome versions'] },
      },
    ],
  ],
};
