const myDecorator5: ClassDecorator = (target: Function) => {
  target.prototype.message = (msg: string) => {
    console.log(msg)
  }
}

@myDecorator5
class Demo5 {
  public login() {
    console.log("请求登录");
    (<any>this).message("登录成功")
  }
}
new Demo5().login()

@myDecorator5
class Demo55 {
  public d55() {
    console.log("我是d55");
    (this as any).message("我是d55 message")
  }
}
new Demo55().d55()