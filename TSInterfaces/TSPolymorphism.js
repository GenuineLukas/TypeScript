var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.set = function (key, value) {
        if (this.storage[key] === undefined) {
            this.storage[key] = value;
        }
        else {
            throw new Error("the key already exists");
        }
    };
    LocalStorage.prototype.remove = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
var stringStorage = new LocalStorage();
stringStorage.set("1", "first");
console.log("the value for the key you provided is ", stringStorage.get("1"));
var booleanStorage = new LocalStorage();
booleanStorage.set("3", false);
console.log("the value for the key you provided is ", stringStorage.get("2"));
