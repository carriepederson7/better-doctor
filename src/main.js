import {Info} from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
  function medInfo() {
    let info = new Info();
    let promise = info.conditions()
    console.log(promise);
    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(body);
    }, function(error){
      $(".showErrors").text(`There was an error processing your request: ${error.message}`);
    });

}

medInfo();


});
