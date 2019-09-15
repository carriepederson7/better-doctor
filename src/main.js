import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// var pageCounter = 1;
// var animalContainer = document.getElementById("animal-info");
// var btn = document.betElementById("btn");
//
//
// //this would be a function to start the XMLHttpRequest;
// btn.addEventListner("click", function(){
//   + pageCounter+// in url
//   //after body is defined
//   renderHTML(ourData);
//   //after send()
//   pageCounter ++;
//   if (pageCounter >3){
//     btn.classList.add("hideme");
//   }
//
// })
//

$(document).ready(function() {
  $("#health-info").submit(function(event) {
    event.preventDefault();
    const name = $("#doctor-name").val();
    console.log(name);
    const practice = $("#practice").val();

    medInfo(name, practice);


    function medInfo() {

      let info = new Info();
      let promise = info.conditions()
      let htmlString = ""
      promise.then(function(response) {
        const body = JSON.parse(response);
        console.log(body);
        let profiles = body.data
        // let practices = body.data.practices
        // let specialties = body.data.specialties[0]
        profiles.forEach(function(profile) {

          for (let i = 0; i < profile.specialties.length; i++) {
            console.log(profile.specialties[i].actor);
            if (profile.specialties[i].actor === practice) {
              $("#practiceSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
            }
          }
        });
        profiles.forEach(function(profile) {
          if (profile.profile.first_name === name || profile.profile.last_name === name) {
            $("#doctorSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
          }
        });

        // practices.forEach(function(practice){
        //   if(profile.profile.first_name === name || profile.profile.last_name === name)
        //   $("#contactAddress").append(`<li>${practice.visit_address.street} , ${practice.visit_address.city}, ${practice.visit_address.state}, ${practice.visit_address.zip}</li>`);
        //
        // });


        // for(let i=0; i<body.data[i].profile.length; i++){
        //   console.log(body.data[i].profile);}
        // if(body.data[i].profile.first_name === "Lyn"){
        //   alert("found lyn!")
        //   // htmlString = "</p>" + body.data[i].profile.first_name + body.data[i].profile.last_name+"</p>"
        // }else {

        // console.log(body.data[0].profile);
        // console.log(body.data[1]);

      });

    }

    // }, function(error) {
    //   $(".showErrors").text(`There was an error processing your request: ${error.message}`);
    // }
  });
});
//
// function renderHTML(data){
//   var htmlString = "";
//     htmlString += "<p" + data[i].name + "is a" + data[i].species +"who likes to eat";
//     for(j=0, j<data[i].foods.likes.length; j++{
//       if(j === 0){
//         htmlString += data[i].foods.likes[j];
//       }else{
//         htmlString += "and" + data[i].foods.likes[j];
//       }
//     }
//     hmtlSring += '.</p>'
//   }
//   animalContainer.insertAdjacentHTML("beforeend", htmlString);
// }
//
// }






// medInfo();

//do an API call for doctors in the location, also have this handle doctor search by name, what type of doctors are you looking for


// run a forEach loop for is accepting new patients
