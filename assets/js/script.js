$(function() {

    var note = $('#note'),
        ts = new Date("April 21, 2017 21:35:25").getTime(),
        newYear = true;
    now = new Date().getTime();
    if ((ts - now) == 0) {}

    $('#countdown').countdown({
        timestamp: ts,
        callback: function(days, hours, minutes, seconds) {

            var message = "";

            message += days + " day" + (days == 1 ? '' : 's') + ", ";
            message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
            message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
            message += seconds + " second" + (seconds == 1 ? '' : 's') + " left<br />";
            note.html(message);
        }
    });

});