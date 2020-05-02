//moment
var NowMoment = moment().format("dddd, MMMM Do");
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;


$(document).ready(function() {

    //var declarations
    var now = moment().hours();
    
    var schedule = { 
        time : [
            {display: "9:00am",
        value: 9},
            {display: "10:00am",
        value: 10}, 
            {display: "11:00am",
        value: 11}, 
            {display: "12:00pm",
        value: 12}, 
            {display: "1:00pm",
        value: 13},
            {display: "2:00pm",
        value: 14},
            {display: "3:00pm",
        value: 15}, 
            {display: "4:00pm", 
        value: 16}, 
            {display: "5:00pm",
        value: 17}
        ], 
        userEntry : ["test",
            "test1",
            "test2",
            "test3",
            "test4",
            "test5",
            "test6",
            "test7",
            "test8"]
        
    };


    //it checks the time within the hour element, to see where it falls within moment, and color .description accordingly.
    function render(){
        for( let i = 0 ; i < schedule.time.length ; i++) {
            var divEl = $("<div>");
            divEl.addClass("row hour");
            var timeEl = $("<h4>");
            timeEl.addClass("timeline");
            var inputEl = $("<input>");
            inputEl.addClass("description");
            var buttonEl = $("<button>").attr("data-input", schedule.time[i].display ).addClass("btn btn-default far fa-save saveBtn");
            
            $(timeEl).text(schedule.time[i].display);
           
            $(".time-block").append(divEl);
            $(divEl).append(timeEl);
            $(divEl).append(inputEl);
            $(divEl).append(buttonEl);

            if (schedule.time[i].value < now){
                inputEl.addClass("past");
            }else if (schedule.time[i].value === now){
                inputEl.removeClass("past");
                inputEl.addClass("present");
                inputEl.addClass("present");

            }else{ (schedule.time[i].value > now)
                inputEl.removeClass("past");
                inputEl.removeClass("present");
                inputEl.addClass("future");
            };   

        }

        
        

        
        console.log(schedule)
        console.log(now);
        console.log(moment()._d);

        //function for local storage of descInput, saves to local storage as a string
        $(document).on("click", ".saveBtn", function(){
            console.log("__________________")
            console.log("clicked");
            
            

        });
        
        
    };

    render()
});