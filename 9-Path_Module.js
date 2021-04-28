/**************************************  Path Module **************************************/

// Importing Built-in Path Module.
const path = require('path');


// It returns our Platform Specific Path Seprator.
console.log(`\nPath Seprator : ${path.sep}`);


// It joins sequence of Path Segments, using Path Seprator as the limitor and returns Normalize rezulting path.
const filePath = path.join('/content','subfolder','test.txt');
console.log(`\nFile Path : ${filePath}`);

// It takes the path and returns the base-name
const base = path.basename(filePath)
console.log(`\nBase Name : ${base}`);

// It returns an Absolute-Path by taking Path Segments.
const absolute = path.resolve(__dirname,'Content','Sub-Folder','test.txt');
console.log(`\nAbsolute Path : ${absolute}`);