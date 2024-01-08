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
/**
 * 如果是静态方式第一个参数是构造函数类
 * 如果是原型方法第一个参数是原型对象
 * 第二个参数是属性名称
 * 第三个参数是属性的描述符
 */
const methodDecorator = (target, name, desc) => {
    console.log(target, name, desc);
    desc.value = () => {
        console.log("我在这里修改了");
    };
};
class Demo7 {
    test() {
        console.log("在方法装饰器里面修改了，这里没用了");
    }
}
__decorate([
    methodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Demo7.prototype, "test", null);
new Demo7().test();
