var concat = require('concat');
const es5 = ['./dist/weather-app/browser/runtime-es5.js','./dist/weather-app/browser/polyfills-es5.js','./dist/weather-app/browser/main-es5.js'];
const es2015= ['./dist/weather-app/browser/runtime-es2015.js','./dist/weather-app/browser/polyfills-es2015.js','./dist/weather-app/browser/main-es2015.js'];
concat(es5, './dist/weather-app/browser/elements-es5.js');
concat(es2015, './dist/weather-app/browser/elements-es2015.js');