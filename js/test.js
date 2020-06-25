    function test01(){
    
        alert("s");
    
        $(function(){
          $.getJSON("json/weapons.json", function(jsonData){
            var arr = [];
            $.each(jsonData, function(i, typeObj) {
              alert(typeObj[i]);
            })
          });
        });
        
        alert("e");
    }
    
        function test02(){
    
        alert("ok");
    }