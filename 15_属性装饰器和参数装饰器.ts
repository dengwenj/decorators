// 属性装饰器
const propertyDecorator: PropertyDecorator = (
  target: Object,
  name: string | symbol
) => {
  // target 静态属性就是这个类，普通属性是原型对象
  let val = 'pumu'
  // https://www.thinbug.com/q/39160796
  // 通过Object.defineProperty添加prototype属性如果用的get方法会添加到实例上，一样的会覆盖构造函数属性
  Object.defineProperty(target, 'age', {
    get() {
      return 11
    },
  })
  Object.defineProperty(target, name, {
    get() {
      return val
    },
    set(v) {
      val = v
    }
  })
  console.log(target, name)
}

// 参数装饰器
const paramsDecorator: ParameterDecorator = (
  target: Object, 
  propertyKey: string | symbol | undefined, 
  parameterIndex: number
) => {
  console.log(target, propertyKey, parameterIndex)
}

class Demo15 {
  @propertyDecorator
  public name: string | undefined

  test(name: string, age: number, @paramsDecorator sex: string) {

  }
}

const d15  = new Demo15()
console.log(d15);

d15.name = '22'
console.log(d15.name);
