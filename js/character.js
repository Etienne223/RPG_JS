// **** VAR COMBATS BASIC****
var lifepoint = 200;
var attack = randAttack();
var heal = 15;
var block = 10;
// var magic = 100;
// var dodge = 10;

// **** VAR EQUIPEMENTS ****
var staff = heal * 1.2;
var sword = attack * 1.3;
// var boots = dodge * 1.3;
// var bow  = cc * 1.3;

// **** VAR RECUPERATION ****
// ** Joueur 1 **
var name1 = document.getElementById("nameChar1").value;
var race1 = document.getElementById("race1").value;
var item1 = document.getElementById("item1").value;

// ** Joueur 2 **
var name2 = document.getElementById("form2").nameChar2.value;
var race2 = document.getElementById("form2").race.value;
var item2 = document.getElementById("form2").items.value;

// https://stackoverflow.com/questions/11552158/percentage-chance-of-saying-something/11552190 pourcentage de chance


// **** FONCTIONS ****

// ** Random attack **  
function randAttack(){
    var attack2 = 0;
    for (let i = 0; i <10; i++){
      attack2 =  Math.floor((Math.random()*4)+5);
      return attack2; 
    }
}

//** Get values **



// **** CLASSES DE PERSONNAGE ****  https://www.w3schools.com/js/js_objects.asp

var humain = {
    "type": "Human",
    "lifepoints": lifepoint,
    "attckdmg": randAttack(),
    "blockdmg": block,
}

var elve = {
    "type": "Elve",
    "lifepoints": lifepoint,
    "attckdmg": attack,
    "blockdmg": block,
}

var orc = {
    "type": "Orc",
    "lifepoints": lifepoint * 1.4,
    "attckdmg": attack,
    "blockdmg": block,
}

var vampire = {
    "type": "Vampire",
    "lifepoints": lifepoint,
    "attckdmg": attack,
    "blockdmg": block, 
}

// **** PERSONNAGE 1 ****
var char1 = {


}

// **** PERSONNAGE 2 ****

function test(){
    console.log(name1);
    console.log(item1);
    console.log(race1);
}

document.getElementById("start").addEventListener("click",()=>{
    x = document.getElementById("chooseChar").style.display = "none";
    console.log(test());
})
