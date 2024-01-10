const SleepDecorator11 = (timer: number): MethodDecorator => {
  // 返回值是一个装饰器
  return (
    target: Object,
    name: string | symbol,
    desc: PropertyDescriptor
  ) => {
    const method = desc.value

    desc.value = () => {
      setTimeout(() => {
        method()
      }, timer)
    }
  }
}

class Demo11 {
  @SleepDecorator11(2000) // 这里就是要个装饰器，他的返回值就是装饰器
  test() {
    console.log("你好 朴睦")
  }
}
new Demo11().test()
