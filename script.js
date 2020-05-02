//moment
var NowMoment = moment().format("dddd, MMMM Do");
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;


$(document).ready(function() {

    //var declarations
    var now = moment();
    
    var schedule = { 
        time : [
            "9:00am", 
            "10:00am", 
            "11:00am", 
            "12:00pm", 
            "1:00pm",
            "2:00pm",
            "3:00pm", 
            "4:00pm", 
            "5:00pm"
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
            var h4El = $("<h4>");
            h4El.addClass("timeline");
            var inputEl = $("<input>").text((schedule.userEntry[i]));
            inputEl.addClass("description");
            var buttonEl = $("<button>").addClass("far fa-save saveBtn");
            buttonEl.attr("data-time", (schedule.time[i]));
            $(h4El).text((schedule.time[i]));

            
            
            
            $(".time-block").append(divEl);
            $(divEl).append(h4El);
            $(divEl).append(inputEl);
            $(divEl).append(buttonEl);

            var previous = schedule.time[i];
            var next = schedule.time[i + 1];
            console.log(next);

            if (moment(schedule.time[i],'hh a').isBefore(now)){
                inputEl.addClass("past");
            }else if (now.isBetween(previous, next) || now > schedule.time[8]){
                inputEl.addClass("present");
            // }else if(moment(schedule.time[i],'hh a').isSame(now)) {
            //     inputEl.addClass("present");

            }else if (moment(schedule.time[i],'hh a').isAfter(now)){
                inputEl.addClass("future");
            };

            

            localStorage.setItem(schedule.time[i], schedule.userEntry[i]);
            console.log(schedule.time[i], schedule.userEntry[i]);

        }

        console.log(schedule)
        console.log(now);
        console.log(moment()._d);

        //function for local storage of descInput, saves to local storage as a string
        $(".saveBtn").on("click", function(){
            console.log("__________________")
            console.log("clicked");
            console.log(schedule.time[0])
            
            
            var descInput = document.querySelector(".description").val().trim();
             // use this to taget the input field ? $(this).attr("data-time");    
            console.log(descInput);
            localStorage.setItem(schedule.time[1], descInput);
            console.log(descInput);
        });

    };


    render()
});