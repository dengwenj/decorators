"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target 是这个类
const myDecotator = (target) => {
    // 给这个原型上添加属性和方法
    target.prototype.sex = '男';
    target.prototype.test = () => {
        return '朴睦 24';
    };
};
let Demo1 = class Demo1 {
};
Demo1 = __decorate([
    myDecotator
], Demo1);
const d1 = new Demo1();
console.log(d1.test(), d1.sex);
let Demo2 = class Demo2 {
};
Demo2 = __decorate([
    myDecotator
], Demo2);
const d2 = new Demo2();
console.log(d2.test());
