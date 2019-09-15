
export class Info {
  conditions() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}


// getInfo2(){
//   return new Promise(function(resolve,reject){
//     let request = new XMLHttpRequest();
//     const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.apiKey}`;
//     request.onload = function(){
//       if (this.status === 200) {
//         resolve(request.response);
//       }else{
//         reject(Error(request.statusText));
//       }
//     }
//     request.open("GET", url, true);
//     request.send();
//   });
