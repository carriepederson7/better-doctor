import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
      $("#health-info").submit(function(event) {
          event.preventDefault();
          const practice = $("#practice").val();
          let docFirstNames = [];
          console.log(docFirstNames);
          let docLastNames = [];
          console.log(docLastNames);


          $("#doc-search-button").click(function docSearch(){
            const firstName = $("#doctor-first-name").val();
            const lastName = $("#doctor-last-name").val();
            console.log(firstName);
            docFirstNames.forEach(function(docFirstName){
              if(docFirstName === firstName){
                $("#doctorSearch").text("One doctor matches your search.")
              }

            });
            docLastNames.forEach(function(docLastName){
              if(docLastName === lastName){
                $("#doctorSearch").text("One doctor matches your search.")
              }
            })

          })




          let info = new Info();
          let promise = info.conditions(name, practice)

          promise.then(function(response) {
              const body = JSON.parse(response);
              console.log(body);
              let profiles = body.data
              profiles.forEach(function(profile) {
                for (let i = 0; i < profile.specialties.length; i++) {
                  if (profile.specialties[i].actor === practice) {
                    $("#practiceSearch").append(`<li>${profile.profile.first_name} ${profile.profile.last_name}</li>`);
                    docFirstNames.push(`${profile.profile.first_name}`); docLastNames.push(`${profile.profile.last_name}`);
                    $("#practiceSearch").append(`${profile.practices[0].visit_address.street} , ${profile.practices[0].visit_address.city}, ${profile.practices[0].visit_address.state}, ${profile.practices[0].visit_address.zip},
                ${profile.practices[0].phones[0].number} <br>Accepts new patients? ${profile.practices[0].accepts_new_patients}`);
                  }
                }
              });

            });


              // docNames.forEach(function(docName) {
              //   if (docName === name) {
              //     alert("namefound");
              //     // $("#doctorSearch").append(`${profile.profile.first_name} ${profile.profile.last_name}`)
              //   }
              // });


          });
      });
