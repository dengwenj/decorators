"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const myDecorator5 = (target) => {
    target.prototype.message = (msg) => {
        console.log(msg);
    };
};
let Demo5 = class Demo5 {
    login() {
        console.log("请求登录");
        this.message("登录成功");
    }
};
Demo5 = __decorate([
    myDecorator5
], Demo5);
new Demo5().login();
let Demo55 = class Demo55 {
    d55() {
        console.log("我是d55");
        this.message("我是d55 message");
    }
};
Demo55 = __decorate([
    myDecorator5
], Demo55);
new Demo55().d55();
