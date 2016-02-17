if (Array.prototype.find) return;

var find = function(predicate) {
    ...
};

if (!Array.prototype.find) {
    Array.prototype.find = find;
}
