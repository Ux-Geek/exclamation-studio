const fs = require('fs');

function extractBBox(file) {
    const content = fs.readFileSync(file, 'utf-8');
    const coords = content.match(/[\d.]+/g).map(Number);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    // Quick heuristic: look at path commands ending in coordinates.
    // SVG strings have numbers mixed in. Let's just find the absolute min and max of all reasonable numbers > 10
    coords.forEach((n, i) => {
        if(n > 100 && n < 900) { // filter out small curve params/versions
            // rough guess: x coords are typically around 300-700, y coords 400-600 in these svgs based on the files
             if (i % 2 === 0) {
                 minX = Math.min(minX, n);
                 maxX = Math.max(maxX, n);
             } else {
                 minY = Math.min(minY, n);
                 maxY = Math.max(maxY, n);
             }
        }
    });
    console.log(`${file}: minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}`);
}
extractBBox(process.argv[2]);
