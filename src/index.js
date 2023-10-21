const url = 'https://poli-back.onrender.com/api/goods';
const body = document.querySelector('body');

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const result = data;
console.log(result)
    render(result)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function render(result) {
  const markup = result.map(({ name, title, photo, }) => {
    return `
    <h1>${name}</h1>
    <H2>${title}</H2>
    <img width =300 height= 300 src=${photo} alt='photo product'</img>
    `;

  }).join('');
  body.innerHTML = markup;

  const colorsItems = result[0];
  const colors = colorsItems.product.enamel.colors.map(({name, color, price}) => {
    return `
    <h3>color: ${name}</h3>
    <h3>price: ${price}</h3>
    <div style= "width :200px; height:100px; background: ${color}"></div>
    `;
   }).join('');
  body.insertAdjacentHTML("beforeend" , colors)
}

