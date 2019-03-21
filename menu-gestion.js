$(document).ready(function(){

function Contratante (nombre, cotUSD, cotEur) {
this.nombre = nombre;
this.cotUSD = cotUSD;
this.cotEur = cotEur;
this.appendElem = function(event) {
    console.log(event)
    $('#central').load('gest-online.html');    
    };       
}

let sudocean = new Contratante('SUDOCEAN', 41.20, false);
let ami = new Contratante('AGENCIA MARITIMA INTERNACIONAL SA', 58.95,47.25);
let brings = new Contratante('AGENCIA MARITIMA BRINGS SA', 41.97,43.5);
let yangMing = new Contratante('YANG MING', 40.58, false);
let maersk = new Contratante('MAERSK LINE', 41.58, 46.95);
let multimar = new Contratante('AGENCIA MARITIMA MULTIMAR SA', 47.58, false);
let trm4 = new Contratante('TERMINAL 4', 40.58, false);
let ssa = new Contratante('STAR SHIPPING ARGENTINA', 41.58, 39.05);
let one = new Contratante('OCEAN NETWORK EXPRESS', 41.58, 45.20);

$('#btn-volver').on('click', function() {
    $('#central').load('btn-menu-gestion.html');
    return false;
});

$('button').click(function( event ) {

    let contratante = event.target.value;
    console.log(contratante)
    
    if( contratante === "sudocean"){
    this.sudocean = sudocean;
    sudocean.appendElem(this.sudocean)
    }
    else if(contratante === "brings"){
    this.brings = brings;
    brings.appendElem(this.brings)
    }
    else if( contratante === "ami"){    
    this.ami = ami;
    ami.appendElem(this.ami)
    }
    else if( contratante === "yangMing"){    
    this.yangMing = yangMing;
    yangMing.appendElem(this.yangMing)
    }
    else if( contratante === "multimar"){
    this.multimar = multimar;
    multimar.appendElem(this.multimar)    
    }
    else if( contratante === "maersk"){
    this.maersk = maersk;
    maersk.appendElem(this.maersk)
    }
    else if( contratante === "one"){
    this.one = one;
    one.appendElem(this.one)
    }
    else if( contratante === "ssa"){
    this.ssa = ssa;
    ssa.appendElem(this.ssa)
    }
    else if( contratante === "trm4"){
    this.trm4 = trm4;
    trm4.appendElem(this.trm4)
    }
    else {}
    });
})