const ErrorDecorator = (title: string): MethodDecorator =>{
  return (
    target: Object,
    name: string | symbol,
    desc: PropertyDescriptor
  ) => {
    const method = desc.value

    desc.value = () => {
      try {
        method()
      } catch (error: any) {
        console.log(`%c${title}`, `font-size: 20px`);
        console.log(error.message);
      }
    }
  }
} 

class Demo12 {
  @ErrorDecorator('https://dengwj.vip')
  test() {
    throw new Error('出错了')
  }
}
new Demo12().test()
