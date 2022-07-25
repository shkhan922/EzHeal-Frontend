const nextSettings = {
  optimizeFonts: false,
  // disable eslint
  eslint: {
      ignoreDuringBuilds: true,
  },
  // Change your site title here
  env: {
      title: 'EzHeal',
      titleDescription: 'EzHeal|HealthCare|Telemedicine',
  },
};


module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          
        },
      ],
  reactStrictMode: true,
  images : {
    domains : ['localhost',] // <== Domain name
  }
    })

    return config
  },
};



module.exports = nextSettings;