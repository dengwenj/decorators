/**
 * 如果是静态方式第一个参数是构造函数类
 * 如果是原型方法第一个参数是原型对象
 * 第二个参数是属性名称
 * 第三个参数是属性的描述符
 */
const methodDecorator: MethodDecorator = (
  target: Object,
  name: string | symbol,
  desc: PropertyDescriptor
) => {
  console.log(target, name, desc);
  desc.value = () => {
    console.log("我在这里修改了")
  }
}

class Demo7 {
  @methodDecorator
  public test() {
    console.log("在方法装饰器里面修改了，这里没用了");
    
  }
}
new Demo7().test()
