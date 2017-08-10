function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height))
    this.target = createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = createVector()
    this.r = 8
    this.maxspeed = 5
    this.maxforce = 0.3
}

Vehicle.prototype.behaviors = function() {
    // var seek = this.seek(this.target)
    var arrive = this.arrive(this.target)
    this.applyForce(arrive)
}

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f)
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
}

Vehicle.prototype.show = function() {
    stroke(255)
    strokeWeight(this.r)
    point(this.pos.x, this.pos.y)
}

Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos)
    var d = desired.mag()
    var speed = this.maxspeed
    if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed)
    }
    desired.setMag(speed)

    var steer = p5.Vector.sub(desired, this.vel)
    return steer
}

Vehicle.prototype.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos)
    desired.setMag(this.maxspeed)
    // console.log(desired)
    var steer = p5.Vector.sub(desired, this.vel)
    // console.log(this.maxforce)
    steer.limit(1)
    // steer.limit(this.maxforce)
    // console.log(steer)
    return steer
}