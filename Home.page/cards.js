// let http = new XMLHttpRequest();
// http.open('get', 'products.json', true);
// http.send();
// http.onload = function(){
//    if(this.readyState == 4 && this.status == 200){
//       let products = JSON.parse(this.responseText);
//       let output = "";
//       for(let item of products){
//          output += `             
//   <div class="products">
//   <div class="col-md-4 col-sm-6">
//   <div class="container">
//       <div class="card">
//           <div class="img-box">
//               <img src="${item.image}">
//           </div>
//           <div class="content">
//               <div class="img-text">
//               <h2>${item.title}<br></h2>
//               <p>${item.description}</p>
//                <div class="button-1" id="button-2">
//                 <div id="slide"></div>
//                 <a href="#">Reed more</a>
//               </div>
//           </div>
//           </div>
//       </div>
//       </div>
//   </div>
// </div>
//          `;
//         }
//         output = `<div class="container">${output}</div>`;
//         document.querySelector(".products").innerHTML = output;
//    }
// }
