class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.image = loadImage("mango.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}