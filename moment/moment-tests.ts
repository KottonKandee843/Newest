/// <reference path="moment.d.ts" />

moment().add('hours', 1).fromNow();

var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);
var otherDay = moment(new Date(2020, 3, 7));

var day1 = moment(1318781876406);
var day2 = moment.unix(1318781876);
var day3 = moment("Dec 25, 1995");
var day4 = moment("12-25-1995", "MM-DD-YYYY");
var day5 = moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
var day6 = moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]);
var now = moment();
var day7 = moment([2010, 1, 14, 15, 25, 50, 125]);
var day8 = moment([2010]);
var day9 = moment([2010, 6]);
var day10 = moment([2010, 6, 10]); 
var array = [2010, 1, 14, 15, 25, 50, 125];
var day11 = moment(Date.UTC.apply({}, array));
var day12 = moment.unix(1318781876);

var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012

moment.utc();
moment.utc(12345);
moment.utc([12, 34, 56]);
moment.utc("1-2-3");
moment.utc("1-2-3", "3-2-1");

var a2 = moment.utc([2011, 0, 1, 8]);
a.hours();
a.local();
a.hours();

moment("2011-10-10", "YYYY-MM-DD").isValid(); 
moment("2011-10-50", "YYYY-MM-DD").isValid(); 
moment("2011-10-10T10:20:90").isValid();
moment([2011, 0, 1]).isValid();
moment([2011, 0, 50]).isValid();
moment("not a date").isValid();

moment().add('days', 7).subtract('months', 1).year(2009).hours(0).minutes(0).seconds(0);

moment().add('days', 7);
moment().add('days', 7).add('months', 1);
moment().add({days:7,months:1});
moment().add('milliseconds', 1000000); 
moment().add('days', 360);
moment([2010, 0, 31]);  
moment([2010, 0, 31]).add('months', 1);
var m = moment(new Date(2011, 2, 12, 5, 0, 0));
m.hours(); 
m.add('days', 1).hours();
var m2 = moment(new Date(2011, 2, 12, 5, 0, 0)); 
m2.hours();
m2.add('hours', 24).hours(); 
var duration = moment.duration({'days': 1});
moment([2012, 0, 31]).add(duration);

moment().subtract('days', 7);

moment().seconds(30);
moment().minutes(30);

moment().hours(12); 
moment().date(5);
moment().day(5);
moment().day("Sunday");
moment().month(5);
moment().month("January");
moment().year(1984);
moment().startOf('year'); 
moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
moment().startOf('hour');
moment().minutes(0).seconds(0).milliseconds(0);
moment().weekday();
moment().weekday(0);
moment().isoWeekday(1);
moment().isoWeekday();
moment().weekYear(2);
moment().weekYear();
moment().isoWeekYear(3);
moment().isoWeekYear();

var getMilliseconds: number = moment().milliseconds(); 
var getSeconds: number = moment().seconds(); 
var getMinutes: number = moment().minutes(); 
var getHours: number = moment().hours(); 
var getDate: number = moment().date();
var getDay: number = moment().day();
var getMonth: number = moment().month();
var getYear: number = moment().year();

moment().hours(0).minutes(0).seconds(0).milliseconds(0);

var a3 = moment([2011, 0, 1, 8]);
a3.hours();
a3.utc();
a3.hours();

var a4 = moment([2010, 1, 14, 15, 25, 50, 125]);
a4.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
a4.format("ddd, hA");

moment().format('\\L');
moment().format('[today] DDDD'); 

var a5 = moment([2007, 0, 29]);
var b5 = moment([2007, 0, 28]);
a5.from(b5);

var a6 = moment([2007, 0, 29]);
var b6 = moment([2007, 0, 28]);
a6.from(b6);
a6.from([2007, 0, 28]);         
a6.from(new Date(2007, 0, 28)); 
a6.from("1-28-2007");

var a7 = moment();
var b7 = moment("10-10-1900", "MM-DD-YYYY");
a7.from(b7);

var start = moment([2007, 0, 5]);
var end = moment([2007, 0, 10]);
start.from(end);   
start.from(end, true);

moment([2007, 0, 29]).fromNow(); 
moment([2007, 0, 29]).fromNow();     
moment([2007, 0, 29]).fromNow(true); 

var a8 = moment([2007, 0, 29]);
var b8 = moment([2007, 0, 28]);
a8.diff(b8) ;
a8.diff(b8, 'days');
a8.diff(b8, 'years')      
a8.diff(b8, 'years', true);

