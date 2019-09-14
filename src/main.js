import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {


//   $("health-info").submit(function(event) {
//     event.preventDefault();



    // let practice = $("#practice").val();
    // console.log(practice);
    // let name = $("#doctor-name").val();
    // console.log(name);

    function medInfo(practice,name) {
      let info = new Info();
      let promise = info.conditions()
      promise.then(function(response) {
        let body = JSON.parse(response);

        // let arrayLength = body.profile.length;
        // let profiles = body.data.profile;

        console.log(body);
        console.log(body.data[0].profile);
        console.log(body.data[1]);
        // console.log(profiles);



    }, function(error) {
      $(".showErrors").text(`There was an error processing your request: ${error.message}`);
    })
    }

  medInfo();
  });
// });





// medInfo();

//do an API call for doctors in the location, also have this handle doctor search by name, what type of doctors are you looking for


// run a forEach loop for is accepting new patients
