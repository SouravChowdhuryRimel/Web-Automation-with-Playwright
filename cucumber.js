module.exports = {
    default: {
        require: ["tests/stepDefinitions/**/*.js"],
        format: ["json:reports/cucumber-report.json"],
        paths: ["tests/features/**/*.feature"],
        requireModule: ['@babel/register'],
        import: ['@babel/register'], // ✅ Corrected to an array
        worldParameters: {},
    }
};
