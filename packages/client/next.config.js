const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'hmpoc.cdn.content.amplience.net'
    },
    poweredByHeader: false
}