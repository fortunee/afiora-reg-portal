import fs from 'fs';  
import cheerio from 'cheerio';  
import colors from 'colors';
import path from 'path';

console.log(path.join( __dirname, '../src/client/index.html'));

fs.readFile(path.join( __dirname, '../src/client/index.html'), 'utf8', (err, markup) => {  
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('');

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /public'.green);
  });
});
