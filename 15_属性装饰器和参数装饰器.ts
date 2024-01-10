// 属性装饰器
const propertyDecorator: PropertyDecorator = (
  target: Object,
  name: string | symbol
) => {
  // target 静态属性就是这个类，普通属性是原型对象
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
  public name: string = '朴睦'

  test(name: string, age: number, @paramsDecorator sex: string) {

  }
}
// new Demo15()