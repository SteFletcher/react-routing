module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                include: /src/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'}
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}