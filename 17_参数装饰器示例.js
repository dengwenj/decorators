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
const paramsDecorator17 = (target, name, paramsIdx) => {
    const idxList = [];
    idxList.push(paramsIdx);
    target.idxData = idxList;
};
const methodDecorator17 = (target, name, desc) => {
    const method = desc.value;
    desc.value = function (n, a) {
        console.log(n, a); // pumu 24
        for (const idx of target.idxData) {
            if (idx > arguments.length - 1 && arguments[idx] === undefined) {
                throw new Error('请传递参数');
            }
            method('ww', 18);
        }
    };
};
// 会先执行参数装饰器在执行方法装饰器
class Demo17 {
    test(name, age) {
        console.log('我进了', name, age); // ww 18
    }
}
__decorate([
    methodDecorator17,
    __param(1, paramsDecorator17),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Demo17.prototype, "test", null);
// new Demo17().test('pumu')
new Demo17().test('pumu', 24);
