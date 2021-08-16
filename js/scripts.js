$(document).ready(function(){
 let list = [];
  $("#addItem").click(function(event){
    event.preventDefault();
    let groceryItem = $("input#groceryItem").val();
    list.push(groceryItem);
   const finalList = list.slice();
   finalList.sort();
   $("#finalList").text(finalList);
    finalList.toUppercase();
   });

});
