/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
kk
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
// */
// const followersArray = [];
// const followersArray = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
// followersArray.forEach(item => {
//   axios.get(`https://api.github.com/users/${item}`)
//   .then(res => {
//     cardMaker(res.data)
//   })
// })
// followersArray.forEach(profileURL => {
  // const url = `https://api.github.com/users/${profileURL}`
  
//   axios.get(`https://api.github.com/users/tetondan/followers`)
//   .then((res) => {
//     res.ata.forEach( user => {
//       followersArray.push(user.login);
//     })
//     followersArray.forEach( username => {
//       appendUserCard(username);
//     })
//   console.log("Step 5 Success");
//   })
//   .catch((err) => {
//     console.log("Step 5 Error:", err);
//   })
// }) 

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*//*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const { default: axios } = require("axios");
// Step 1/2
axios.get("https://api.github.com/users/angelakennefick")
  .then(data => {
   const cards = document.querySelector(".cards");
   cards.appendChild(cardMaker(data.cardData));
   console.log("GitHub Data", data);
  })
  .catch(error => {
    console.log("Error:", error)
  })
// Step 3
const cardDiv = document.querySelector(".cards");
function cardMaker(cardData) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userPage = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  document.body.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(userPage);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");
  profile.classList.add("profile");
  // userPage.classList.add("html_url")
  // img.classList.add("avatar_url");

  img.src = cardData.avatar_url;
  name.textContent = cardData.name;
  username.textContent = cardData.login;
  location.textContent = `Location: ${cardData.location}`;
  profile.textContent = "Profile: " + cardData.html_url;
  // userPage.href = cardData.html_url;
  userPage.textContent = cardData.html_url;
  followers.textContent = "Followers: " + cardData.followers;
  following.textContent = "Following: " + cardData.following;
  bio.textContent = "Bio: " + cardData.bio;

  return card;

}
// Step 4 
function appendCard(username){
  axios.get(`https://api.github.com/users/${username}`).then(res => {
    const anotherCard = cardMaker(res.data);
    document.querySelector(".cards").appendChild(anotherCard);
    console.log("Step 4 success");
  })
  .catch(err => {
    console.log("Step 4 Error:", err)
  });
}
appendCard("angelakennefick");