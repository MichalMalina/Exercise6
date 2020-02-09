
//
// module.exports = () => require ("moment")().day() ===5 .get('date')

// module.exports = () => require("moment")().month().hours().tz('America/Los_Angeles').format('ha z');

//module.exports = () => require("moment")().format('MMMM Do YYYY, h:mm:ss a');

//module.exports = () => require("moment")().tz('America/Los_Angeles');


//var y = timer("moment")().format('MMMM Do YYYY, h:mm:ss a');
//y.tz('America/Los_Angeles').format('ha z');



function time() {
    var den = require("moment")().format('MMMM Do YYYY, h:mm:ss a');
    var yop = require("moment-timezone")().tz('America/New_York').format('h:mm:ss a');
    var tok = require("moment-timezone")().tz('Asia/Tokyo').format('h:mm:ss a');
    var lon = require("moment-timezone")().tz('Europe/London').format('h:mm:ss a');

    var all = "New York " + yop + " ; Tokyo " + tok + " ; London " + lon + " ; Denmark " + den;
    return all ;
}


function until() {
  var now = require("moment")();
  var then = require("moment")().set({'year': 2020, 'month': 12, 'date':24});
 //   var calc =   require("moment")(then) -  require("moment")();
 //   var res = require("moment")(calc).format('L');
    console.log( then.diff(now, 'days'), 'days');

}

function check() {
    var find = require("moment")().day() ===5;
    return find;

}

module.exports = {
    time: time,
    until:until,
    check:check
};




