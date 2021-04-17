class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html("flash cars");
        title.position(250,20);

        var input=createInput("name")
        input.position(270,250);

        var button=createButton("join game")
        button.position(280,290);

        var greeting=createElement("h3")
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name =input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("HELLO! WELCOME TO FLASH CARS"+name)
             greeting.position(250,250)
        });

        
    }
}

