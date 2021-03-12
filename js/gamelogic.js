// ***** FUNCTION QUI GERE LES RACES *****

function raceMod1(){
    if (player1.race == "orc"){
        player1.currenthealth *= 1.4;
        player1.currenthealth;
        player1.maxHealth *= 1.4;
        document.getElementById("hpLeft1").setAttribute("max", player1.currenthealth);
        document.getElementById("hpLeft1").setAttribute("value", player1.maxHealth);
    }
}

function raceMod2(){
   if (player2.race == "orc"){
        player2.currenthealth *= 1.4;
        player2.maxHealth *= 1.4;
        document.getElementById("hpLeft2").setAttribute("max", player2.currenthealth);
        document.getElementById("hpLeft2").setAttribute("value", player2.maxHealth);
    }
}

// *** Fonction qui gère human et elf ***

function raceModHE1(){
    if (player2.race =="human"){
        damageDone1 *= 0.8;
        x = Math.ceil(damageDone1);
        y = Math.round(x);
        damageDone1 = y;
    } else if (player2.race == "elve"){
        var rand = Math.random();
        var rounded = Math.round(rand * 10) / 10;
        if (rounded > 0.3){
        console.log("Dodge");
        player1.currenthealth = player1.currenthealth - (damageDone1 / 2);
        damageDone1 = 0;   
        return damageDone1;
        }
    }
}

function raceModHE2(){
    if (player1.race =="human"){
        damageDone2 *= 0.8;
        x = Math.ceil(damageDone2);
        y = Math.round(x);
        damageDone2 = y;
    } else if(player2.race == "elve"){
        var rand = Math.random();
        var rounded = Math.round(rand * 10) / 10;
        if (rounded > 0.3){
            console.log("Dodge");
            player2.currenthealth = player2.currenthealth - (damageDone2 / 2);
            damageDone2 = 0;   
            return damageDone2;
        }
    }
}
// ***** FUNCTION QUI GERE LES ITEMS *****

function itemMod1(){
    var rand = Math.random();
    var rounded = Math.round(rand * 10) / 10;
    if (player2.item =="boots"){
        x = player1.damage();
        damageDone1 = x;
        h = player1.heal();
        healDone1 = h;
        if(rounded < 0.3){
            damageDone1 = 0;
            console.log("Dodged")
            return damageDone1
        }
    } else if (player1.item =="staff"){
        damageDone1 = player1.damage();
        x = player1.heal();
        w = Math.ceil(x);
        x *= 1.2;
        y = Math.ceil(x);
        z = Math.round(y);
        healDone1 = z;
    } else if (player1.item =="sword"){
        healDone1 = player1.heal();
        x = player1.damage();
        w = Math.ceil(x);
        x *= 1.3;
        y = Math.ceil(x);
        z = Math.round(y);
        damageDone1 = z;
    } else if(player1.item =="bow"){
        x = player1.damage();
        damageDone1 = x;
        h = player1.heal();
        healDone1 = h;
        if(rounded < 0.3){
           damageDone1 *= 2;
            console.log("Critical Strike");
            return damageDone1;
        }
    }
}
function itemMod2(){
    var rand = Math.random();
    var rounded = Math.round(rand * 10) / 10;
    if (player1.item =="boots"){
        x = player2.damage();
        damageDone2 = x;
        h = player2.heal();
        healDone2 = h;
        logdodge;
        if(rounded < 0.3){
            damageDone2 = 0;
            console.log("Dodged")
            return damageDone2;
        }
    } else if (player2.item =="staff"){
        damageDone2 = player2.damage();
        x = player2.heal();
        w = Math.ceil(x);
        x *= 1.2;
        y = Math.ceil(x);
        z = Math.round(y);
    } else if (player2.item =="sword"){
        healDone2 = player2.heal();
        x = player2.damage();
        w = Math.ceil(x);
        x *= 1.3;
        y = Math.ceil(x);
        z = Math.round(y);
        damageDone2 = z;
    } else if(player2.item =="bow"){
        x = player2.damage();
        damageDone2 = x;
        h = player1.heal();
        healDone2 = h;
        if(rounded < 0.3){
           damageDone2 *= 2;
            console.log("Critical Strike");
            return damageDone2;
        }
    }
}

