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
const isLogin = true;
const v = ['pm', 'ww'];
const AccDecorator = (keys) => {
    return (target, name, desc) => {
        const method = desc.value;
        const isV = keys.every((item) => v.includes(item));
        desc.value = () => {
            if (isLogin && isV) {
                return method();
            }
            console.log("我没有权限");
        };
    };
};
class Demo13 {
    test() {
        console.log("我登录了也有权限, 我看到了内容");
    }
    test2() {
        console.log("我不需要登录也可以看到内容");
    }
}
__decorate([
    AccDecorator(['pm', 'ww']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Demo13.prototype, "test", null);
new Demo13().test();
