type Words = {
  [key: string]: string;
};

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    console.log(this.words[term]);
  }
  static sayHi() {
    return "Welcome to our dictionary";
  }
}

Dict.sayHi();
const kimchi = new Word("kimchi", "Korean Cuisine");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
