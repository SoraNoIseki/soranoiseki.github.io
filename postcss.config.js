module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: true, // 允许更灵活的模块解析
      logLevel: 'debug',          // 开启调试日志
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
