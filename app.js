// I JS så skriver man bara function för att skapa en funktion
function Kill(killer, dead, loot) //parametrar i JS är väldigt enkla
{
    if (killer === "Name")
    {
        console.log("Name was the killer again...");
    }

    dead = (a) => {console.log(a)};

    if (7 == "7")
    {

    } 
    //I JS så måste man använda 3 lika med tecken då variablar är dynamiska
    //skulle man använda 2 så skulle den säga true på if satsen

    let myFunction = function (a,b,c) {return a*b*c;}
    //går också att skriva med en arrofuntion =>
    //används när man vill skriva en function snabbt som är kort eller behöver ingen namn.
    myFunction(1,2,3)
}


let inventory = [];

inventory.push("Torch");
inventory.push("Silver Sword");
inventory.push("Iron Sword");
inventory.push("Skeleton key");
//går att pusha andra typer av innehåll till listor
inventory.push(3);
inventory.push(3.14);
//även arrayer
inventory.push(["Hej", "Bonjour", "Ni hao"])

inventory.pop(); //tar bort den senaste saken i arrayen
inventory.shift(); //tar  bort den första saken 
inventory.slice(3, 1); //tar bort på en specificerad index. Behöver ange hur många saker den ska ta bort

inventory.findIndex( (item) => {return item === "Torch"});
//den här funktionen ger siffran som Torch ligger på (index)
// I denna fall, index 0 = 0

//går även att kombinera med slice
inventory.slice(inventory.findIndex( (item) => {return item === "Torch"}));


// Objekt
let player = {
    name: "Geralt",
    birthplace: "Rivia",
    type: "Witcher",
    strength: 10,
    inventory: ["Cat vision potion", "Sword oil"] //även arrayer går att lägga till

}; //en lista av namn. Text som index

player["name"]; //Returnerar vad som lagrades på index name
player["birthplace"] = "Hagsätra"; //går att byta datan på indexen också
player.strength += 15; //lägger till en data???