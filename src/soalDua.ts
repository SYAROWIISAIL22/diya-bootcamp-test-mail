let nomer = "00-44 48 5555 8361";
let saveNomer = "";
let desh = 3;
for (let j = 0; j < nomer.length; j++) {
  if (nomer[j] !== " " && nomer[j] !== "-") {
    saveNomer += nomer[j];
    if (saveNomer.length === desh) {
      saveNomer += "-";
      desh += 3;
      console.log(desh);
    }
  }
}
console.log(saveNomer);
