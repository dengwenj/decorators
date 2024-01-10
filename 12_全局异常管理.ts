const ErrorDecorator: MethodDecorator = (
  target: Object,
  name: string | symbol,
  desc: PropertyDescriptor
) => {
  const method = desc.value

  desc.value = () => {
    try {
      method()
    } catch (error: any) {
      console.log(`%c你好朴睦`, 'color: red');
      console.log(error.message);
    }
  }
}

class Demo12 {
  @ErrorDecorator
  test() {
    throw new Error('出错了')
  }
}
new Demo12().test()
