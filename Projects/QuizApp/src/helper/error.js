"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ProjectError = /** @class */ (function (_super) {
    __extends(ProjectError, _super);
    function ProjectError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._status = 0;
        _this._data = {};
        return _this;
    }
    Object.defineProperty(ProjectError.prototype, "statuscode", {
        get: function () {
            return this._status;
        },
        set: function (code) {
            this._status = code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectError.prototype, "data", {
        get: function () {
            // whenever write the data directly send her on object called getter method
            return this._data;
        },
        set: function (errorData) {
            // if any one send the data if any error data send than sent as data called setter method
            this._data = errorData;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectError;
}(Error));
exports["default"] = ProjectError;
