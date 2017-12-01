cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.applozic.phonegap.applozic",
    "file": "plugins/com.applozic.phonegap/www/applozic.js",
    "pluginId": "com.applozic.phonegap",
    "clobbers": [
      "applozic"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.applozic.phonegap": "0.8.0"
};
// BOTTOM OF METADATA
});