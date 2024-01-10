const propertyDecorator16 = (p: string): PropertyDecorator => {
  console.log(p);
  
  return (
    target: Object,
    name: string | symbol
  ) => {
    const colors = ['red', 'yellow', 'green', 'bule']
    Object.defineProperty(target, name, {
      get() {
        return colors[Math.floor(Math.random() * colors.length)]
      }
    })
  }
}

class Demo16 {
  @propertyDecorator16('参数')
  public color: string | undefined
}
const d16 = new Demo16()
console.log(d16.color)
