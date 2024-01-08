// target 是这个类
const myDecotator: ClassDecorator = (target: Function) => {
  // 给这个原型上添加属性和方法
  target.prototype.sex = '男'
  target.prototype.test = () => {
    return '朴睦 24'
  }
}

@myDecotator
class Demo1 {

}

const d1 = <any>new Demo1()
console.log(d1.test(), d1.sex)

@myDecotator
class Demo2 {

}
const d2 = new Demo2()
console.log((d2 as any).test());
