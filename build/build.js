// Dependencies
let fs = require('fs');
let uglify = require('uglify-js');

// Settings
let FILE_ENCODING = 'utf-8',
    PROJECT_NAME  = 'pmjs',
    LICENSE       = '../LICENSE',
    SOURCE_DIR    = '../source',
    OUTPUT_DIR    = '../deploy',
    SCRIPTS       = [
        'core.js',
        'config.js',
        'vector2.js',
        'dot.js',
        'line.js',
        'quadtree.js',
        'plane.js',
        'renderer.js'
    ];

// Returns a path string from a list of path segments
function getPath() {
    return [].join.call(arguments, '/');
}

// Processes the specified files, creating a concatenated and a concatenated and minified output
function process() {
    let joined, license, unminified, minified;

    // Read the license
    license = '/*' + fs.readFileSync(LICENSE, FILE_ENCODING) + '*/';

    // Join the contents of all sources files into a single string
    joined = SCRIPTS.map(function(file) {
        return fs.readFileSync(getPath(SOURCE_DIR, file), FILE_ENCODING);
    }).join('\n');

    // Unminified
    unminified = license + '\n' + joined;

    // Minified
    minified = license + uglify.minify(joined, {}).code;

    // Write out the concatenated file
    fs.writeFileSync(getPath(OUTPUT_DIR, PROJECT_NAME + '.js'), unminified, FILE_ENCODING);

    // Write out the minfied file
    fs.writeFileSync(getPath(OUTPUT_DIR, PROJECT_NAME + '.min.js'), minified, FILE_ENCODING);

    console.log('build complete');
}

// GO!
process();