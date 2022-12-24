var kalinlik = document.querySelector("#Kalinlik");
var Krenk = document.querySelector("#KalemRenk");
var Zrenk = document.querySelector("#ZeminRenk");
var tablo = document.querySelector("#tablo");

var canvas = tablo.getContext("2d");
tablo.width = window.innerWidth - 100 ;
tablo.height = window.innerHeight -100;

var cizgi = false;
var x1,y1,x2,y2;

function KalemKalinlik(){
    canvas.lineWidth = kalinlik.value; // KALEMİN KALINIGINI AYARLAR(çizgi)
}

function KalemRengi(){
    canvas.strokeStyle = Krenk.value;  // kalemin rengini ayarlar

}
function ZeminRengi(){
    canvas.fillStyle = Zrenk.value; // fill doldur demek türkçe ve 
    canvas.fillRect(0,0 , tablo.width , tablo.height); // 0 a 0 ,indexten başla tablonun genişliği ve yüksekliği boyunca devam et

}
function Temizle(){
    canvas.clearRect(0,0, tablo.width , tablo.height ) //rect dikdortggenden geliyor

}

function Basla(event) {
    cizgi= true;
    x1 = event.clientX - 20 ;  // bu satırdaki  kod x in o andaki x eksenin de ki degeri verir
    y1 = event.clientY - 60; // bu satırdaki  kod y in o andaki y eksenin de ki degeri verir

    canvas.beginPath();     // çizim yaptırmaya baslar
    canvas.moveTo(x1,y1)     // baslangıc noktasını belirtmeye yarıyor
}
function Ciz(event){
    if(cizgi ){
        x2  = event.clientX -20;         // o anki anlık degeri yani basladıktan sonra ki herhangi bir noktaya x2 ve y2 dicez
        y2  = event.clientY -60;
        canvas.lineTo(x2,y2);       // x2 ve y2 ye çizgiyi çek
        canvas.stroke();            // stroke ile bu olayı gerçekleştir diyoruz
    }
}
function Bitir(){
    cizgi = false ;
    canvas.closePath();
}