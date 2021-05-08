//SPEC FILE
describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('Spellchecker', function() {

      it ("given dogg returns // dog ",function() {
        expect(megasoft.spellchecker("dog")).toEqual("dog");
      })

      

    })

});
