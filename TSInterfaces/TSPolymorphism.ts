interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    if (this.storage[key] === undefined) {
      this.storage[key] = value;
    } else {
      throw new Error("the key already exists");
    }
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("1", "first");
console.log(`the value for the key you provided is `, stringStorage.get("1"));

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("3", false);
console.log(`the value for the key you provided is `, stringStorage.get("2"));
