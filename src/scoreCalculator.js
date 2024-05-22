function countCombinations(score) {
    //Mapeia a pontuação para cada ação possível
    const touchdown = 6;
    const extra1Touchdown = 7;
    const extra2Touchdown = 8;
    const fieldGoal = 3;

    //Calcula quantas formas de pontuar possíveis para uma quantidade de pontos (points)
    function waysToScore(points) {
        const dp = Array(points + 1).fill(0);
        dp[0] = 1;

        for (let i = touchdown; i <= points; i++) {
            dp[i] += dp[i - touchdown];
        }

        for (let i = extra1Touchdown; i <= points; i++) {
            dp[i] += dp[i - extra1Touchdown];
        }

        for (let i = extra2Touchdown; i <= points; i++) {
            dp[i] += dp[i - extra2Touchdown];
        }

        for (let i = fieldGoal; i <= points; i++) {
            dp[i] += dp[i - fieldGoal];
        }

        return dp[points];
    }

    return waysToScore(score);
}

module.exports = { countCombinations };