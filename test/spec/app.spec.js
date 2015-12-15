describe("Santa", function() {
    it("testo lo stato non null testando l'incremento dei punti", function(){
	SantaModel.init(requests);
        var tmp={
  question : "Carlo wants a TOY. Shall I pack a banana?",
  options : ["yes", "no"],
  answer : "no"
};
        expect(SantaModel.getCurrentRequest()).toBe(tmp);
        expect(SantaModel.pack()).toBe("yes");
        
        
	
    });
    
    it("testo lo stato null", function(){
	SantaModel.init(requests);
                var tmp1={
  question : "Carlo wants a TOY. Shall I pack a banana?",
  options : ["yes", "no"],
  answer : "no"
};
        expect(SantaModel.getCurrentRequest()).toBe(tmp1);
        SantaModel.next();
        var tmp2={
  question : "Julia wants a doll. Shall I pack a barbie?",  
  options : ["yes", "no"],
  answer : "yes"
};
        expect(SantaModel.getCurrentRequest()).toBe(tmp2);
        SantaModel.next();
        var tmp3={
  question : "Fabio wants a smartphone. Shall I pack a potatoe?",  
  options : ["yes", "no"],
  answer : "no"
};
        expect(SantaModel.getCurrentRequest()).toBe(tmp3);
        SantaModel.next();
        expect(SantaModel.getCurrentRequest()).toBe(null);
	
    });
    
    
    
});