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
        let value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return value;
},

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avg);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   ,
render() {
    this.hourlySales();
    let list = document.getElementById('seattle');
    // let header = document.createElement('h2');
    // section.appendChild(header);
    // header.textContent = this.city;
    // let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hours[i]+': '+ this.CookiesPerHour[i]+ 'cookies';
        list.appendChild(listItem);
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
}
};
let tokyo = {
    city: 'Tokyo',
    min: 23,
    max: 65,
    avg: 6.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return value;
},

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avg);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   ,
render() {
    this.hourlySales();
    let list = document.getElementById('tokyo');
    // let header = document.createElement('h2');
    // section.appendChild(header);
    // header.textContent = this.city;
    // let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hours[i]+': '+ this.CookiesPerHour[i]+ 'cookies';
        list.appendChild(listItem);
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
}
};
let dubai = {
    city: 'Dubai',
    min: 23,
    max: 65,
    avg: 6.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return value;
},

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avg);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   ,
render() {
    this.hourlySales();
    let list = document.getElementById('dubai');
    // let header = document.createElement('h2');
    // section.appendChild(header);
    // header.textContent = this.city;
    // let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hours[i]+': '+ this.CookiesPerHour[i]+ 'cookies';
        list.appendChild(listItem);
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
}
};
let paris = {
    city: 'Paris',
    min: 23,
    max: 65,
    avg: 6.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return value;
},

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avg);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   ,
render() {
    this.hourlySales();
    let list = document.getElementById('paris');
    // let header = document.createElement('h2');
    // section.appendChild(header);
    // header.textContent = this.city;
    // let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hours[i]+': '+ this.CookiesPerHour[i]+ 'cookies';
        list.appendChild(listItem);
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
}
};
let lima = {
    city: ':Lima',
    min: 23,
    max: 65,
    avg: 6.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return value;
},

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avg);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   ,
render() {
    this.hourlySales();
    let list = document.getElementById('lima');
    // let header = document.createElement('h2');
    // section.appendChild(header);
    // header.textContent = this.city;
    // let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hours[i]+': '+ this.CookiesPerHour[i]+ 'cookies';
        list.appendChild(listItem);
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
}
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
