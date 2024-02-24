import faker from 'faker'

// let products = '';
// for(let i=0;i<3;i++) {
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`
// }


// document.querySelector('#dev-products').innerHTML = products;

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
//   document.querySelector("#dev-products").innerHTML = products;
}; 

//Context/Situation #1
//we are running this file in development in isolation
//we are using local index.html file
//which definitely has an element with an id of 'dev-product'
//we want to immediately render out app into that element 
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')
    //assuming out container doesnt have an element with id 'dev-products'
    if(el) {
        //we are probably running in isolation
        mount(el);
    }
}


//Context/Situation #2
//we are running this file in dev/production through container app
//no gaurantee that an element with an id of 'dev-products' exists.
//we dont want to try to immediately render the app

export {mount}