moment([2007, 0, 29]).toDate();
moment([2007, 1, 23]).toISOString();
moment(1318874398806).valueOf(); 
moment(1318874398806).unix();
moment([2000]).isLeapYear();
moment().zone();
moment("2012-2", "YYYY-MM").daysInMonth();
moment([2011, 2, 12]).isDST();

moment.isMoment();
moment.isMoment(new Date());
moment.isMoment(moment());

moment.lang('fr');
moment(1316116057189).fromNow();

moment.lang('en'); 
var globalLang = moment();
var localLang = moment();
localLang.lang('fr'); 
localLang.format('LLLL'); 
globalLang.format('LLLL'); 

moment.duration(100);
moment.duration(2, 'seconds');
moment.duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: 2,
    years: 2
});
moment.duration(1, "minutes").humanize();
moment.duration(500).milliseconds();
moment.duration(500).asMilliseconds();
moment.duration(500).seconds();
moment.duration(500).asSeconds();
moment.duration().minutes();
moment.duration().asMinutes();

// Defining a custom language: 
moment.lang('en', {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    longDateFormat: {
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D YYYY",
        LLL: "MMMM D YYYY LT",
        LLLL: "dddd, MMMM D YYYY LT"
    },
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 9) {
            return "??";
        } else if (hour < 11 && minute < 30) {
            return "??";
        } else if (hour < 13 && minute < 30) {
            return "??";
        } else if (hour < 18) {
            return "??";
        } else {
            return "??";
        }
    },
    calendar: {
        lastDay: '[Yesterday at] LT',
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        lastWeek: '[last] dddd [at] LT',
        nextWeek: 'dddd [at] LT',
        sameElse: 'L'
    },
    ordinal: function (number) {
        var b = number % 10;
        return (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
});

moment.lang('en', {
    months : [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ]
});

moment.lang('en', {
    months : function (momentToFormat, format) {
        // momentToFormat is the moment currently being formatted
        // format is the formatting string
        if (/^MMMM/.test(format)) { // if the format starts with 'MMMM'
            return this.nominative[momentToFormat.month()];
        } else {
            return this.subjective[momentToFormat.month()];
        }
    }
});

moment.lang('en', {
    monthsShort : [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
});

moment.lang('en', {
    monthsShort : function (momentToFormat, format) {
        if (/^MMMM/.test(format)) {
            return this.nominative[momentToFormat.month()];
        } else {
            return this.subjective[momentToFormat.month()];
        }
    }
});

moment.lang('en', {
    weekdays : [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
});

moment.lang('en', {
    weekdays : function (momentToFormat, format) {
        return this.weekdays[momentToFormat.day()];
    }
});

moment.lang('en', {
    weekdaysShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
});

moment.lang('en', {
    weekdaysShort : function (momentToFormat, format) {
        return this.weekdaysShort[momentToFormat.day()];
    }
});

moment.lang('en', {
    weekdaysMin : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
});

moment.lang('en', {
    weekdaysMin : function (momentToFormat, format) {
        return this.weekdaysMin[momentToFormat.day()];
    }
});

moment.lang('en', {
    longDateFormat : {
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        l: "M/D/YYYY",
        LL: "MMMM Do YYYY",
        ll: "MMM D YYYY",
        LLL: "MMMM Do YYYY LT",
        lll: "MMM D YYYY LT",
        LLLL: "dddd, MMMM Do YYYY LT",
        llll: "ddd, MMM D YYYY LT"
    }
});

moment.lang('en', {
    longDateFormat : {
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM Do YYYY",
        LLL: "MMMM Do YYYY LT",
        LLLL: "dddd, MMMM Do YYYY LT"
    }
});

moment.lang('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s:  "seconds",
        m:  "a minute",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
});

moment.lang('en', {
    meridiem : function (hour, minute, isLowercase) {
        if (hour < 9) {
            return "早上";
        } else if (hour < 11 && minute < 30) {
            return "上午";
        } else if (hour < 13 && minute < 30) {
            return "中午";
        } else if (hour < 18) {
            return "下午";
        } else {
            return "晚上";
        }
    }
});

moment.lang('en', {
    calendar : {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : function () {
          return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    }
});

moment.lang('en', {
    ordinal : function (number) {
        var b = number % 10;
        var output = (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});
