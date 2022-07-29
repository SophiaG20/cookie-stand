'use strict'

// locations for cookie-stand

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
    city: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return value;
},