$(document).ready(function(){

$('#btn-volver').on('click', function() {
$('#central').load('btn-menu-gestion.html')
});

function Contratante (nombre, cotUSD, cotEur) {
this.nombre = nombre;
this.cotUSD = cotUSD;
this.cotEur = cotEur;
this.mostrarCotizaciones = function(event) {
    var contr = event;
    document.getElementById("info-contr").innerHTML = contr.nombre;
    document.getElementById("imp-cot-USD").innerHTML = contr.cotUSD;
    if(contr.cotEur){
    document.getElementById("info-contr2").innerHTML = contr.nombre;
    document.getElementById("imp-cot-EUR").innerHTML = contr.cotEur;
    }else{
        document.getElementById("info-contr2").innerHTML = '-';
        document.getElementById("imp-cot-EUR").innerHTML = '-';
    }
    };
}

let brings = new Contratante('AGENCIA MARITIMA BRINGS SA', 41.97,43.5);
let ami = new Contratante('AGENCIA MARITIMA INTERNACIONAL SA', 58.95,47.25);
let multimar = new Contratante('AGENCIA MARITIMA MULTIMAR SA', 47.58, false);
let bactssa = new Contratante('BACTSSA', 41.20, false)
let consultNucleo = new Contratante('CONSULTORA NUCLEO', 41.58, false);
let lakaut = new Contratante('LAKAUT', 44.38, false);
let maersk = new Contratante('MAERSK LINE', 41.58, 46.95);
let one = new Contratante('OCEAN NETWORK EXPRESS', 41.58, 45.20);
let rsi = new Contratante('RSI GROUP', 41.98, false);
let ssa = new Contratante('STAR SHIPPING ARGENTINA', 41.58, 39.05);
let trm4 = new Contratante('TERMINAL 4', 40.58, false);

$('body').click(function(event) {
    let contratante = event.target.value;
    if(contratante === "brings"){
    this.brings = brings;
    console.log(brings)
    brings.mostrarCotizaciones(this.brings)
    }else if( contratante === "ami"){    
    this.ami = ami;
    ami.mostrarCotizaciones(this.ami)
    }else if( contratante === "multimar"){
    this.multimar = multimar;
    multimar.mostrarCotizaciones(this.multimar)    
    }else if( contratante === "bactssa"){
            this.bactssa = bactssa;
    bactssa.mostrarCotizaciones(this.bactssa)
    }else if( contratante === "consultNucleo"){
    this.consultNucleo = consultNucleo;
    consultNucleo.mostrarCotizaciones(this.consultNucleo)
    }else if( contratante === "lakaut"){
            this.lakaut = lakaut;
    lakaut.mostrarCotizaciones(this.lakaut)
    }else if( contratante === "maersk"){
            this.maersk = maersk;
    maersk.mostrarCotizaciones(this.maersk)
    }else if( contratante === "one"){
            this.one = one;
    one.mostrarCotizaciones(this.one)
    }else if( contratante === "rsi"){
            this.rsi = rsi;
    rsi.mostrarCotizaciones(this.rsi)
    }else if( contratante === "ssa"){
            this.ssa = ssa;
    ssa.mostrarCotizaciones(this.ssa)
    }else if( contratante === "trm4"){
    this.trm4 = trm4;
    trm4.mostrarCotizaciones(this.trm4)
    }else {}
    });


})