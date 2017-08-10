var font
var vehicles = []

function preload() {
    // font = loadFont('AvenirNextLTPro-Demi.otf')
    font = loadFont('BANANASP.TTF')
}

function setup() {
    createCanvas(600, 400)
    textFont(font)
    var pts = font.textToPoints('Hello!', 50, 200, 190)

    pts.forEach(function drawPoint(pt) {
        var vehicle = new Vehicle(pt.x, pt.y)
        vehicles.push(vehicle)
    })

    console.log(createVector())
}

function draw() {
    // frameRate(1)
    background(51)
    vehicles.forEach(function redraw(v) {
        v.behaviors()
        v.update()
        v.show()
    })
}