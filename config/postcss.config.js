module.exports = {
    plugins: [
        require('postcss-import'),
        require('lost'),
        require('postcss-cssnext')({
            features: {
                rem: false, // it will not add fallback from rem to px
            },
        }),
    ]
};
