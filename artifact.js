
$(document).ready(function(){


    $(".hovertext").hover(
  
        // mouse-enter event
        function (e) {

            var hoverid = e.currentTarget.id;

            console.log(hoverid)

            console.log("#" + hoverid + "image")

            // changing the color
            $("#" + hoverid + "image").css('display', 'block')
        },

     
     
        // mouse-leave event
        function () {

            // Putting the color back
            $(".hoverimage").css('display', 'none')
        }) 

        
})

