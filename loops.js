function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      array.splice(1, 0, "I am 1 strange loop.");
    } else {
      array.splice(i, 0, `I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number){
  while(number > 0){
    console.log(number)
    number--
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (array.length > 0 || !maybeTrue());
    return array;
}
