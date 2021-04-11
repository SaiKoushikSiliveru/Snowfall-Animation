class Snow
{
    constructor(x, y)
    {
        var opt = {
            density: 0.0000001,
            restitution: 0.0000001,
            friction: 0.0000001,
        }

        this.radius = 18;
        this.body = Bodies.circle(x, y, this.radius, opt);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    repeat()
    {
        if(this.body.position.y>650)
        {
            Matter.Body.setPosition(this.body, {x: random(0,1200), y: random(-50,600)});
        }
    }
    
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }

}