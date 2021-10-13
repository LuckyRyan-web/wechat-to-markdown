module.exports = {
    semi: false,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['src/**/*.ts', 'src/**/*.js'],
            options: {
                parser: 'typescript',
            },
        },
    ],
}
