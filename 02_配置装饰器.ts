function decorator(target: Record<string, any>) {
  console.log(target);
}

@decorator
class Demo {
  
}
