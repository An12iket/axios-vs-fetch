const axios = require('axios');

// // Using axios to fetch todos
async function main() {
  try {
    const response = await axios.get('https://dummyapi.online/api/todos');
    const datas = response.data; // Data is already parsed as JSON
    console.log(datas);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

main();


// fetch
async function main(){
try {
  const reponse = await fetch('https://dummyapi.online/api/todos')
  const data = await reponse.json()
  console.log(data)
} catch (error){
  console.error('Error fetching data:', error)
}
}
main();
