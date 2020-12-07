class Ground{
    //cons is a function which helps us in initialising the properties of an object
    constructor(xPos, yPos, w, h)
    {
        var ground_options=
        {
            isStatic: true
        }
       this.body= Bodies.rectangle(xPos, yPos, w, h, ground_options);
       this.width=w;
       this.height=h;
       World.add(myWorld, this.body);
       
    }
    display()
    {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
};