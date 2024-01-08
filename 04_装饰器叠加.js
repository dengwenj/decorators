"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const myDecorator = (target) => {
    target.prototype.test = () => {
        console.log("我是 test");
    };
};
const myDecorator2 = (target) => {
    target.prototype.test2 = () => {
        console.log("我是 test2");
    };
};
let Demo4 = class Demo4 {
};
Demo4 = __decorate([
    myDecorator,
    myDecorator2
], Demo4);
const d4 = new Demo4();
d4.test();
d4.test2();
