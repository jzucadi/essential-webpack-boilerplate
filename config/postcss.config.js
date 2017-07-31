module.exports = {
    plugins: [
        require('postcss-import'),
        require('lost'),
        require('rucksack-css'),
        require('postcss-cssnext')({
            features: {
                rem: false, // it will not add fallback from rem to px
            },
        }),
    ]
};
