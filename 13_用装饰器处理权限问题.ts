const isLogin = true

const v = ['pm', 'ww']

const AccDecorator = (keys: string[]): MethodDecorator => {
  return (
    target: Object,
    name: string | symbol,
    desc: PropertyDescriptor
  ) => {
    const method = desc.value

    const isV = keys.every((item) => v.includes(item))

    desc.value = () => {
      if (isLogin && isV) {
        return method()
      }
      console.log("我没有权限");
      
    }
  }
}

class Demo13 {
  @AccDecorator(['pm', 'ww'])
  test() {
    console.log("我登录了也有权限, 我看到了内容")
  }

  test2() {
    console.log("我不需要登录也可以看到内容")
  }
}

new Demo13().test()
