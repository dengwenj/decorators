"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 属性装饰器
const propertyDecorator = (target, name) => {
    // target 静态属性就是这个类，普通属性是原型对象
    console.log(target, name);
};
// 参数装饰器
const paramsDecorator = (target, propertyKey, parameterIndex) => {
    console.log(target, propertyKey, parameterIndex);
};
class Demo15 {
    constructor() {
        this.name = '朴睦';
    }
    test(name, age, sex) {
    }
}
__decorate([
    propertyDecorator,
    __metadata("design:type", String)
], Demo15.prototype, "name", void 0);
__decorate([
    __param(2, paramsDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], Demo15.prototype, "test", null);
// new Demo15()
