const request = require('request'); //request HTTP
const fs = require('fs'); // use file system

const url = process.argv[2]; // index at which the URL will go on the CLI
const filePath = process.argv[3]; // index at which the './html' will go on the CLI

request(url, (error, response, body) => {
  // Request the HTTP tp the URL we want
  // Use a callback function to handle the response.
  if (error) {
    console.error('Error: ', error); // If there was an error during the request, log an error message.
  } else if (response.statusCode !== 200) {
    console.error('This is an invalid URL: ', statuscode);
    // If the response status code is not 200, log an error message.
  } else {
    fs.writeFile(filePath, body, (error) => {
      // Write the response data (body) to the specified file path we select.
      // Use another call back function to handle the writing.

      if (error) {
        console.error('There was an error with the file: ', error);
        // Log any errors
      } else {
        const fileSize = Buffer.byteLength(body);
        // Use this to calculate the size of the file to get the number of bytes in the data.

        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        // Log the successful message upon completion.
      }
    });
  }
});