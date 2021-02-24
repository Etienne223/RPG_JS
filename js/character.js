// **** VAR COMBATS BASIC****
var lifepoint = 200;
var attack = 10;
var heal = 15;
var block = 10;
var magic = 100;
var dodge = 10;



// **** VAR EQUIPEMENTS ****
var staff = heal * 1.2;
var sword = attack * 1.3;
var boots = dodge * 1.3;
// var bow  = cc * 1.3;

// **** VAR RECUPERATION ****
// ** Joueur 1 **
var name1 = document.getElementById("form1").nameChar1.value;
var race1 = document.getElementById("form1").race.value;
var item1 = document.getElementById("form1").items.value;

// ** Joueur 2 **
var name2 = document.getElementById("form2").nameChar2.value;
var race2 = document.getElementById("form2").race.value;
var item2 = document.getElementById("form2").items.value;

// https://stackoverflow.com/questions/11552158/percentage-chance-of-saying-something/11552190 pourcentage de chance

// **** CLASSES DE PERSONNAGE ****  https://www.w3schools.com/js/js_objects.asp

var humain = {
    type: "Human",
    lifepoints: lifepoint,
    Attckdmg: attack,
    blockdmg: block,
    magic: magic,
    dmgsuff: (attack * 0.3) 
}

var elve = {
    type: "Elve",
    lifepoints: lifepoint,
    Attckdmg: attack,
    blockdmg: block,
    magic: magic,
    dmgsuff: (attack * 0.3) 
}

var orc = {
    type: "Orc",
    lifepoints: lifepoint * 1.4,
    Attckdmg: attack,
    blockdmg: block,
    magic: magic,
    dmgsuff: (attack * 0.3) 
}

var vampire = {
    type: "Vampire",
    lifepoints: lifepoint,
    Attckdmg: attack,
    blockdmg: block,
    magic: magic,
    dmgsuff: (attack * 0.3) 
}

// **** PERSONNAGE 1 ****



var char1 = {


}

// **** PERSONNAGE 2 ****

document.getElementById("encu").addEventListener("click",()=>{

    x = document.getElementById("chooseChar").style.display = "none";


})
