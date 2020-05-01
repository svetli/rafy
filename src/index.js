var Rafy = /** @class */ (function () {
    function Rafy() {
        var _this = this;
        this.update = function (delta) {
            var len = _this.fns.length;
            while (len--) {
                var fn = _this.fns[len];
                if (fn) {
                    _this.fns[len](delta);
                }
            }
            if (_this.running) {
                _this.requestId = window.requestAnimationFrame(_this.update);
            }
        };
        this.running = false;
        this.requestId = 0;
        this.fns = [];
    }
    Rafy.prototype.add = function (fn) {
        if (typeof fn === 'function') {
            if (this.fns.indexOf(fn) >= 0) {
                return false;
            }
            this.fns.push(fn);
            return true;
        }
        return false;
    };
    Rafy.prototype.remove = function (fn) {
        var idx = this.fns.indexOf(fn);
        if (idx >= 0) {
            this.fns.splice(idx, 1);
        }
        if (this.fns.length <= 0) {
            this.stop();
        }
    };
    Rafy.prototype.start = function () {
        if (this.running) {
            return;
        }
        this.running = true;
        this.requestId = window.requestAnimationFrame(this.update);
    };
    Rafy.prototype.stop = function () {
        window.cancelAnimationFrame(this.requestId);
        this.running = false;
    };
    return Rafy;
}());
export default Rafy;
//# sourceMappingURL=index.js.map