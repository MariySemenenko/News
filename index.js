
// const KEY = '862dd5d592264690b4379c4e02f8834a';
// // 1) base utl(https://newsapi.org)
// // 2) resourse(v2/top-headlines)
// // 3) params(country=us&apiKey)
// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)+;
// })
// .catch((error) => {
//     console.log(error);
// } );

//-----------------------------------//


// get info with backend https://newsapi.org/sources

const list = document.querySelector('.list');
const KEY = '862dd5d592264690b4379c4e02f8834a';
const BASA_URL = 'https://newsapi.org/v2/';
const URL = `${BASA_URL}top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=10`;
fetch(URL)
.then((response) => response.json())
.then((data) => {
   // console.log('data', data);
   insertContent(data.articles);})
.catch((error) => {
    console.log('error', error)});


const createlistitem = (item) => `
<li>
${item.urlToImage ? `<img src='${item.urlToImage}'alt='${item.description}'>` : ''} //якщо не має картинки
<h2>'${item.title}'</h2>
<p>'${item.description ? item.description : ''}'</p>
<p>'${item.author ?? ''}'</p>
<a href='${item.url}' target='_blank'>Read more</a>
</li>`;

const generateContent = (array) => 
array?.reduce((acc, item) => acc + createlistitem(item), ''); //(array?) якщо прилітає масив то use reduce

const insertContent = (array) => {
    const result = generateContent(array);
    list.insertAdjacentHTML('beforeend', result)
}
//---------------------------------------------------//
// // or
// //destructurisation

// const list = document.querySelector('.list');
// const KEY = '862dd5d592264690b4379c4e02f8834a';
// const BASA_URL = 'https://newsapi.org/v2/';
// const URL = `
// ${BASA_URL}top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=10
// `;
// fetch(URL)
// .then((response) => response.json())
// .then((data) => {
//    // console.log('data', data);
//    insertContent(data.articles);
// })
// .catch((error) => {
//     console.log('error', error)
// });


// const creatrlistitem = ({ urlToImage, title, description, author, url }) => `
// <li>
// ${urlToImage ? `<img src='${urlToImage}'alt='${description}'>` : ''} //якщо не має картинки

// <h2>'${title}'</h2>
// <p>'${description ? description : ''}'</p>
// <p>'${author ?? ''}'</p>
// <a href='${url}' target='_blank'>Read more</a>
// </li>`;

// const generatecontent = (array) => 
// array.reduce((acc, item) => acc + creatrlistitem(item), '');

// const insertContent = (array) => {
//     const result = generatecontent(array);
//     list.insertAdjacentHTML('beforeend', result)
// }