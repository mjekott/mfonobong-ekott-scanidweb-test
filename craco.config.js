const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/providers': path.resolve(__dirname, 'src/providers'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/store': path.resolve(__dirname, 'src/store'),
            '@/utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};
