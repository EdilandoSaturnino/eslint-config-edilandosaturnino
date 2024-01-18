const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '.eslintrc.cjs');

const targetFile = path.join(__dirname, '..', '..', '.eslintrc.cjs');

fs.copyFileSync(sourceFile, targetFile);

console.log('.eslintrc.cjs copiado para a raiz do projeto');
