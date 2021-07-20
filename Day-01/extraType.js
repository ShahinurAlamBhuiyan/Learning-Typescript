"use strict";
// ----------------Enum-------------------
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thu"] = "THU";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Mon); // most use for redux actionsType
