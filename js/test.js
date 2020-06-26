    function test01(){ 

        var imgArray = new Array();

        $(function(){
          $.getJSON("json/weapons.json", function(typeObj){
            $.each(typeObj, function(typeKey, seriesObj) {
              if (typeKey == "AR"){
                $.each(seriesObj, function(seriesKey, nameObj) {
                  if (seriesKey == "CHROME"){
                    imgFile= nameObj.name;
                  }
                });
              }
            });
          });
        });
        
        alert(imgArray[0]);
    }
    
        function test02(){
    
        alert("ok");
    }