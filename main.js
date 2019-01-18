var app = new Vue({
    el: '#app',
    data: {
beer: [],
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
                app.beer = json;
                console.log(app.beer);


                }).catch(function (error) {
                    console.log("Request failed: + error.message");
                });
            }
        },

    }
})
