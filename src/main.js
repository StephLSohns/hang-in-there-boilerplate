// query selector variables go here 👇
var mainPoster = document.querySelector(".main-poster"); //opening page
var posterImage = document.querySelector(".poster-img"); //actual poster on opening page whenloaded
var posterTitle = document.querySelector(".poster-title"); //actual title on opening page
var posterQuote = document.querySelector(".poster-quote"); //and actual quote on opening page
var savedPosters = document.querySelector('.saved-posters'); //this is the page of many saved posters
var savePoster = document.querySelector(".save-poster"); //this is a button on main poster page -saves current poster
var showSaved = document.querySelector(".show-saved");  //this is the button that takes user to saved posters page
var showRandom = document.querySelector(".show-random"); //this button changes the poster on the main page -can cycle thru diff posters
var showForm = document.querySelector(".show-form"); // this button takes user to the Form Page -to make their own poster
var makePoster = document.querySelector('.make-poster'); // this is the Show My Poster button on the Form page (shows your poster on main page)
var showMain = document.querySelector('.show-main'); // this button is also on Form page "NEVERMIND"button returns to main page
var backToMain = document.querySelector('.back-to-main'); //this button is on Saved Posters Page & returns user to main page
var posterForm = document.querySelector('.poster-form');
// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
//var savedPosters = [
  //makePoster(
  //  "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
    //"Optimism",
    //"Keep a joyful heart!"
  //)
//];
posterImage.src = images[getRandomIndex(images)];
posterTitle.innerText = titles[getRandomIndex(titles)];
posterQuote.innerText = quotes[getRandomIndex(quotes)];
// event listeners go here 👇
//mainPoster.addEventListener ('click', mainPageBtns);
// showRandom.addEventListener('click', getRandomIndex);
// mainPoster.addEventListener('click', mainPosterBtns);
// showMain.addEventListener('click', returnMainPoster);
showForm.addEventListener('click', goToFormPage);
showMain.addEventListener('click', returnToMainPage);
showSaved.addEventListener('click', goToSavedPosters);
backToMain.addEventListener('click', returnToMainPage);

// showForm.addEventListener('click',mainPageBtns);
// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  // for (var i = 0; i < array.length; i++) {
  return Math.floor(Math.random() * array.length);
 // }
}

function goToFormPage() {
  posterForm.classList.remove('hidden');
  mainPoster.classList.add('hidden');
  // showForm.classList.remove('hidden');
  // } else if () {
 }

 function returnToMainPage() {
   posterForm.classList.add('hidden');
   mainPoster.classList.remove('hidden');
   savedPosters.classList.add('hidden');
 }

 function goToSavedPosters() {
   mainPoster.classList.add('hidden');
   savedPosters.classList.remove('hidden');
 }

 // function goToFormPage() {
 //   showMain.classList.add('hidden');
 //   showForm.classList.remove('hidden');
 // }
//
// function mainPageBtns(event) {
//   if (event.target === showForm) {
//  }
// }
//
// function mainPageBtns(event) {
//   if (event.target === showSaved) {
//  }
// }
//
// function mainPageBtns(event) {
//   if (event.target === savePoster) {
//  }
// }
//
// function randomImg(images) {
//   var picture = getRandomIndex(images);
// }
//
// function randomTitle(titles) {
//   var title = getRandomIndex(titles);
// }
//
// function randomQuotes(quotes) {
//   var quotes = getRandomIndex(quotes);
// }
