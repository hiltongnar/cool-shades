var redShades = {
  title: "Red",
  img: 'images/product-red.png',
  price: 199
}
var greenShades = {
  title: "Green",
  img: 'images/product-green.jpg',
  price: 199
}
var blueShades = {
  title: "Blue",
  img: 'images/product-blue.jpg',
  price: 199
}
var blackShades = {
  title: "Black",
  img: 'images/product-black.jpg',
  price: 199
}
var shades = [redShades, greenShades, blueShades, blackShades];

function mobileProducts(product)  {
  return`
    <div class="col">
     <center>
       <img src="${product.img}" class="w-100">
       <p>${product.title}</p>
         
       <p>$${product.price+1}</p>
       <a class="btn" href="#">Add to cart</a>
     </center>
    </div>
`;
}


$(document).ready(function(){
  $('#mobile-products').html(mobileProducts( shades[0] ));

  $('.circle').click(function(){
    var index = $(this).data('index');

  $('#mobile-products').html(mobileProducts( shades[index] ));

  console.log(shades[index]);
  });

});

console.log(shades);
