const hDecorator = (url: string): MethodDecorator => {
  return (
    target: Object,
    name: string | symbol,
    desc: PropertyDescriptor
  ) => {
    const method = desc.value

    new Promise((resolve) => {
      console.log('发送请求', url)
      setTimeout(() => {
        resolve([{name: 'pm'}, {name: 'ww'}])
      }, 1000)
    }).then((res) => {
      method(res)
    })
  }
}

class Demo14 {
  @hDecorator('https://dengwj.vip')
  test(user: any[]) {
    console.log(user)
  }
}
