//###  Node  ###//
import Path from "path"

//###  NPM  ###//
import Webpack              from "webpack"
import {CleanWebpackPlugin} from "clean-webpack-plugin"
import HtmlWebpackPlugin    from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {RegEx_Preset}       from  "./Loaders/RegEx_Replacer"


//###############//
//###  Setup  ###//
//###############//

const configPath = Path.dirname(Path.resolve(__dirname))
const rootPath   = Path.dirname(configPath)

const buildFolder = "__Build__"
const buildPath   = Path.join(rootPath, buildFolder )

const sourceFolder = "__Source__"
const sourcePath   = Path.join(rootPath,   sourceFolder                 )
const modulesPath  = Path.join(sourcePath, "__Modules__"                )
const settingsPath = Path.join(sourcePath, "__Main__",   "Settings.json")

const mainScript = `./${sourceFolder}/__Main__/______Script______/__Main__.ts`
const mainLayout = `./${sourceFolder}/__Main__/______Layout______/__Main__.pug`

const loadersPath    = Path.join(configPath, "Webpack", "Loaders")
const RegEx_Replacer = Path.join(loadersPath, "RegEx_Replacer.ts")

const tsConfig = Path.join(rootPath, "tsconfig.json")


//########################//
//###  Export.Default  ###//
//########################//

const WebpackConfiguration: ((env:any) => Webpack.Configuration) = (env:any)=>{
	return {
		target:  "web",
		entry:   mainScript,
		devtool: "inline-source-map",
		mode:    "development",

		output: {
			filename: "[name].bundle.js",
			path:     buildPath,
		},

		devServer: {
			contentBase: `./${buildFolder}`,
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					use: {
						loader:  "ts-loader",
						options: {configFile:tsConfig}
					},
				},
				{
					test: /\.pug$/,
					use: [
						"pug-loader",
						{loader:RegEx_Replacer, options:{replace:[
							//###  ToDo: finish implementing evaluators  ###//
							// RegEx_Preset.interpolate_Setting,
							// RegEx_Preset.evaluate_String,
							RegEx_Preset.interpolate_String,
							RegEx_Preset.Pug.Attribute_LeadingWhitespace,
						]}},
					]
				},
				{
					test: /\.styl$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"stylus-loader",
						{loader:RegEx_Replacer, options:{replace:[
							//###  ToDo: finish implementing evaluators  ###//
							// RegEx_Preset.interpolate_Setting,
							// RegEx_Preset.evaluate_String,
							RegEx_Preset.interpolate_String,
							RegEx_Preset.Pug.Attribute_LeadingWhitespace,
						]}},
					],
				},
			],
		},

		resolve: {
			extensions: [
				".js",
				".ts",
				".styl",
			],
			alias: {
				"~":        sourcePath,
				"Root":     sourcePath,
				"@":        modulesPath,
				"Settings": settingsPath,
			},
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({template:mainLayout}),
			new MiniCssExtractPlugin(),
		],
	}
}

export default WebpackConfiguration
