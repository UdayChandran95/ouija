const loadingImg = document.querySelector(".loadingImg")


function goToPage() {
    loadingImg.style.display = "block";
    setTimeout(function(){
        window.location.href = "ouija.html";
    }, 4000)

    
}


const movingPath = document.querySelector(".tool")
const searchInput = document.querySelector('.search-bar');

searchInput.addEventListener('input', () => {
    movingPath.classList.remove(
        "moving", 
        "moving2", 
        "moving3", 
        "moving4", 
        "moving5", 
        "moving6", 
        "moving7"
    );

    const inputValue = searchInput.value.toLowerCase();


    const areYouHereInputs = ['are you here', 'am i insane','are you a good spirit', 'are you good spirit', 'are you male' ,'are you single'];
    const howOldAreYouInputs = ['how old are you', 'what is your age', 'whats ur age'];
    const whatIsYourNameInputs = ['what is your name', 'whats ur name', 'your name'];
    const howDidYouDieInputs = ['how did you die', 'how u die', 'how did u die'];
    const whatDoYouWantInputs = ['what do you want', 'what u want', 'what do u want' , 'what you want me to do'];
    const willYouGoIfISingInputs = ['will you go if i sing' , 'are u going to kill me' , 'are you going to kill me', 
        'are you married', 'are you female', 'are you a fool , are you mad'];

    if (areYouHereInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving");
        }, 2000);

    } else if (howOldAreYouInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving2");
        }, 2000);

    } else if (whatIsYourNameInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving3");
        }, 2000);

    } else if (howDidYouDieInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving4");
        }, 2000);

    } else if (whatDoYouWantInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving5");
        }, 2000);

    } else if (willYouGoIfISingInputs.includes(inputValue)) {
        setTimeout(function(){
            movingPath.classList.add("moving6");
        }, 2000);

    } 
});