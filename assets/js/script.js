// modal on/off event
const buyButtons = document.querySelectorAll('.js-buy-btn');
const modalBuyTickets = document.querySelector('.js-modal');
const btnCloseModal = document.querySelector('.js-close');
const modalContainer = document.querySelector('.js-modal-container');
const sendButton = document.querySelector('.js-send-btn');
const inputContact = document.querySelectorAll('.js-input-contact');

function showModal() {
    modalBuyTickets.classList.add('open');
}

function hideModal() {
    modalBuyTickets.classList.remove('open');
}

buyButtons.forEach(buyButton => {
    buyButton.addEventListener('click', showModal)
});

btnCloseModal.addEventListener('click', hideModal);

// press outside the modal to exit
modalBuyTickets.addEventListener('click', hideModal);

modalContainer.addEventListener('click', function (event) 
{
    event.stopPropagation()
});

// Send contact information
function displayMessage() {
    if (inputContact != null) {
        alert('Sent contact address!!!');
    }
    else return;
}

sendButton.addEventListener('click', displayMessage);

// Mobile menu responsive
let headerElement = document.getElementById('header');
let moblieMenu = document.getElementById('mobile-menu');
let heightHeader = headerElement.clientHeight;

// Turn on, turn off
moblieMenu.onclick = function() {
    let isClose = headerElement.clientHeight === heightHeader;
    if (isClose) {
        headerElement.style.height = 'auto';
    }
    else {
        headerElement.style.height = 'var(--height-header)';
    }
}

// Auto close when menu selection
let menuItems = document.querySelectorAll('#navigation li a[href*="#"]');

menuItems.forEach(menuItem => {
    menuItem.onclick = function(event) {
        let isParentMenu = this.nextElementSibling 
        && this.nextElementSibling.classList.contains('menu-of-more');
        if (!isParentMenu) {
            headerElement.style.height = null;
        }
        else {
            event.preventDefault();
        }
    }
});