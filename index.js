module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-base'
    ],
    env: {
        browser: true,
        es6: true,
        jquery: true,
    },
    root: true,
    rules: {
        'no-undef': 0,
        'prefer-const': 0,
        'quotes': 0,
        'no-var': 0,
        'padding-line-between-statements': 0,
        'prefer-destructuring': 0
    }
};
