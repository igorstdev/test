/* JS for dropdown */

let isOpened = false;
const dropLabel = document.getElementById('drop-label');
const dropdown = document.getElementById("actions");
dropLabel.onclick = function() {
    if(!isOpened) {
        dropdown.style.display = "block";
        isOpened = true;
    }
    else {
        dropdown.style.display = "none";
        isOpened = false;
    }
};

/* JS for inputs with floating label */

const FloatLabel = (() => {

    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
    };

    // remove active class
    const handleBlur = (e) => {
        const target = e.target;
        if(!target.value) {
            target.parentNode.classList.remove('active');
        }
    };

    // register events
    const bindEvents = (element) => {
        const floatField = element.querySelector('input, select');
        floatField.addEventListener('focus', handleFocus);
        floatField.addEventListener('blur', handleBlur);
    };

    // get DOM elements
    const init = () => {
        const floatContainers = document.querySelectorAll('.text-field.floating');

        floatContainers.forEach((element) => {

            if (element.querySelector('input, select').value) {
                element.classList.add('active');
            }

            bindEvents(element);
        });
    };

    return {
        init: init
    };
})();

FloatLabel.init();

/* JS for changing search input icon */

/*searchField.forEach ((element) => {
    element.addEventListener('focus') = function () {
        searchIcon.classList.toggle('change-icon');
    }
});*/
/* JS for inputs with floating label */

const changeIcon = (() => {

    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('change-icon');
    };

    // remove active class
    const handleBlur = (e) => {
        const target = e.target;
        if(!target.value) {
            target.parentNode.classList.remove('change-icon');
        }
    };

    // register events
    const bindEvents = (element) => {
        const changeIcon = element.querySelector('input');
        changeIcon.addEventListener('focus', handleFocus);
        changeIcon.addEventListener('blur', handleBlur);
    };

    // get DOM elements
    const init = () => {
        const searchField = document.querySelectorAll('.text-field.search');

        searchField.forEach((element) => {

            if (element.querySelector('input').value) {
                searchField.classList.add('change-icon');
            }

            bindEvents(element);
        });
    };

    return {
        init: init
    };
})();

changeIcon.init();

/* JS for changing sort icon */

const sortIcon = document.querySelectorAll('.btn-icon.sort');

sortIcon.forEach((element) => {

    element.onclick = function () {
        element.classList.toggle('change-icon');
    }
});

/* JS for toggleing sidebar in mobile */

const sidebarBtn = document.getElementById('sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');

sidebarBtn.onclick = function(e) {
    e.stopPropagation();

    if(sidebarBtn.classList.contains('opened')) {
        // close sidebar
        sidebar.classList.remove('opened');
        sidebarBtn.classList.remove('opened');
    }
    else {
        // open sidebar
        sidebar.classList.add('opened');
        sidebarBtn.classList.add('opened');
    }
};

closeSidebarBtn.onclick = function(e) {
    // close sidebar
    sidebar.classList.remove('opened');
    sidebarBtn.classList.remove('opened');
};

sidebar.onclick = function(e) {
    e.stopPropagation();
};

document.onclick = function() {
    // close sidebar
    sidebar.classList.remove('opened');
    sidebarBtn.classList.remove('opened');
};