// **** ACTIVE ET DESACTIVE LES BOUTONS + VAMPIRE ****

function disable1(){
    document.getElementById("attack1").disabled = true;
    document.getElementById("heal1").disabled = true;
    document.getElementById("yield1").disabled = true;
}
function enable1(){
    document.getElementById("attack1").disabled = false;
    document.getElementById("heal1").disabled = false;
    document.getElementById("yield1").disabled = false;
    if (player1.race =="vampire"){
        player1.currenthealth = player1.currenthealth + (player2.currenthealth * 0.05);
        x =  player1.currenthealth;
        document.getElementById("hpLeft1").setAttribute("value", x);
    }
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
    if (player2.race =="vampire"){
        player2.currenthealth = player2.currenthealth + (player1.currenthealth * 0.05);
        x = player2.currenthealth
        if (x >= 100){
            x = 100;
        }
        document.getElementById("hpLeft2").setAttribute("value", x);
    }
}

// ***** FUNCTION QUI GERE LES NEWPLAYERS *****

function newPlayer1(){
    player1 = new Person(document.getElementById("nameChar1").value, document.getElementById("race1").value, document.getElementById("item1").value);
    document.getElementById("name1").innerHTML = document.getElementById("nameChar1").value;
    document.getElementById("perso1").innerHTML = document.getElementById("race1").options[race1.selectedIndex].text;
    document.getElementById("items1").innerHTML = document.getElementById("item1").options[item1.selectedIndex].text;
    raceMod1();
    persoImg1();
    console.log(player1);
    player1.displayChar();
}

function newPlayer2(){
    player2 = new Person(document.getElementById("nameChar2").value, document.getElementById("race2").value, document.getElementById("item2").value);
    document.getElementById("name2").innerHTML = document.getElementById("nameChar2").value;
    document.getElementById("perso2").innerHTML = document.getElementById("race2").options[race2.selectedIndex].text;
    document.getElementById("items2").innerHTML = document.getElementById("item2").options[item2.selectedIndex].text;
    raceMod2();
    persoImg2();
    console.log(player2);
    player2.displayChar();
}

// ***** FUNCTION BOUTON D'ATTAQUE *****

document.getElementById("attack1").addEventListener("click", () => {
    clickSound();
    itemMod1();
    raceModHE1();
    newLife = player2.currenthealth - damageDone1;
    player2.currenthealth = newLife;
    document.getElementById("hpLeft2").setAttribute("value", newLife);
    logtxt = `You did ${damageDone1} to ${player2.name} ! HP left : ${player2.currenthealth}`
    logss();
    ending2();
    disable1();
    enable2();
})

document.getElementById("attack2").addEventListener("click", () => {
    clickSound();
    itemMod2();
    raceModHE2();
    newLife = player1.currenthealth - damageDone2;
    player1.currenthealth = newLife;
    document.getElementById("hpLeft1").setAttribute("value", newLife);
    logtxt = `You did ${damageDone2} to ${player1.name} ! HP left : ${player1.currenthealth}`
    logss();
    ending1();
    disable2();
    enable1();
})

// ***** FONCTION BOUTON DE HEAL *****

document.getElementById("heal1").addEventListener("click", ()=> {
    clickSound();
    itemMod1();
    newHeal1 = player1.currenthealth + healDone1;
    max = player1.maxHealth;
    curr = player1.currenthealth;
    if (newHeal1 > max){
        document.getElementById("hpLeft1").setAttribute("value", max);
    } else {
    player1.currenthealth = newHeal1;
    document.getElementById("hpLeft1").setAttribute("value", newHeal1);
    }
    logtxt = `You healed ${healDone1}, mmmmh you feel better !`
    logss();
    disable1();
    enable2();
})

