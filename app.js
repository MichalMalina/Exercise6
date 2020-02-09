





const itIsFriday = require('./IsItFriday');



console.log(itIsFriday.time());
itIsFriday.until();


if(itIsFriday.check()) {

    console.log("It is Friday!")
}

else {
    console.log("Nah mate")
}