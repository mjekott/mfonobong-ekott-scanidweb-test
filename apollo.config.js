module.exports = {
    client: {
        includes: ['./src/**/*.ts', './src/**/*.tsx'],
        tageName: 'gql',
        service: {
            name: 'backend',
            url: 'http://localhost:4000/graphql',
        },
    },
};
