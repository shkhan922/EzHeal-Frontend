const nextSettings = {
  optimizeFonts: false,
  // disable eslint
  eslint: {
      ignoreDuringBuilds: true,
  },
  // Change your site title here
  env: {
      title: 'EzHeal',
      titleDescription: 'EzHeal',
  },
};
const withImages = require('next-images')
module.exports = withImages();
module.exports = nextSettings;