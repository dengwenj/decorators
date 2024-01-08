const myDecorator: ClassDecorator = (target: Function) => {
  target.prototype.test = () => {
    console.log("我是 test")
    
  }
}

const myDecorator2: ClassDecorator = (target: Function) => {
  target.prototype.test2 = () => {
    console.log("我是 test2")
  }
}

@myDecorator
@myDecorator2
class Demo4 {

}
const d4 = new Demo4() as any
d4.test()
d4.test2()