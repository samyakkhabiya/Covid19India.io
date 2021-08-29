  function number_seperate(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
    }
  $(document).ready(function(){
      const totalCases = document.querySelector(".total_cases");
      const deaths = document.querySelector(".deaths");
      const recovered = document.querySelector(".recovered");
      const newCases = document.querySelector(".active");
      var length;
      $.ajax({
         type: 'GET',
         url: "https://data.covid19india.org/data.json",
        //  dataType: "jsonp",
         jsonCaqllback: "jsonp_callback",
         crossDomain: 'true',
         success: function(response){
          console.log(response);
          var response = response;
          length = response.statewise.length;
          totalCases.innerHTML = number_seperate(response.statewise[0].confirmed);
          deaths.innerHTML = number_seperate(response.statewise[0].deaths);
          recovered.innerHTML = number_seperate(response.statewise[0].recovered);
          newCases.innerHTML = number_seperate(response.statewise[0].active);
  
  
          for (var i = 1; i <= length; i++) {
            $("table").append("<tr><td>" + i + "</td><td>" + response.statewise[i].state  + "</td><td>" + response.statewise[i].confirmed + "</td><td>" + response.statewise[i].active + "</td><td>" + response.statewise[i].recovered + "</td><td>" + response.statewise[i].deaths)
          }
         }
      });
    //   $.get("https://api.covid19india.org/data.json", function (response) {
    //     console.log(response);
    //     var response = response;
    //     length = response.statewise.length;
    //     totalCases.innerHTML = number_seperate(response.statewise[0].confirmed);
    //     deaths.innerHTML = number_seperate(response.statewise[0].deaths);
    //     recovered.innerHTML = number_seperate(response.statewise[0].recovered);
    //     newCases.innerHTML = number_seperate(response.statewise[0].active);


    //     for (var i = 1; i <= length; i++) {
    //       $("table").append("<tr><td>" + i + "</td><td>" + response.statewise[i].lastupdatedtime + "</td><td>" + response.statewise[i].state  + "</td><td>" + response.statewise[i].confirmed + "</td><td>" + response.statewise[i].active + "</td><td>" + response.statewise[i].recovered + "</td><td>" + response.statewise[i].deaths)
    //     }
    // })
  });
