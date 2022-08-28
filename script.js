
/**
 * Here I declared four variables with their various class names
 */
const wrapperItem = document.querySelector('.wrapper');
const btnItem = document.querySelector('.btn');
const popupwrapperItem = document.querySelector('.popup-wrapper');
const closeiconItem = document.querySelector('.close-icon');

/**
 * Here I added an eventListener method to the btnItem variable, the event I want to handle here
 * is click followed by the second parameter which is the function to be triggered when the event
 * event happens
 */
btnItem.addEventListener('click', ()=>{
    wrapperItem.classList.add('active');
    popupwrapperItem.classList.remove('active');
});

/**
 * Here I added event eventlister method to the closeiconItem and the event is click and it is
 * meant to trigger function
 */
closeiconItem.addEventListener('click', ()=>{
    wrapperItem.classList.remove('active');
    popupwrapperItem.classList.add('active');
});



