let clubName = "Crochet Learning Circle for Beginners";
console.log("Welcome to " + clubName);

let meetingDay = "Saturdays and Sundays";
console.log("We meet on  " + meetingDay);

// Declare or define a function
function sayHi() {
    console.log("Hi! Thanks for coming by!");
}


// Call the function
sayHi();

function sayBye() {
    console.log("GoodBye!");
}

sayBye();
sayBye();

// Day 2

let nextButton = document .querySelector("#next-btn");
let nextMeeting = document .querySelector("#next-meeting");

//Declare a function message

function showNextMeeting() {
    nextMeeting.textContent = "We meet Saturdays and Sundays every week at 4pm to 6pm at Cherry Blossom Road"
}

nextButton.addEventListener("click", showNextMeeting);

// dark Mode btn 
let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeButton.textContent = "Light Mode";
    } else{
        themeButton.textContent = "Dark Mode";
    }

}

themeButton.addEventListener("click", toggleTheme);

