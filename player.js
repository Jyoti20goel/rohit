class Player {
    constructor(x,y,width,height) {
        var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
        }
        this.body = Bodies.rectangle(x,y,30,100,options);
        this.width = 30;
        this.height = 100;
        World.add(world, this.body);
    
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER); 
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
     
     
      }
}