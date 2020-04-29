//moment
var NowMoment = moment().format("dddd, MMMM Do");
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;


$(document).ready(function() {

    //var declarations
    
    var schedule = { time : ["9A", "10A", "11A", "12P", "1P","2P","3P", "4P", "5P"], 
    userEntry : ["","","","","","","","","",], 
    hour : ["(moment().hour(9);)" , ]
    };


    //function to check the timeslot relative to moment.
    // function (event){

    //it checks the time within the hour element, to see where it falls within moment, and color .description accordingly.
    // }
    function render(){
        for( let i = 0 ; i < schedule.time.length ; i++) {
            var divEl = $("<div>");
            divEl.addClass("row hour");
            var h4El = $("<h4>");
            h4El.addClass("timeline");
            var inputEl = $("<input>");
            inputEl.addClass("description");
            var buttonEl = $("<button>").attr("data-input", schedule.time.length[i]).addClass("btn btn-default far fa-save saveBtn");
            $(h4El).text(schedule.time[i]);
            
            
            
            $(".time-block").append(divEl);
            $(divEl).append(h4El);
            $(divEl).append(inputEl);
            $(divEl).append(buttonEl);

            

        }


    };

    //function for local storage of descInput, saves to local storage as a string
    $(".saveBtn").on("click", function(){
        console.log("__________________")
        console.log("clicked");
        console.log(schedule.hour[0])
        
        
        var descInput = document.querySelector(".description").value;
        console.log(descInput);
        localStorage.setItem("description", descInput);
        console.log(descInput);
    });

    
    //onclick event for save button

    //Before verification
    //moment().isBefore(Moment|String|Number|Date|Array);

    //Present verification
    //moment().isSame(Moment|String|Number|Date|Array);

    //After verification
    //moment().isAfter(Moment|String|Number|Date|Array);
    render()
});