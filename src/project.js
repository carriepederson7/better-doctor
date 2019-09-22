
export class Info {
  conditions() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url =`https://api.betterdoctor.com/2016-03-01/doctors?&location=45.5051%2C-122.6750%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=${process.env.exports.apiKey}`

      // const url =`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&specialty_uid=${practice}&location=45.5051%2C-122.6750%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=${process.env.exports.apiKey}`

      // const url =`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5051%2C-122.6750%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=${process.env.exports.apiKey}`


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
