function myFunction() {
  // Declare variables
  let input, filter, plante[5], plante_nume[5], a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  for (i = 0; i < 6; i++) plante[i] = document.getElementById(`plant${i}`);
  for (i = 0; i < 6; i++)
    plante_nume[i] = document.getElementById(`plante_nume${i}`);
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < plante.length; i++) {
    a = plante_nume.getElementById("")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      plante[i].style.display = "";
    } else {
      plante[i].style.display = "none";
    }
  }
}
