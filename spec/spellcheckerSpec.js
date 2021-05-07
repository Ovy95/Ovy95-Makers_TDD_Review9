//SPEC FILE
describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('Spellchecker', function() {

      it ("returns  hardcoded test first // ~dogg~ ",function() {
        expect(megasoft.spellchecker("dogg")).toEqual("~dogg~");
      })

    })

});
