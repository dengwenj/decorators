const methodDecorator8: MethodDecorator = (
  target: Object, 
  name: string | symbol, 
  desc: PropertyDescriptor
) => {
  console.log(target, name, desc) // target 就是这个类了
  desc.writable = false
}

class Demo8 {
  @methodDecorator8
  public static test() {
    console.log("我是静态方法")
  }
}
Demo8.test()
