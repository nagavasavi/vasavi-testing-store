
let formData = {
    'items': [{
     'id': 47897907659025,
     'quantity': 2
     }]
   };
   
   fetch(window.Shopify.routes.root + 'cart/add.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   .then(response => {
     return response.json();
   }).then(json => {
    console.log(json);
   })
   .catch((error) => {
     console.error('Error:', error);
   });
   
   