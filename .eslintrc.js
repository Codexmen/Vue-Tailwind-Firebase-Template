module.exports = {
    env: {
        node: true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    rules: {
        'prettier/prettier': ['error'],
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        indent: 'off', // prettier is handling indent
        'max-len': 'off', // prettier is handling length - if length is longer then prettier can't format it differently.
        'vue/html-indent': 'off', // prettier is handling indent
        'vue/first-attribute-linebreak': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
            },
        ],
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
    },
};
