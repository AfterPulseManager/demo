  
    var count = 0;
  
    function reset(){
      location.replace("./weapons.html");
    }
    
    function search(){
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      if(dir_type == "ZERO"){
        alert("武器種類を選択してください。");
      }else{
      
        var imgFile = checkFile(dir_series, dir_type);
        
        if(Object.keys(imgFile).length == 0) {
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = "images/000.jpg";
          document.getElementById("bigImage").href = "images/000.jpg";
    
        }else if(Object.keys(imgFile).length == 1){
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = "./images/"+dir_type+"/"+dir_series+"/001.jpg";
          document.getElementById("bigImage").href = "./images/"+dir_type+"/"+dir_series+"/001.jpg";
          
        }else{
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = "./images/"+dir_type+"/"+dir_series+"/001.jpg";
          document.getElementById("bigImage").href = "./images/"+dir_type+"/"+dir_series+"/001.jpg";
        }
        
        document.getElementById("series").setAttribute("disabled", true);
        document.getElementById("type").setAttribute("disabled", true);
      }
    }
    
    function imageChanger(num) {
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      var dir_base = "./images/"+dir_type+"/"+dir_series+"/";
      
      var extension = ".jpg";
      
      var imgFile = checkFile(dir_series, dir_type);
      
      count += num;
      
      document.getElementById("image").src = dir_base+imgFile[count]+extension;
      document.getElementById("bigImage").href = dir_base+imgFile[count]+extension;
      
      if(count == imgFile.length - 1){
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "";

      }else if(0 < count && count < imgFile.length - 1){
        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "";

      }else if(count <= 0){

        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "true";
      }
    }
    
    function checkFile(dir_series, dir_type){
        $(function(){
          $.getJSON("json/weapons.json", function(typeObj){
            $.each(typeObj, function(typeKey, seriesObj) {
              if (typeKey == dir_type){
                $.each(seriesObj, function(seriesKey, nameObj) {
                  if (seriesKey == dir_series){
                    return nameObj.name;
                  }
                });
              }
            });
          });
        });
    }
    