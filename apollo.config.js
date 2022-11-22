module.exports = {
    client: {
        includes: ['./src/**/*.ts'],
        tageName: 'gql',
        service: {
            name: 'backend',
            url: 'http://localhost:4000/graphql',
        },
    },
};
