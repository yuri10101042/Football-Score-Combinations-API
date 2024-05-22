const { buildSchema } = require('graphql');

//Constrói um esquema GraphQL
const schema = buildSchema(`
    type Query {
        _: Boolean
    }

    type Mutation {
        verify(score: String!): ScoreResult
    }

    type ScoreResult {
        combinations: Int
    }
`);

module.exports = schema;