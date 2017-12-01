cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.applozic.phonegap/www/applozic.js",
        "id": "com.applozic.phonegap.applozic",
        "pluginId": "com.applozic.phonegap",
        "clobbers": [
            "applozic"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.applozic.phonegap": "0.8.0",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});