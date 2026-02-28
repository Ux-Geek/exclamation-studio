import fs from 'fs';
function findRealExtremes(file) {
    const text = fs.readFileSync(file, 'utf8');
    const matches = [...text.matchAll(/[MLC](\s*[\d.]+\s*,\s*[-]?[\d.]+\s*)+/g)];
    let pts = [];
    matches.forEach(m => {
        const pairs = m[0].substring(1).split(',').map(s=>s.trim()).map(Number);
        for(let i=0; i<pairs.length; i+=2) {
             let n1=pairs[i], n2=pairs[i+1];
             if(!isNaN(n1) && !isNaN(n2)) { pts.push([n1, n2]); }
        }
    });

    // Or just all numbers in the entire set of d="..."
    let dMatches = text.match(/d="([^"]+)"/g) || [];
    let allNums = [];
    let isX = true;
    let minX=10000, maxX=-10000, minY=10000, maxY=-10000;
    
    dMatches.forEach(d => {
       const str = d.replace(/d="/,'').replace(/"/,'');
       // simple sequential split, assumes alternate x y roughly
       const tokens = str.match(/[-]?[\d.]+/g);
       if(tokens) {
           for(let i=0; i<tokens.length-1; i+=2){
              let x = Number(tokens[i]);
              let y = Number(tokens[i+1]);
              if(x>200 && x<900 && y>200 && y<900) {
                 minX = Math.min(minX, x);
                 maxX = Math.max(maxX, x);
                 minY = Math.min(minY, y);
                 maxY = Math.max(maxY, y);
              }
           }
       }
    });
    console.log(file, {minX, maxX, minY, maxY, w: maxX-minX, h: maxY-minY});
}
findRealExtremes(process.argv[2]);
