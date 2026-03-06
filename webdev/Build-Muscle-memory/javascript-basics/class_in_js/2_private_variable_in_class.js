class MyClass {
  #privateData = "secret";

  doSomething() {
    return this.#privateData.toUpperCase();  // inside OK
  }
}

const obj = new MyClass();
const res = obj.doSomething();          // ✅ normal call
obj.#privateData;           // ❌ error: private
