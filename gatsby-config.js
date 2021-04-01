module.exports = {
    siteMetadata: {
        title: `Sandy Portfolio`,
        description: `
        I am a web developer focusing on front-end development based in Madagascar. I graduated from Onja.
        I am self-motivated and I love learning new skills including coding, languages or anything else. I also love working together with people and helping others have opportunities to learn new things. 
  `,
        author: `Sandy Raveloarisoa`,
        siteUrl: `https://github.com/Voninkazo/`,
        social: {
            twitter: '',
            facebook: '',
            github: `Voninkazo/`,
            linkedin: ``,
            email: "sandy.rav@onja.org",
        },
    },
    plugins: [{
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
                plugins: [{
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
                icon: `./static/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
    ],
}


// I am confident with HTML, CSS/SASS, Vanilla Javascript and React and I am having a desire to learn new web technology to add those skills that I currently own.

//         I am from Ambatondrazaka, a city in the middle east of Madagascar where the greatest lake of Madagascar is located but I currently live in Mahanoro where Onja is found. I am really lloking forward to have a company and a team that can work with me and where I can give my commitemnt and contibute in the long term.