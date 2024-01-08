"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义一个函数这个函数的返回值是一个类装饰器
// 装饰器工厂
const myDecoratorFactory = (type) => {
    return (target) => {
        target.prototype.test = () => {
            if (type === 'demo6') {
                console.log("我是装饰器工厂demo6");
            }
            else {
                console.log("我是装饰器工厂demo66");
            }
        };
    };
};
let Demo6 = class Demo6 {
};
Demo6 = __decorate([
    myDecoratorFactory('demo6')
], Demo6);
new Demo6().test();
let Demo66 = class Demo66 {
};
Demo66 = __decorate([
    myDecoratorFactory('demo66')
], Demo66);
new Demo66().test();
