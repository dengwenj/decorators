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
const propertyDecorator16 = (p) => {
    console.log(p);
    return (target, name) => {
        const colors = ['red', 'yellow', 'green', 'bule'];
        Object.defineProperty(target, name, {
            get() {
                return colors[Math.floor(Math.random() * colors.length)];
            }
        });
    };
};
class Demo16 {
}
__decorate([
    propertyDecorator16('参数'),
    __metadata("design:type", Object)
], Demo16.prototype, "color", void 0);
const d16 = new Demo16();
console.log(d16.color);
