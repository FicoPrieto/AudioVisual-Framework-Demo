/// <reference types="webpack-dev-server" />
import Webpack from "webpack";
declare const WebpackConfiguration: ((env: any) => Webpack.Configuration);
export default WebpackConfiguration;
