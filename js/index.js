const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//----------------- nav ---------------------
let nav1 = document.querySelectorAll('a');
nav1[0].textContent = siteContent["nav"]["nav-item-1"]

let nav2 = document.querySelectorAll('a');
nav2[1].textContent = siteContent["nav"]["nav-item-2"]

let nav3 = document.querySelectorAll('a');
nav3[2].textContent = siteContent["nav"]["nav-item-3"]

let nav4 = document.querySelectorAll('a');
nav4[3].textContent = siteContent["nav"]["nav-item-4"]

let nav5 = document.querySelectorAll('a');
nav5[4].textContent = siteContent["nav"]["nav-item-5"]

let nav6 = document.querySelectorAll('a');
nav6[5].textContent = siteContent["nav"]["nav-item-6"]

//---new items---
const One = document.createElement("a");
One.textContent = "I am item 1";
const secondaryContent = document.querySelector(['nav']);

secondaryContent.append(One);

const Two = document.createElement("a");
Two.textContent = "I am item 2";
const secondSecondaryContent = document.querySelector(['nav']);

secondSecondaryContent.append(Two);

const Links= document.getElementsByTagName('a');

Array.from(Links)
Array.from(Links).forEach((link) => {
    console.log(link.tagName);
  link.style.color = 'green';
});
//---new items end---
//----------------- nav end ------------------

//----------------- cta ---------------------
let logo1 = document.getElementById("cta-img");
logo1.setAttribute('src', siteContent["cta"]["img-src"]);

const title = document.querySelector('h1');
title.textContent = siteContent["cta"]["h1"]

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"]
//----------------- cta end -------------------

//---------------- main-content ---------------
let logo2 = document.getElementById("middle-img");
logo2.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//---h4---
let features = document.querySelectorAll('h4');
features[0].textContent = siteContent["main-content"]["features-h4"]

let about = document.querySelectorAll('h4');
about[1].textContent = siteContent["main-content"]["about-h4"]

let services = document.querySelectorAll('h4');
services[2].textContent = siteContent["main-content"]["services-h4"]

let product = document.querySelectorAll('h4');
product[3].textContent = siteContent["main-content"]["product-h4"]

let vision = document.querySelectorAll('h4');
vision[4].textContent = siteContent["main-content"]["vision-h4"]
//---h4 end---
//---content---
let featuresContent = document.querySelectorAll('p');
featuresContent[0].textContent = siteContent["main-content"]["features-content"]

let aboutContent = document.querySelectorAll('p');
aboutContent[1].textContent = siteContent["main-content"]["about-content"]

let servicesContent = document.querySelectorAll('p');
servicesContent[2].textContent = siteContent["main-content"]["services-content"]

let productContent = document.querySelectorAll('p');
productContent[3].textContent = siteContent["main-content"]["product-content"]

let visionContent = document.querySelectorAll('p');
visionContent[4].textContent = siteContent["main-content"]["vision-content"]
//---content end---
//---------------- main-content end ---------------

//---------------- contact --------------------
let contactHeader = document.querySelectorAll('h4');
contactHeader[5].textContent = siteContent["contact"]["contact-h4"]

let address = document.querySelectorAll('p');
address[5].textContent = siteContent["contact"]["address"]

let phone = document.querySelectorAll('p');
phone[6].textContent = siteContent["contact"]["phone"]

let email = document.querySelectorAll('p');
email[7].textContent = siteContent["contact"]["email"]
//---------------- contact end ------------------

//------------------ footer ---------------------
let footer = document.querySelectorAll('p');
footer[8].textContent = siteContent["footer"]["copyright"]
//------------------ footer end -----------------