// ***** FUNCTION QUI GERE LES RACES *****
function raceMod1(){
    if (player1.race == "human"){
        player1.totalDamage *= 0.8;
    } else if (player1.race == "orc"){
        player1.currenthealth += 40;
        player1.currenthealth;
        player1.maxHealth += 40;
        document.getElementById("hpLeft1").setAttribute("max", player1.currenthealth);
        document.getElementById("hpLeft1").setAttribute("value", player1.maxHealth);
    } else if (player1.race == "elve"){
        document.getElementById("name1").innerHTML = "Enculéééééééé";
    } else if (player1.race == "vampire"){
        document.getElementById("name1").innerHTML = "Go suck yourself";
    }
}

function raceMod2(){
    if (player2.race == "human"){
        player2.totalDamage *= 0.8;
    } else if (player2.race == "orc"){
        player2.currenthealth += 40;
        player2.maxHealth += 40;
        document.getElementById("hpLeft2").setAttribute("max", player2.currenthealth);
        document.getElementById("hpLeft2").setAttribute("value", player2.maxHealth);
    } else if (player2.race == "elve"){
        document.getElementById("name1").innerHTML = "Enculéééééééé";
    } else if (player2.race == "vampire"){
        document.getElementById("name1").innerHTML = "Go suck yourself";
    }
}

// ***** FUNCTION QUI GERE LES ITEMS *****

function rand(){
    var rand = Math.random();
    var rounded = Math.round(rand * 10) / 10;
}

function itemMod1(){

    var rand = Math.random();
    var rounded = Math.round(rand * 10) / 10;

    if (player1.item =="boots"){
        if(rounded < 0.3){
            // player2.damage() = 0;
            console.log("Dodged assh*le")
        }
    } else if (player1.item =="staff"){
        damageDone = player1.damage();
        player1.maxHealing *= 1.2;
    } else if (player1.item =="sword"){
        x = player1.damage();
        w = Math.ceil(x);
        x *= 1.3;
        y = Math.ceil(x);
        z = Math.round(y);
        damageDone = z;
    } else if(player1.item =="bow"){
        x = player1.damage();
        damageDone = x;
        if(rounded < 0.3){
           damageDone *= 2;
            console.log("Critical Strike");
            return damageDone;
        }
    }
}
function itemMod2(){
    var rand = Math.random();
    var rounded = Math.round(rand * 10) / 10;

    if (player2.item =="boots"){
        if(rounded < 0.3){
            // player2.damage() = 0;
            console.log("Dodged assh*le")
        }
    } else if (player2.item =="staff"){
        damageDone = player2.damage();
        player1.maxHealing *= 1.2;
    } else if (player2.item =="sword"){
        x = player2.damage();
        w = Math.ceil(x);
        x *= 1.3;
        y = Math.ceil(x);
        z = Math.round(y);
        damageDone = z;
    } else if(player2.item =="bow"){
        x = player2.damage();
        damageDone = x;
        if(rounded < 0.3){
           damageDone *= 2;
            console.log("Critical Strike");
            return damageDone;
        }
    }
}

// **** ACTIVE ET DESACTIVE LES BOUTONS ****

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

// ***** FUNCTION QUI GERE LES NEWPLAYERS *****

function newPlayer1(){
    player1 = new Person(document.getElementById("nameChar1").value, document.getElementById("race1").value, document.getElementById("item1").value);
    document.getElementById("name1").innerHTML = document.getElementById("nameChar1").value;
    document.getElementById("perso1").innerHTML = document.getElementById("race1").options[race1.selectedIndex].text;
    document.getElementById("items1").innerHTML = document.getElementById("item1").options[item1.selectedIndex].text;
    raceMod1();
    console.log(player1);
    player1.displayChar();
}

function newPlayer2(){
    player2 = new Person(document.getElementById("nameChar2").value, document.getElementById("race2").value, document.getElementById("item2").value);
    document.getElementById("name2").innerHTML = document.getElementById("nameChar2").value;
    document.getElementById("perso2").innerHTML = document.getElementById("race2").options[race2.selectedIndex].text;
    document.getElementById("items2").innerHTML = document.getElementById("item2").options[item2.selectedIndex].text;
    raceMod2();
    console.log(player2);
    player2.displayChar();
}

// ***** FUNCTION BOUTON D'ATTAQUE *****

document.getElementById("attack1").addEventListener("click", () => {
    itemMod1();
    console.log(damageDone);
    newLife = player2.currenthealth - damageDone;
    player2.currenthealth = newLife;
    document.getElementById("hpLeft2").setAttribute("value", newLife);
    console.log(newLife);
    if (player2.currenthealth <= 0){ 
        alert(`${player2.name} LOST HAHA, Press ok to revenge`);
        window.location.reload();
    }
    disable1();
    enable2();
})

document.getElementById("attack2").addEventListener("click", () => {
    itemMod2();
    console.log(damageDone);
    newLife = player1.currenthealth - damageDone;
    player1.currenthealth = newLife;
    document.getElementById("hpLeft1").setAttribute("value", newLife);
    console.log(newLife);
    if (player1.currenthealth <= 0){ 
        alert(`${player1.name} LOST HAHA, Press ok to revenge`);
        window.location.reload();
    }
    disable2();
    enable1();
})

// ***** FONCTION BOUTON DE HEAL