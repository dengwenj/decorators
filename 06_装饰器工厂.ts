// 定义一个函数这个函数的返回值是一个类装饰器
// 装饰器工厂
const myDecoratorFactory = (type: 'demo6' | 'demo66'): ClassDecorator => {
  return (target: Function) => {
    target.prototype.test = () => {
      if (type === 'demo6') {
        console.log("我是装饰器工厂demo6") 
      } else {
        console.log("我是装饰器工厂demo66") 
      }
    }
  }
}

@myDecoratorFactory('demo6')
class Demo6 {

}
(new Demo6() as any).test()

@myDecoratorFactory('demo66')
class Demo66 {

}
(<any>new Demo66()).test()