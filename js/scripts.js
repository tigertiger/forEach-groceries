$(document).ready(function(){
  let list = [];
  console.log(list);
  console.log("hello??");
  $("#addItem").click(function(event){
    event.preventDefault();
    let groceryItem = $("input#groceryItem").val();
    list.push(groceryItem);
    console.log(list);
   $("#listProgress").text(list); 
  });
  

});





// $(document).ready(function(){
  //   $("#favoriteList").click(function(){
  // const favIceCream = ["Chocolate", "Vanilla", "Peppermint", "Cotton candy"];
  // console.log(favIceCream);

  // let favFood = $("input#favFood").val();
  // let favMusic = $("input#favMusic").val();
  // let favHair = $("input#favHair").val();
  // let favThings = [];
  // let reverseFavs = [];
  //   favThings.push(favFood);
  //   favThings.push(favMusic);
  //   favThings.push(favHair);
  //   favThings.push("Chicken");