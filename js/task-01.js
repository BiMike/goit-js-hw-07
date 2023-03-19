const listaKategorii = document.querySelector("#categories");
const kategorie = listaKategorii.querySelectorAll(".item");
// console.log(listaKategorii);
// console.log(kategorie);

console.log(`Liczba kategorii: ${kategorie.length}\n`);

kategorie.forEach((element) => {
  const nazwaKategorii = element.querySelector("h2").textContent;
  const liczbaElementow = element.querySelectorAll("li").length;

  //   console.log(nazwaKategorii);
  //   console.log(liczbaElementow);
  console.log(`Kategoria: ${nazwaKategorii}\nElementy: ${liczbaElementow}\n`);
});
