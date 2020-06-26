    function test01(){ 
        $(function(){
          $.getJSON("json/weapons.json", function(typeObj){
            $.each(typeObj, function(typeKey, seriesObj) {
              console.log("typeKey");
              console.log(typeKey);
              if (typeKey == "SR"){
                $.each(seriesObj, function(seriesKey, nameObj) {
                  console.log("seriesKeyKey");
                  console.log(seriesKey);
                  if (seriesKey == "NORMAL"){
                    console.log("–ß‚è’l");
                    console.log(nameObj.name);
                  }
                });
              }
            });
          });
        });
    }
    
        function test02(){
    
        alert("ok");
    }