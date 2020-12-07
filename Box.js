class Box{
    //cons is a function which helps us in initialising the properties of an object
    constructor(xPos, yPos, w, h)
    {
        var box_options=
        {
            restitution: 0.8
        }
       this.body= Bodies.rectangle(xPos, yPos, w, h, box_options);
       this.width=w;
       this.height=h;
       World.add(myWorld, this.body);
       
    }
    displayBox()
    {
        push();
        //translate helps us change the origin
        //translate(x value of box, y value of y)
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
};