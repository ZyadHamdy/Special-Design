/*
-----Map Js:-
--Start Make Fun To Handele Active Class
--Star Settings Box
--Start Changing Landing Page
--Start Skills
--Start Creat Popup Box
--Start Toggle Menu
--Start Bullets And Links
Go Up & Changing NavBar
*/

/*------------------------Start Make Fun To Handele Active Class ------------------------*/
function handeleActive(elements) {
    elements.target.parentElement.querySelectorAll('.active').forEach((e) => {
        e.classList.remove('active')
    })

    elements.target.classList.add('active')
}
/*------------------------End Handele Active Class------------------------*/
/*------------------------Star Settings Box------------------------*/
let settingsBox = document.querySelector('.settings');
let iconSettings = document.querySelector('.icon-settings');
iconSettings.addEventListener('click', showElement);

//Click On Toggle Setting Gear
function showElement() {
    settingsBox.classList.toggle('open')
    iconSettings.classList.toggle('fa-spin')

}

//Get Items From Local Storage
let colorItem = localStorage.getItem('color-option');

console.log(colorItem) //will output the color in localstorage after take it from mai-color
if (colorItem !== null) {
    //Will Take Color From Localsorage And But It In main-color
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color-option'));
    document.querySelectorAll('.color-box li').forEach(elements => {
        elements.classList.remove('active')
        if (elements.dataset.color == colorItem) {
            elements.classList.add('active')
        }
    })

}

//Swich Colors
let colorLi = document.querySelectorAll('.color-box li');
//Loop On List Colors
colorLi.forEach(li => {
    li.addEventListener('click', (e) => {
        //Set Color On Element

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //Set Color on Localstorage
        localStorage.setItem('color-option', e.target.dataset.color);
        handeleActive(e);
    })

})

//Swich Random Background
// Random Background Option
let backgroundOption = true;
// Variable To Control The Background Interval
let backgroundInterval;
//Store Randomize In Local Sorage
let backgroundLocal = localStorage.getItem('background-option');
if (backgroundLocal !== null) {
    document.querySelectorAll('.random-background span').forEach(element => {
        element.classList.remove('active')
        if (backgroundLocal === 'true') {
            backgroundOption = true;
            document.querySelector('.random-background .yes').classList.add('active')
        } else {
            backgroundOption = false;
            document.querySelector('.random-background .no').classList.add('active')
        }
    });
}
//sellect element
let randomBackground = document.querySelectorAll('.random-background span');
//loop on all random items
randomBackground.forEach(span => {
        //click on every span in random
        span.addEventListener('click', (event) => {
            //remove active class
            handeleActive(event);
            event.target.classList.add('active')
            if (event.target.dataset.background === 'yes') {
                backgroundOption = true;
                randomInterval();
                localStorage.setItem('background-option', true)
            } else {
                backgroundOption = false;
                clearInterval(backgroundInterval);
                localStorage.setItem('background-option', false)
            }
        })
    })
    //Show Bullets
let bullets = document.querySelectorAll('.show-bullets span');
let bulletsContainer = document.querySelector('.bullets-container');
let localBulletsItem = localStorage.getItem('bullets-option');
if (localBulletsItem !== null) {
    bullets.forEach(span => {
        span.classList.remove('active');
    })
    if (localBulletsItem === 'block') {
        bulletsContainer.style.display = 'block';
        document.querySelector('.show-bullets .yes').classList.add('active')
    } else {
        bulletsContainer.style.display = 'none'
        document.querySelector('.show-bullets .no').classList.add('active')
    }
}

bullets.forEach(span => {
    span.addEventListener('click', (e) => {
        if (span.dataset.bullet === 'show') {

            bulletsContainer.style.display = 'block'
            localStorage.setItem('bullets-option', 'block')
        } else {
            bulletsContainer.style.display = 'none'
            localStorage.setItem('bullets-option', 'none')
        }
        handeleActive(e);
    })
})


//Reset Options
document.querySelector('.reset-option').onclick = () => {
    let localItems = ['color-option', 'background-option', 'bullets-option'];
    for (let i = 0; i < localItems.length; i++) {
        localStorage.removeItem(localItems[i])
    }
    window.location.reload();
}

/*------------------------End Settings Box------------------------*/
/*------------------------Start Changing Landing Page------------------------*/

//Make Link Active
let linksLanding = document.querySelectorAll('.content-nav a');
//loop on all a items
linksLanding.forEach(a => {
    //click on every a in NavBar
    a.addEventListener('click', (event) => {
        //remove active class
        linksLanding.forEach(element => {
            element.classList.remove('active')
        })
        event.target.classList.add('active')
    })
})

