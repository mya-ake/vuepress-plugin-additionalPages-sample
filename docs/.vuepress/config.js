const path = require('path');

module.exports = {
  plugins: [
    () => {
      return {
        name: 'test',
        additionalPages: [
          {
            path: '/test/',
            content: '# Test Page',
          },
          {
            path: '/test-template-page/',
            filePath: path.resolve(__dirname, 'templates', 'index.md'),
          },
        ]
      }
    }
  ]
}