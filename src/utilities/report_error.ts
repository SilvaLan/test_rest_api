export default function (error) {
  console.log('Ooops, unexpected things happened, Why? Fix It Now! ')
  if (error.response) {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log(error.message);
  }
  console.log(error.config);
}