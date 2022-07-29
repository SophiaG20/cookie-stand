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

hourlySales: function () {
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(this.randomSalestPerHour() * this.avgCookies);
        this.CookiesPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}   
},
render: function () {
    this.hourlySales();
    let section = document.getElementById('seattle');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${hours[i]}: ${this.CookiesPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
    }
};
let tokyo = {
    city: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return value;
},
    hourlySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(this.randomSalestPerHour() * this.avgCookies);
            this.CookiesPerHour.push(cookies);
            this.totalCookiesSold += cookies;
        }
    },
    render: function () {
        this.hourlySales();
        let section = document.getElementById('tokyo');
        let header = document.createElement('h2');
        section.appendChild(header);
        header.textContent = this.city;
        let list = document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.CookiesPerHour[i]} cookies`;
        }
        let total = document.createElement('li');
        list.appendChild(total);
        total.textContent = `Total: ${this.totalCookiesSold} cookies`;
    }
};  
let dubai = {   
    city: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return value;
}
    hourlySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(this.randomSalestPerHour() * this.avgCookies);
            this.CookiesPerHour.push(cookies);
            this.totalCookiesSold += cookies;
        }
    },  
    render: function () {
        this.hourlySales();
        let section = document.getElementById('dubai');
        let header = document.createElement('h2');
        section.appendChild(header);
        header.textContent = this.city;
        let list = document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.CookiesPerHour[i]} cookies`;
        }
        let total = document.createElement('li');
        list.appendChild(total);
        total.textContent = `Total: ${this.totalCookiesSold} cookies`;
    }
};
let paris = {
    city: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return value;
    }
    hourlySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(this.randomSalestPerHour() * this.avgCookies);
            this.CookiesPerHour.push(cookies);
            this.totalCookiesSold += cookies;
        }
    },
    render: function () {
        this.hourlySales();
        let section = document.getElementById('paris');
        let header = document.createElement('h2');
        section.appendChild(header);
        header.textContent = this.city;
        let list = document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.CookiesPerHour[i]} cookies`;
        }
        let total = document.createElement('li');
        list.appendChild(total);
        total.textContent = `Total: ${this.totalCookiesSold} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
};
let lima = {
    city: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    CookiesPerHour: [],
    totalCookiesSold: 0,
    randomSalestPerHour: function () {
        let value = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return value;
    }
    hourlySales: function () {
        for (let i = 0; i < hours.length; i++) {
            let randomSale = this.randomSalestPerHour();
            this.CookiesPerHour.push(randomSale);
            this.totalCookiesSold += randomSale;
        }
    },
    render: function () {
        this.hourlySales();
        let section = document.getElementById('lima');
        let header = document.createElement('h2');
        section.appendChild(header);
        header.textContent = this.city;
        let list = document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.CookiesPerHour[i]} cookies`;
        }
        let total = document.createElement('li');
        list.appendChild(total);
        total.textContent = `Total: ${this.totalCookiesSold} cookies`;
    }   
};  
let total = document.createElement('li');
list.appendChild(total);
total.textContent = `Total: ${this.totalCookiesSold} cookies`;
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
