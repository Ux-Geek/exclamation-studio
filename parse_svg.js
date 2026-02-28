const fs = require('fs');

function extractBBox(file) {
    const content = fs.readFileSync(file, 'utf-8');
    const coords = content.match(/[\d.]+/g).map(Number);
    // Rough estimate
}
