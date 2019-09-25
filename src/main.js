import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
  $("#health-info").submit(function(event) {
    event.preventDefault();
    const practice = $("#practice").val();


    let info = new Info();
    let promise = info.practices(practice)

    promise.then(function(response) {
      const body = JSON.parse(response);
      let profiles = body.data
      console.log(body);

      profiles.forEach(function(profile) {
          for (let i = 0; i < profile.specialties.length; i++) {
            if (profile.specialties[i].actor === practice)
              console.log(profile.specialties[i].actor) {
                $("#practiceSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
                $("#practiceSearch").append(`${profile.practices[0].visit_address.street} , ${profile.practices[0].visit_address.city}, ${profile.practices[0].visit_address.state}, ${profile.practices[0].visit_address.zip},
                ${profile.practices[0].phones[0].number} <br>Accepts new patients? ${profile.practices[0].accepts_new_patients}`);
              }
            }, function(error) {
              $(".showErrors").text(`There was an error processing your request: ${error.message}`);

          });
        }

    });
  });

  $("#doc-info").submit(function(event) {
    event.preventDefault();
    const practice = $("#practice").val();
    const rawName = $("#name").val();
    let endOfName = rawName.slice(1);
    let capitalFirstLetter = rawName.charAt(0).toUpperCase();
    const name = capitalFirstLetter + endOfName


    let info = new Info();
    let promise = info.doctors(name, practice)

    promise.then(function(response) {
      const body = JSON.parse(response);
      let profiles = body.data
      console.log(body);

      profiles.forEach(function(profile) {
          for (let i = 0; i < profile.specialties.length; i++) {
            if (profile.profile.first_name === name || profile.profile.last_name === name)

            {
              $("#doctorSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
              $("#doctorSearch").append(`${profile.practices[0].visit_address.street} , ${profile.practices[0].visit_address.city}, ${profile.practices[0].visit_address.state}, ${profile.practices[0].visit_address.zip},
                  ${profile.practices[0].phones[0].number} <br>Accepts new patients? ${profile.practices[0].accepts_new_patients}`);
                }
            }, function(error) {
              $(".showErrors").text(`There was an error processing your request: ${error.message}`);

          });
        }
    });





  });


});
