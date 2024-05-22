const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const { countCombinations } = require('./scoreCalculator');

const app = express();
const PORT = 8080;

// Define o resolver para a mutation "verify" do GraphQL
const root = {
    verify: ({ score }) => {
        const [score1, score2] = score.split('x').map(Number);
        const combinations1 = countCombinations(score1);
        const combinations2 = countCombinations(score2);
        // Multiplica as combinações possíveis dos dois placares, para obter o total de combinações do placar
        const combinations = combinations1 * combinations2;
        return { combinations };
    }
};

// Configura o middleware do Express para usar o GraphQL
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (err) => ({ message: err.message }),
    formatResponse: (response) => {
        if (response.data && response.data.verify) {
            return response.data.verify;
        }
        return response;
    }
}));

// Inicia o servidor Express na porta definida
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});