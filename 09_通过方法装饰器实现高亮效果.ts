const methodDecorator9: MethodDecorator = (
  target: Object,
  name: string | symbol,
  desc: PropertyDescriptor
) => {
  // 先保存起来
  const method = desc.value

  desc.value = () => {
    return `<div style="color: red">${method()}</div>`
  }
}

class Demo9 {
  @methodDecorator9
  public h() {
    return '朴睦 24'
  }
}

document.body.insertAdjacentHTML('afterbegin', new Demo9().h())
