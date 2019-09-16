import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';




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
      // let output = "";
      promise.then(function(response) {
        const body = JSON.parse(response);
        console.log(body);
        let profiles = body.data
        profiles.forEach(function(profile) {
          for (let i = 0; i < profile.specialties.length; i++) {
            if (profile.specialties[i].actor === practice) {
              $("#practiceSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
              $("#practiceSearch").append(`${profile.practices[0].visit_address.street} , ${profile.practices[0].visit_address.city}, ${profile.practices[0].visit_address.state}, ${profile.practices[0].visit_address.zip},
                ${profile.practices[0].phones[0].number} <br>Accepts new patients? ${profile.practices[0].accepts_new_patients}`);
            }
            // }else{
            //   $("#practiceSearch").text("Sorry, no doctors match your search.");
            // }

          }
        });

        profiles.forEach(function(profile) {
          if (profile.profile.first_name === name || profile.profile.last_name === name) {
            $("#doctorSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
            $("#doctorSearch").append(`${profile.practices[0].visit_address.street} , ${profile.practices[0].visit_address.city}, ${profile.practices[0].visit_address.state}, ${profile.practices[0].visit_address.zip}, ${profile.practices[0].phones[0].number} <br>Accepts new patients? ${profile.practices[0].accepts_new_patients}`);
          }

          //   else{
          //     let output =$("#doctorSearch").text("Sorry, no doctors match your search.");
          //     return output[0]
          //
          // }
        });



      });

    }


  });
});
