const Bus = require ('./bus.js');
const Person = require ('./person.js');
const Bus_stop = require ('./bus_stop.js');

const bus31 = new Bus ('31',0,'Ocean Terminal');
const dave = new Person ('Dave', 20);
const busStop = new Bus_stop('Ocean terminal')
const dan = new Person ('Dan', 20);

//bus31.pick_up(dave);
//bus31.pick_up(dan);
//bus31.empty();
busStop.addPerson(dave);
busStop.addPerson(dan);
bus31.pick_up_from_stop(busStop.queue);