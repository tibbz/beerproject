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

    }
})
