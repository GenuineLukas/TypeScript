var Dict = /** @class */ (function () {
  function Dict() {
    this.words = {};
  }
  Dict.prototype.add = function (word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  };
  Dict.prototype.def = function (term) {
    console.log(this.words[term]);
  };
  return Dict;
})();
var Word = /** @class */ (function () {
  function Word(term, def) {
    this.term = term;
    this.def = def;
  }
  return Word;
})();
var kimchi = new Word("kimchi", "Korean Cuisine");
var dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
