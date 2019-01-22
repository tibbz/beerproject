var app = new Vue({
    el: '#app',
    data: {
        beers: [],
  
    },

    created: function () {
        
        this.calljson();
  
    },

    methods: {

        calljson: function () {
            {
                fetch("https://api.punkapi.com/v2/beers", {
                    method: "GET",

                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }

                }).then(function (json) {
                app.beers = json;
                console.log(app.beers);


                }).catch(function (error) {
                    console.log("Request failed: + error.message");
                });
            }
        },

        callinput: function () {
            var flag = false;
            this.beerbutton = document.getElementById("beersearch").value;
            this.beername = Array.from(document.getElementsByTagName("h3"));
            this.beerfilter = Array.from(document.getElementsByClassName("beersquare"));
            var contador= 0;

            for (var b = 0; b < this.beerfilter.length; b++) {
                if (this.beerfilter[b].innerHTML.toUpperCase().includes(this.beerbutton.toUpperCase())) {
                    this.beerfilter[b].style.display = "block";
                    flag = true;
                    
                } else {
                    this.beerfilter[b].style.display = "none";
                    contador = contador +1;
    
                    
                } if (contador === this.beerfilter.length) {
                    // alert("no beers found by search criteria");
                    document.getElementById("meme").style.display= "block";
                }
            }


        }

    

        

       

    }
})
