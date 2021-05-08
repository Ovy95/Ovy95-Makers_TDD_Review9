//SPEC FILE
describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('Spellchecker , Checks one word', function() {

      it ("given dog returns // dog ",function() {
        expect(megasoft.spellchecker("dog")).toEqual("dog");
      })
      it ("given dogg returns // ~dogg~ ",function() {
        expect(megasoft.spellchecker("dogg")).toEqual("~dogg~");
      })

    })

    describe('Spellchecker , Checks two words', function() {

      it ("given good morning returns // good morning ",function() {
        expect(megasoft.spellchecker("good morning")).toEqual("good morning");
      })

      it ("given goo morning returns // ~goo~ morning ",function() {
        expect(megasoft.spellchecker("goo morning")).toEqual("~goo~ morning");
      })
      it ("TWO wrong words given goo mrning returns // ~goo~ ~mrning~ ",function() {
        expect(megasoft.spellchecker("goo mrning")).toEqual("~goo~ ~mrning~");
      })
    })

    describe('Spellchecker , Checks Three words', function() {

      it ("given good morning returns // good morning ",function() {
        expect(megasoft.spellchecker("good morning dog")).toEqual("good morning dog");
      })

      it ("given goo morning returns // ~goo~ morning ",function() {
        expect(megasoft.spellchecker("goo morning do")).toEqual("~goo~ morning ~do~");
      })
      it ("TWO wrong words given goo mrning returns // ~goo~ ~mrning~ ",function() {
        expect(megasoft.spellchecker("goo mrning dg")).toEqual("~goo~ ~mrning~ ~dg~");
      })
      
    })

    describe('Spellchecker, Punctuation checked', function() {

      it (" Given dogg. // returns ~dogg~. ",function() {
        expect(megasoft.spellchecker("dogg.")).toEqual("~dogg~.");
      })

      it (" Given morning? // returns morning?",function() {
        expect(megasoft.spellchecker("morning?")).toEqual("morning?");
      })

      it (" Given good morning dog! // returns  good morning dog!",function() {
        expect(megasoft.spellchecker("good morning dog!")).toEqual("good morning dog!");
      })
      it (" Given good morning dog! // returns  good morning dog!",function() {
        expect(megasoft.spellchecker("good mrning dog!")).toEqual("good ~mrning~ dog!");
      })

     
    })

});
