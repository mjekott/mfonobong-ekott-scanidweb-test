const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/providers': path.resolve(__dirname, 'src/providers'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/screens': path.resolve(__dirname, 'src/screens'),
            '@/store': path.resolve(__dirname, 'src/store'),
            '@/utils': path.resolve(__dirname, 'src/utils'),
            '@/shared': path.resolve(__dirname, 'src/shared'),
        },
    },
};
