$(document).ready(function(){
//    var data = JSON.parse("{{data|escapejs}}")
//    for(var x in data){
//        console.log(data[x])
//    }
    //console.log("valor de x "+x+" data[x] : "+data[x])
    $("button").click(function(){
        //e.preventDefault()
        console.log("Button working")
        //var response = JSON.parse('json')
        $.ajax({
           type: 'GET',
           url: "process_money",
           data: 'json',
           success: function(json) {
                console.log(json)
                //$("#action").html(data)
           },
           error: function(data){
                console.log(data)
           }
        })
    })
})