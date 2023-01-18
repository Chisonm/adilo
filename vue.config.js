module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
                context: "src",
                outputPath: "assets",
              },
            },
          ],
        },
      ],
    },
  },
};
