// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    return [...cats, name];
  }

  function destructivelyAppendCat(name) {
    cats.push(name)
  }

  function prependCat(name) {
    return [name, ...cats]
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name)
  }

  function removeLastCat (){
    return cats.slice(0, -1);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function removeFirstCat (){
    return cats.slice(1);
  }

  function destructivelyRemoveFirstCat() {
    cats.shift(1);
  }
