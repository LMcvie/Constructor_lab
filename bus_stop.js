
const Bus_stop = function (name){
this.name = name
this.queue = []
}

Bus_stop.prototype.addPerson = function(persons){
    this.queue.unshift(persons);
    console.log (this.queue, 'is in the queue');
}


module.exports = Bus_stop;