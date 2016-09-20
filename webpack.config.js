/**
 * Created by caiyongbin on 2016/9/19.
 */

var webpack = require('webpack')

module.exports = {
    entry: __dirname + "/app/main.js",
    output:{
        path: __dirname + "/static",
        filename: "test.js"
    }
}
