class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.5,
          density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255
    }
    display(){
      if(this.body.speed<5){
        var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height); 
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        
        pop();
      }
     
    }
  }