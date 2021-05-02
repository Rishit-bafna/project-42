class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.bestman = loadImage("Walking Frame/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount >= 200 && frameCount <= 250){
            image(this.bestman,pos.x,pos.y+70,300,300);
          }
          if(frameCount < 200){
          animation(this.image,pos.x,pos.y+70,300,300);   
          }
          if(frameCount > 250){
            animation(this.image,pos.x,pos.y+70,300,300);   
          
          }
    }
}
