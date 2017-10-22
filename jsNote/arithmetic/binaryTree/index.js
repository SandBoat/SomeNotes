"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var BiTreeNode = function() {
    function BiTreeNode() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var lchild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var rchild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, BiTreeNode);

        // super(this);
        this.data = data;
        this.lchild = lchild;
        this.rchild = rchild;
    }

    _createClass(BiTreeNode, [{
        key: "setLchild",
        value: function setLchild(node) {
            this.lchild = node;
        }
    }, {
        key: "setRchild",
        value: function setRchild(node) {
            this.rchild = node;
        }
    }]);

    return BiTreeNode;
}();