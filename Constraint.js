class Constrain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly(){
        this.constraint.bodyA = null;
    }

    attach(body){
        this.constraint.bodyA = body;
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
        }
    }
}