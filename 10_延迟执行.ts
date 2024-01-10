const SleepDecorator: MethodDecorator = (
  target: Object,
  name: string | symbol,
  desc: PropertyDescriptor
) => {
  const method = desc.value

  desc.value = () => {
    setTimeout(() => {
      method()
    }, 2000)
  }
}

class Demo10 {
  @SleepDecorator
  test() {
    console.log("朴睦 24")
  }
}
new Demo10().test()
