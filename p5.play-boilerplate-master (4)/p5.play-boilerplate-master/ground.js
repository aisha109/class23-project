class Ground {
    constructor() {
      var options = {
          isStatic : "true"
      }
      this.body = Bodies.rectangle(200,380,400,30, options);
    
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(position.x, position.y, this.width, this.height);
     
    }
  };