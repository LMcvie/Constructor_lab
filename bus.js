const Bus = function (route,distance,destination) {
    this.route = route;
    this.distance = distance;
    this.destination = destination;
    this.passengers = [];
}

Bus.prototype.drive = function () {
    this.distance += 10;
}

Bus.prototype.getPassengers = function () {
    return this.passengers;
}

Bus.prototype.pick_up = function (passenger) {
    this.passengers.push (passenger);
    console.log (this.passengers);
}

Bus.prototype.drop_off = function(passenger){
    this.passengers.pop (passenger);
}

Bus.prototype.empty = function(){
    this.passengers = [];
    console.log (this.passengers);
}

Bus.prototype.pick_up_from_stop = function(stop){

    stop.forEach((person) => {
        this.passengers.push(person);
    });
    //this.passengers += stop.map();
    console.log (this.passengers, 'all the people on the bus');
}

module.exports = Bus;