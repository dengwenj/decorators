const paramsDecorator17: ParameterDecorator = (
  target: Record<string, any>, 
  name: string | symbol | undefined, 
  paramsIdx: number
) => {
  const idxList = []
  idxList.push(paramsIdx)
  target.idxData = idxList
}

const methodDecorator17: MethodDecorator = (
  target: Record<string, any>,
  name: string | symbol,
  desc: PropertyDescriptor
) => {
  const method = desc.value

  desc.value = function (n: string, a: number) {
    console.log(n, a) // pumu 24
    
    for (const idx of target.idxData) {
      if (idx > arguments.length - 1 && arguments[idx] === undefined) {
        throw new Error('请传递参数')
      }
      method('ww', 18)
    }
   
  }
}

// 会先执行参数装饰器在执行方法装饰器
class Demo17 {
  @methodDecorator17
  test(name: string, @paramsDecorator17 age: number) {
    console.log('我进了', name, age) // ww 18
  }
}
// new Demo17().test('pumu')
new Demo17().test('pumu', 24)
