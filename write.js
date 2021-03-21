/**
 * burasi ise ikinci kisim
 * verilen datayi exel dosyasina yazdiracagiz.
 */

const xlsx = require('xlsx');
const {
   data
} = require('./Data');

let dataToSheet = xlsx.utils.json_to_sheet(data);
let book = xlsx.readFile('./OrnekDosya.xlsx');

xlsx.utils.book_append_sheet(book, dataToSheet, 'Sheet3');
xlsx.writeFile(book, './OrnekDosya.xlsx');

console.log('New Sheet added');