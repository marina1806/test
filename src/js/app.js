const icon = new Vivus(
  'my-svg-icon',
  {
    type: 'sync',
    duration: 700,
  },
);

function injectSelect (sel, rowsObject) {
  let opt, x;
  sel.innerHTML = "";
  for (x in rowsObject) {
      opt = document.createElement("option");
      opt.value = x;
      opt.innerHTML = rowsObject[x];
      sel.appendChild(opt);
  }
}
function makeNumbersObject (from, to) {
  let result = {}, x;
  if(from > to) { // Если from меньше to, поменять их значения друг на друга.
      var z = from;
      from = to;
      to = z;
  }
  for (x = from; x <= to; x++) {
      result[x] = x;
  }
  return result;
}

injectSelect(document.getElementById("months"), {
    jan:"January", feb:"February", mar:"March", apr:"April", 
    may:"May", jun:"June", jul:"July", avg:"August", 
    sep:"September", okt:"October", nov:"November", dec:"December"
}); // Наполняем месяца
injectSelect(document.getElementById("years"), makeNumbersObject(1920, 2020));
injectSelect(document.getElementById("days"), makeNumbersObject(1, 31));


  