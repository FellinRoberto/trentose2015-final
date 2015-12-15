/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
    /* Initializes the model with a list of requests, 
     * and sets the first one as the current one 
     */
    init : function(list){
        this.list=list;
        
        this.c=0;
        this.total=0;
    },
  
    /* It moves "current" to the next request */
    next : function (){
        
        this.c++;
       
              
    },
  
    /* Returns the current request. 
     * If all requests have been processed (there is no current one), it returns null 
     */
    getCurrentRequest : function () {
        console.log(this.c+" "+this.list.length);
        if(this.c+1>=this.list.length){
           
            return null;
        }else{
            var r=this.list[this.c]; 
            SantaModel.next();
            return r;
        }
          
            
    },  
    
    /* Packs the given item if it fulfills the current request.       
     * returns 1 if the given item fulfills the request (= answer)
     * returns 0 if the given item does not fulfill the request
     */
    pack : function(item) {
        console.log("totale prima: "+this.total);
         console.log("risposta: "+this.list[this.c].answer+" "+item);
         console.log(this.c);
        if(this.list[this.c].answer==item){
            this.total++;
             console.log("totale dopo: "+this.total);
            return 1;
        } else{
             console.log("totale dopo: "+this.total);
            return 0;
        }
    }      
  
};

var octopus = {
      getTotal: function() {
        return SantaModel.total;
    },
    check: function(ris) {
        return SantaModel.pack(ris);
    },
    getCurrentRequest: function() {
        
        return SantaModel.getCurrentRequest();
    },

    init: function() {
        SantaModel.init(requests);
        view.init();
    }
};

var view = {
    
    init: function() {
        this.question = $('.question');
        this.question_items = $('.question-items');
        this.result = $('.result');
        
        $( ".question-items" ).on( "click", "li", function(event) {
            var ris=$(event.currentTarget).text();
             octopus.check(ris);
            
          
            view.render();
        });

        view.render();
        
        
    },
    render: function(){
        var htmlStr = '';
        var req=octopus.getCurrentRequest();
        
        if(req!=null){
        this.question.html( req.question );
        
        req.options.forEach(function(item){
              
            htmlStr+="<li>"+item+"</li>";
        });
       
        this.question_items.html( htmlStr );
    }else{
        this.question.html( "" );
        this.question_items.html( "" );
         this.result.html( "Total points: "+ octopus.getTotal());
    }
    }
};

    
$(document).ready(function(){ 
    octopus.init();
});


