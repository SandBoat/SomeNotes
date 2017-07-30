var bd = $("#body");
console.log("aaaaa");

Object.prototype.cloneObj = function() {
    function NEWOBJECT() {};
    NEWOBJECT.prototype = this;
    ar anObj = new NEWOBJECT();
    for (var ele in anObj) {
        if (typeof anObj[ele] == “object”) return anObj[ele].cloneObj();
    }
    return anObj;
}
