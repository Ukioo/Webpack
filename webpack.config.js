const path=require('path');
module.exports={
    entry:{
        app:'./index2'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                	{loader:"style-loader"},
                	{loader:"css-loader"}
                ]
            },
            {
		        test: /\.css$/,
		        use: css.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		    }
        ]
 	},
 	plugins: [
	    new css("app.css"),
	]
}