function myKey(){
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  let list = document.getElementsByClassName("list");


  for(let i=0;i<list.length;i++){
    if(!list[i].innerHTML.toLowerCase().includes(input)){
      list[i].style.display = "none";
    }
    else{
      list[i].style.display = "list-item";
    }
  }
}