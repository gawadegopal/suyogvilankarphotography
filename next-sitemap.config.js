/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://suyogvilankarphotography.vercel.app/',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.8,
    sitemapSize: 5000,
    exclude: ['/admin/*', '/sign-in']
};