document.getElementById("heal2").addEventListener("click", ()=> {
    clickSound();
    itemMod2();
    newHeal2 = player2.currenthealth + healDone2;
    max = player2.maxHealth;
    curr = player2.currenthealth;
    if (newHeal2 > max){
        document.getElementById("hpLeft2").setAttribute("value", max);
    } else {
    player2.currenthealth = newHeal2;
    document.getElementById("hpLeft2").setAttribute("value", newHeal2);
    }
    logtxt = `You healed ${healDone2}, mmmmh you feel better !`
    logss();
    disable2();
    enable1();
})

// ***** FONCTION BOUTON YIELD *****
document.getElementById("yield1").addEventListener("click", () => {
    clickSound();
    alert(`Did you really yield ${player1.name}? You're a disgrace for your ${player1.race} friends! Take your revenge now!`);
    window.location.reload();
})

document.getElementById("yield2").addEventListener("click", () => {
    clickSound();
    alert(`Did you really yield ${player2.name}? You're a disgrace for your ${player2.race} friends! Take your revenge now!`);
    window.location.reload();
})

// ***** FONCTION QUI AJOUTE LE TOUR PRECEDENT DANS L'HTML *****

function logss(){
    document.getElementById("logs").innerHTML = logtxt;
}

// ***** FONCTION QUI CHECK LA FIN DE PARTIE *****

function ending1(){
    if (player1.currenthealth <= 0){ 
        musicWin();
        alert(`${player1.name} LOST HAHA, Press ok to revenge`);
        window.location.reload();
    }
}

function ending2(){
    if (player2.currenthealth <= 0){ 
        musicWin();
        alert(`${player2.name} LOST HAHA, Press ok to revenge`);
        window.location.reload();
    }
}

// ***** FONCTION CHANGER IMAGE PERSONNAGE *****

function persoImg1(){
    document.getElementById("pixelChar1").style.visibility = "visible";
    if (player1.race == "human"){
        document.getElementById("pixelChar1").setAttribute("src", "assets/images/pixel_human1.gif")
    } else if (player1.race == "elve"){
        document.getElementById("pixelChar1").setAttribute("src", "assets/images/pixel_elve1.gif")
    } else if (player1.race == "orc"){
        document.getElementById("pixelChar1").setAttribute("src", "assets/images/pixel_orc1.gif")
    } else if (player1.race == "vampire"){
        document.getElementById("pixelChar1").setAttribute("src", "assets/images/pixel_vampire1.gif")
    }
}

function persoImg2(){
    document.getElementById("pixelChar2").style.visibility = "visible";
    if (player2.race == "human"){
        document.getElementById("pixelChar2").setAttribute("src", "assets/images/pixel_human.gif")
    } else if (player2.race == "elve"){
        document.getElementById("pixelChar2").setAttribute("src", "assets/images/pixel_elve.gif")
    } else if (player2.race == "orc"){
        document.getElementById("pixelChar2").setAttribute("src", "assets/images/pixel_orc.gif")
    } else if (player2.race == "vampire"){
        document.getElementById("pixelChar2").setAttribute("src", "assets/images/pixel_vampire.gif")
    }
}


// ***** AJOUT DE MUSIC STYLEE ! *****

function musicBattle(){

    var audioBattle = document.getElementById("battleMusic");
    audioBattle.volume = 0.5;
    audioBattle.loop = true;
    battleMusic.play();

}

function musicWin(){

    var audioWin = document.getElementById("winMusic");
    audioWin.volume = 0.5;
    audioWin.play();

}

function clickSound(){

    var buttonSound = document.getElementById("clickSound");
    buttonSound.volume = 0.3;
    buttonSound.play();

}