//Select Landing Pagr Element.
let landingPage = document.querySelector(".landing");
//Get Array Of Imgs
let imgArrayUrl = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
//Random Background
function randomInterval() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArrayUrl.length);
            //Change Background Imgs
            landingPage.style.backgroundImage = 'url("imgs/' + imgArrayUrl[randomNumber] + '")';
        }, 5000)
    }
}
randomInterval();
/*------------------------End Changing Landing Page------------------------*/
/*------------------------Start Skills------------------------*/
//Select Skills
let allSkills = document.getElementById('theskills');
window.onscroll = () => {
    let skillsOffsetTop = allSkills.offsetTop;
    let skillsOffsetHeight = allSkills.offsetHeight;
    let windowInnerHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowInnerHeight)) {
        let mySkillProgress = document.querySelectorAll(".skill-progress span");
        mySkillProgress.forEach((span) => {
            span.style.width = span.dataset.progress;
            span.style.visibility = 'visible'
        })
    }
}

/*------------------------End Skills------------------------*/
/*------------------------Start Creat Popup Box------------------------*/

let PopupImags = document.querySelectorAll('.gallery img');
PopupImags.forEach(img => {
    img.addEventListener('click', (e) => {
        //Creat Over Lay
        let overlay = document.createElement('div');
        //append class to div of overlay
        overlay.className = 'popup-overlay';
        //append overlay to body
        document.body.appendChild(overlay);
        //creat popup box
        let popupBox = document.createElement('div');
        //append class to popup box
        popupBox.className = 'popup-box';
        if (img.alt !== null) {
            //Creat Heading
            let imgHeading = document.createElement('h3');
            //add class to heading
            imgHeading.className = 'popup-heading';
            //creat text for heading
            let imgHeadingText = document.createTextNode(img.alt);
            //append imgHeadingText to imgHeading
            imgHeading.appendChild(imgHeadingText)
                //append imgHeading to popupBox
            popupBox.appendChild(imgHeading)
        }

        //creat popup img
        let popupImg = document.createElement('img');
        popupImg.src = img.src;
        //append img to popup box
        popupBox.appendChild(popupImg);
        //append popupBox to body
        document.body.appendChild(popupBox)
            //Creat button close
        let buttonClose = document.createElement('span');
        //add text to button close
        let buttonCloseText = document.createTextNode('X');
        //add class to button close
        buttonClose.className = 'button-close';
        //appen buttonCloseText to buttonClose
        buttonClose.appendChild(buttonCloseText);
        //appen buttonClose to popupBox
        popupBox.appendChild(buttonClose)
    })
});

//remove popup
document.addEventListener('click', (e) => {
    if (e.target.className == 'button-close') {
        // remove the current popup
        e.target.parentNode.remove()
            //remove over lay
        document.querySelector('.popup-overlay').remove()
    }
})

/*------------------------End Creat Popup Box------------------------*/
/*------------------------Start Toggle Menu------------------------*/
let menuToggle = document.querySelector('.toggle-menu');
let theLinks = document.querySelector('.content-nav .links');
menuToggle.onclick = (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('menu-active');
    theLinks.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if (e.target !== menuToggle && e.target !== theLinks) {
        if (theLinks.classList.contains('open')) {
            menuToggle.classList.toggle('menu-active');
            theLinks.classList.toggle('open')
        }
    }
})
theLinks.onclick = () => {
    e.stopPropagation();
}

/*------------------------End Toggle Menu------------------------*/
/*------------------------Start Bullets And Links------------------------*/
const allBullets = document.querySelectorAll('.bullets-container .bullet');
const allLinks = document.querySelectorAll('.links a');

function goThere(elements) {
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        })
    });
}
goThere(allBullets);
goThere(allLinks);

/*------------------------End Bullets And Links------------------------*/
/*------------------------ Go Up & Changing NavBar------------------------*/
//Show Nav Bar
let myNavigation = document.querySelectorAll('.show-nav span');
let navLocalItem = localStorage.getItem('nav-option');
let navBar = document.getElementById('when-scrolling');
if (navLocalItem !== null) {
    myNavigation.forEach((span) => {
        span.classList.remove('active')
    })
    if (navLocalItem === 'show') {
        navBar.classList.add('scrolling');
        document.querySelector('.show-nav .yes').classList.add('active');

    } else {
        navBar.classList.remove('scrolling');
        document.querySelector('.show-nav .no').classList.add('active');
    }
}
myNavigation.forEach(span => {
    span.addEventListener('click', (e) => {
        if (e.target.dataset.nav === 'show') {
            navBar.classList.add('scrolling');
            localStorage.setItem('nav-option', 'show')
        } else {
            navBar.classList.remove('scrolling')
            localStorage.setItem('nav-option', 'hidden');
        }
        handeleActive(e);
    })
})

//control Up
let goTop = document.querySelector('.go-top');
document.onscroll = function showSpanTop() {
    if (window.pageYOffset >= 1995) {
        goTop.style.right = '20px';
    } else {
        goTop.style.right = '-38px';
    }
}
goTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

/*------------------------End Go To Top & NavBar------------------------*/

let loading = document.querySelector('.overlay-page');
window.onload = setInterval(() => {
    loading.style.display = 'none'
}, 7300)