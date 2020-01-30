var fs = require('fs');

function openAndRead(filename) {
  console.log(process.argv);
  var text = fs.readFileSync(filename, 'utf-8');
  return text;
}

console.log(openAndRead('../sample_data/great-gatsby.txt'));
