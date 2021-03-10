function Person(race,item, name){
    this.race = race;
    this.item = item;
    this.name = name;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
        var heal= 0;
        for (let i = 0; i <10; i++){
            heal =  Math.floor((Math.random()*this.maxHealing)+this.min);
            console.log(heal);
            return heal; 
          }
    };

    this.damage = function (){
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am ${this.name} from a group of ${this.race}s, I wield a mighty ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

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

// **** Récupération et mise en place interface user ****

document.getElementById("start").addEventListener("click",()=>{
    

    x = document.getElementById("chooseChar").style.display = "none"; // Cache l'interface après la création
    
    // ** Affiche dans l'interface les éléments encondés + crée un var new Person **

    
    // ** Player 2 Display values + creation **
    var name2 = document.getElementById("form2").nameChar2.value;
    document.getElementById("name2").innerHTML = name2;

    var race2 = document.getElementById("form2").race.value;
    var raceOOF2 = document.getElementById("race2");
    var raceHTML2 = raceOOF2.options[raceOOF2.selectedIndex].text;
    document.getElementById("perso2").innerHTML = raceHTML2;

    var item2 = document.getElementById("form2").items.value;
    var itemOOF2 = document.getElementById("item2");
    var itmHTML2 = itemOOF2.options[itemOOF2.selectedIndex].text;
    document.getElementById("items2").innerHTML = itmHTML2;
    
    player2 = new Person(race2, item2, name2);
    player2.displayChar();
    raceMod1();
    logCommand.style.transform ="translateY(0px)";

    
})

// **** Health Bar ****

// var player1CurrentLife = document.getElementById("hpLeft1").setAttribute("value", player1.currenthealth);
// var player2CurrentLife = document.getElementById("hpLeft2").setAttribute("value", player2.currenthealth);

// ** Actions Player1 **


document.getElementById("attack1").addEventListener("click",()=>{
        x = player2CurrentLife - player1.damage();
        getElementById("hpLeft1").setAttribute("value", x);  // Change la valeur de l'attribute dans la barre de vie 
        player2.currenthealth = x;
        
        if (x <= 0){ // Si le joueur arrive à 0 ou un nombre négatif, fin de partie et en relance une
            alert(`${player2.name} LOST HAHA, Press ok to revenge`);
            window.location.reload();
        }
        disable1(); // désactive les boutons du J1
        enable2(); // Active les boutons du J2

});

document.getElementById("heal1").addEventListener("click",()=>{
    x = player1.currenthealth + player1.heal();
    player1Life.setAttribute("value", x)
    player1.currenthealth = x;
    if (x > 100){
       player1.currenthealth = 100;
    }
    disable1();
    enable2();

});

document.getElementById("yield1").addEventListener("click",()=>{
    disable1();
    enable2();

});

// ** Actions player 2 **
document.getElementById("attack2").addEventListener("click",()=>{
    y = player1.currenthealth - player2.damage(); 
    player1Life.setAttribute("value", y);
    player1.currenthealth = y; 
    if (y <= 0){ 
        alert(`${player1.name} LOST HAHA, Press ok to revenge`);
        window.location.reload();
    }
    disable2();
    enable1();

});

document.getElementById("heal2").addEventListener("click",()=>{
    y = player2.currenthealth + player2.heal();
    player2Life.setAttribute("value", y)
    player2.currenthealth = y;
    if (y > 100){
        player2.currenthealth = 100;
    }
    disable2();
    enable1();

});

document.getElementById("yield2").addEventListener("click",()=>{
    disable2();
    enable1();
});


