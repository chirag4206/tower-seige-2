class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,90,90,options);
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
      this.image = loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  }