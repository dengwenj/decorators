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
const SleepDecorator11 = (timer) => {
    // 返回值是一个装饰器
    return (target, name, desc) => {
        const method = desc.value;
        desc.value = () => {
            setTimeout(() => {
                method();
            }, timer);
        };
    };
};
class Demo11 {
    test() {
        console.log("你好 朴睦");
    }
}
__decorate([
    SleepDecorator11(2000) // 这里就是要个装饰器，他的返回值就是装饰器
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Demo11.prototype, "test", null);
new Demo11().test();
