const API_URL = "http://random-quote.hyobb.com";
const qouteElement = document.getElementById("quote");

const getQoute = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    console.log(data);
    const result = data[1].respond;
    console.log(result);
  } catch (err) {
    console.log();
  }
};

getQoute();
