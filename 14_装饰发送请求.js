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
const hDecorator = (url) => {
    return (target, name, desc) => {
        const method = desc.value;
        new Promise((resolve) => {
            console.log('发送请求', url);
            setTimeout(() => {
                resolve([{ name: 'pm' }, { name: 'ww' }]);
            }, 1000);
        }).then((res) => {
            method(res);
        });
    };
};
class Demo14 {
    test(user) {
        console.log(user);
    }
}
__decorate([
    hDecorator('https://dengwj.vip'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Demo14.prototype, "test", null);
