/**bu proje iki kisimdan olusmaktadir.
 * -verilen bir exel dosyasini node kullanarak konsola yazdirmak.
 * -verilen bir datayi node kullanarak exel dasyasina yazdirmak. 
 */

//xlsx dosyasini okumak icin gerekli fonsksiyonu cagirdik.
let xlsx = require("xlsx");

//fonksiyonumuzu ve xlsx dosyamizi iliskilendirdik.
let wb = xlsx.readFile("OrnekDosya.xlsx",{cellDates:true});

// xlsx dosyasindaki sayfalari degiskenlere atadik(fonksiyonlar vasitasiyla)
let ws = wb.Sheets["Sheet1"];
let ws2= wb.Sheets["Sheet2"]

//sayfalarimizi consola cagiriyoruz.
console.log(ws,ws2);

// terminale node read.js yazarak calistiriyotuz.