const path = require('path');
require('dotenv').config();



const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "https://peaceful-darling-f0da2a1db5.strapiapp.com",
  collectionTypes: ["post", "category", "author"],
  skipFileDownloads: true,  // Add this to temporarily skip media downloads
};



module.exports = {
  // flags: {
  //   PRESERVE_WEBPACK_CACHE: true,
  //   FAST_REFRESH: true,
  // },
  siteMetadata: {
    title: `Innovazy`,
    description: `We Offer Innovative, Creative and Advanced IT Solutions to Businesses and Industries around the Globe`,
    // image: `/gatsby-icon.png`,
    siteUrl: `https://www.innovazy.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
  
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve('./src/components/MainLayout'),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-233111220-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
