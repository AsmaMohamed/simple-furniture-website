


var products = {
  Chair1: {
    tags: 'Chair',
    url: 'images/new_product_img_2.png',
    price: 100
    },
    coffe1: {
    tags: 'Coffe',
    url: 'images/co1.jpg',
    price: 400
    }
    ,
  bed: {
    tags: 'bed',
    url: 'images/bad.jpg',
    price: 120
    },
     Chair2: {
    tags: 'Chair',
    url: 'images/new_product_img_1.png',
    price: 100
    },
         dining2: {
    tags: 'dining',
    url: 'images/d1.jpg',
    price: 400
    }
    ,
    Chair3: {
    tags: 'Chair',
    url: 'images/new_product_img_4.png',
    price: 100
    },
      coffe2: {
    tags: 'Coffe',
    url: 'images/co2.jpg',
    price: 400
    }
    ,
    sofa2: {
    tags: 'Sofa',
    url: 'images/sofa11.jpg',
    price: 100
    },
  
      Decore1: {
    tags: 'Decore',
    url: 'images/l1.jpg',
    price: 400
    },
      dining1: {
    tags: 'dining',
    url: 'images/d3.jpg',
    price: 400
    }
    ,

sofa: {
    tags: 'Sofa',
    url: 'images/new_product_img_3.png',
    price: 120
    },
       Decore2: {
    tags: 'Decore',
    url: 'images/l2.jpg',
    price: 400
    },
          dining88: {
    tags: 'dining',
    url: 'images/d4.jpg',
    price: 400
    },
  
}
// var finalHtml = "";
// for (var item in products) {
// //   finalHtml += '<li><a href="' + products[item].url + '">' + item + '<\/a> <br \/>Tags: ' + products[item].tags + '<br \/>Price: ' + products[item].price + ' $</li>';
//    finalHtml += '<li class="card"><img src="' + products[item].url + '">'+ item + '<br \/>Tags: ' + products[item].tags + '<br \/>Price: ' + products[item].price + '$'+'<p><button>Add to Cart</button></p></li>';
//     // finalHTML += `<li class="card">
//     //                 <img src="${products[item].url}"\>
//     //                 <h3>${products[item].tags}</h3>
//     //                 <p class="price">${products[item].price}</p>
//     //                 <p><button>Add to Cart</button></p>
//     //             </li>`;
// }
// document.getElementById("products").innerHTML = finalHtml;
// document.getElementById("products").appendChild = finalHtml;
function displayALL() {
    var finalHtml = "";
    for (var item in products) {
    
        finalHtml += '<div class="new-product-item"><img class="image" src="' + products[item].url + '">' + item + '<br \/>Tags: ' + products[item].tags + '<br \/>Price: ' + products[item].price + '$ <br \/> ' + '<button>Add to Cart</button>'+'</div>';
    }
    document.getElementById("test").innerHTML = finalHtml;
  
}
 var ALLUsers = document.getElementById("ALLUsers");
ALLUsers.addEventListener("click", displayALL);

function display(cat) {
    console.log("in Display");
    var finalHtml = "";
    for (var item in products) {
    
        if (products[item].tags == cat) {
        // finalHtml += '<div class="card" style="list-style:none;"><img src="' + products[item].url + '">' + item + '<br \/>Tags: ' + products[item].tags + '<br \/>Price: ' + products[item].price + '$' + '<button>Add to Cart</button><</div>';
        finalHtml += '<div class="new-product-item"><img class="image" src="' + products[item].url + '">' + item + '<br \/>Tags: ' + products[item].tags + '<br \/>Price: ' + products[item].price + '$ <br \/> ' + '<button>Add to Cart</button>'+'</div>';
            
        }


    }

document.getElementById("test").innerHTML = finalHtml;
}


var showCh = document.getElementById("showCh");
showCh.addEventListener('click', function (e) {
    var cat = e.target.value;
    if (cat) {
        display(cat);
    }
  
});


