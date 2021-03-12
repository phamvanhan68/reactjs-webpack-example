## MiniCssExtractPlugin.loader vs styled-loader
    MiniCssExtractPlugin.loader
        > create a separate css file

    styled-loader
        > inject css inside bundle, and not create any css file

## .browserslistrc
    last 2 versions
    > 0.5%
    IE 10

    **Note**: this will effect the hot reload. (probably a bug of webpack)

## postcss-loader and sass-loader
    sass-loader should be put at the end of array as recomendation of docs