function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
       var x = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
       return x;
    };

    this.damage = function(){
        var x = Math.floor(Math.random()* (this.maxDamage - this.min) + this.min);
        return x;
    };

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am ${this.name} from a group of ${this.race}s, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

document.getElementById("start").addEventListener("click",()=>{
    x = document.getElementById("chooseChar").style.display = "none"; // Cache l'interface après la création
    logCommand.style.transform ="translateY(0px)"; // Slide les boutons vers le haut
    newPlayer1();
    newPlayer2();
    musicBattle();
})
