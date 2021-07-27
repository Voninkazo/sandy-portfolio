module.exports = {
  siteMetadata: {
    title: `Sandy Portfolio`,
    description: `
        I am a web developer focusing on front-end development based in Madagascar.
        
        I am self-motivated and I love learning new skills including coding, languages or anything else.
  `,
    author: `Sandy Raveloarisoa`,
    siteUrl: `https://github.com/Voninkazo/`,
    social: {
      twitter: '',
      facebook: '',
      github: `Voninkazo/`,
      linkedin: ``,
      email: `sandy.rav@onja.org`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
              withWebp: true,
              withAvif: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `warn`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // uncomment this and input the trackingId to enable google analytics
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    // options: {
    // trackingId: `ADD YOUR TRACKING ID HERE`,
    // },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/pic.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
