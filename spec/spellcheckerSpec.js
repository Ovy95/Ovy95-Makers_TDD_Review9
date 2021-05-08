//SPEC FILE
describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('Spellchecker', function() {

      it ("given dog returns // dog ",function() {
        expect(megasoft.spellchecker("dog")).toEqual("dog");
      })
      it ("given dogg returns // ~dogg~ ",function() {
        expect(megasoft.spellchecker("dogg")).toEqual("~dogg~");
      })

      

    })

});
