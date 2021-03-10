
// **** DISABLE AND ENABLE BUTTONS ****
// ** Player1 buttons **

function disable1(){
    document.getElementById("attack1").disabled = true;
    document.getElementById("heal1").disabled = true;
    document.getElementById("yield1").disabled = true;
}
function enable1(){
    document.getElementById("attack1").disabled = false;
    document.getElementById("heal1").disabled = false;
    document.getElementById("yield1").disabled = false;
}

// ** Player2 buttons **

function disable2(){
    document.getElementById("attack2").disabled = true;
    document.getElementById("heal2").disabled = true;
    document.getElementById("yield2").disabled = true;
}
function enable2(){
    document.getElementById("attack2").disabled = false;
    document.getElementById("heal2").disabled = false;
    document.getElementById("yield2").disabled = false;
}

// Créer une fonction qui gère les atouts au début de chaque tour et une fonction qui gère les atouts au début de partie

newPlayer1 = () => {

    var name1 = document.getElementById("nameChar1").value;
    document.getElementById("name1").innerHTML = name1;

    var race1 = document.getElementById("race1").value; // Prends la valeur de Race du form HTML
    var raceOOF = document.getElementById("race1"); // Permet de récup la valeur HTML correspondant à race1
    var raceHTML = raceOOF.options[raceOOF.selectedIndex].text; // Prends la valeur HTML du form
    document.getElementById("perso1").innerHTML = raceHTML; // Display la valeur HTML dans l'html

    var item1 = document.getElementById("item1").value;
    var itemOOF = document.getElementById("item1");
    var itmHTML = itemOOF.options[itemOOF.selectedIndex].text;
    document.getElementById("items1").innerHTML = itmHTML;
    player1 = new Person(race1, item1, name1); // Crée la nouvelle Person avec le constructeur de classe
    raceMod1();

    player1.displayChar();

}


// **** HANDLE RACES ****

function raceMod1(){
    if (newPlayer1.race == "orc"){
        orc1 = player1.maxHealth +40;
        orc2 = player1.currenthealth +40;
        document.getElementById("hpLeft1").setAttribute("max", orc1);
        document.getElementById("hpLeft1").setAttribute("value", orc2);
}
}

// **** HANDLE ITEMS ****

// function raceMod(){
//     if (Person.race == "human"){
//         this.damage() * 0.2; 
//     } else if (Person.race == "elve"){
//         if (Math.random() *100 < 20){
//             this.damage * 2;
//         }
//     } else if (Person.race == "orc"){
//         this.maxHealth =+ 40;
//         document.getElementById("hpLeft1").setAttribute("max", player1.maxHealth);
//         document.getElementById("hpLeft1").setAttribute("value", player1.currenthealth);
//         document.getElementById("hpLeft2").setAttribute("max", player2.maxHealth);
//         document.getElementById("hpLeft2").setAttribute("value", player2.currenthealth);
//     } else if (Person.race == "vampire"){
//         player1.currenthealth = player1.currenthealth + (player2.currenthealth *0.1);
//         player2.currenthealth = player2.currenthealth -  (player2.currenthealth *0.1);
//     }
// }



// function itemMod{

// }