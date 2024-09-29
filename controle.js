function searchbar() {
  document.getElementById("search").style.visibility = "visible";
}
function description1() {
  document.getElementById("td1").style.visibility = "visible";
}

function description2() {
  document.getElementById("td2").style.visibility = "visible";
}

function description3() {
  document.getElementById("td3").style.visibility = "visible";
}

function description4() {
  document.getElementById("td4").style.visibility = "visible";
}
const list1 = [
  {
    url: "iphone.jpg",
    date: new Date("2024-06-08"),
    title: "Iphone 15 Pro Max",
    price: "1200",
    popularity: "326",
    description: "Price : 1200$ Popularity : 326 purchases Date : 08/06/2024",
  },
  {
    url: "ecran.jpg",
    date: new Date("2024-08-09"),
    title: "Ecran Gaming",
    price: "250",
    popularity: "220",
    description: "Price : 250$ Popularity : 220 purchases Date : 09/08/2024",
  },
  {
    url: "macbook.jpg",
    date: new Date("2024-10-12"),
    title: "Macbook Pro",
    price: "3999",
    popularity: "187",
    description: "Price : 3999$ Popularity : 187 purchases Date : 12/10/2024",
  },
  {
    url: "watch.jpeg",
    date: new Date("2024-10-24"),
    title: "Apple Watch",
    price: "150",
    popularity: "450",
    description: "Price : 150$ Popularity : 450 purchases Date : 24/10/2024",
  },
];
const list2 = [
  {
    url: "coat.jpg",
    date: new Date("2024-06-11"),
    title: "Brown Coat",
    price: "120",
    popularity: "126",
    description: "Price : 120$ Popularity : 126 purchases Date : 11/06/2024",
  },
  {
    url: "tshirt.jpg",
    date: new Date("2023-08-15"),
    title: "Black T-shirt",
    price: "50",
    popularity: "200",
    description: "Price : 50$ Popularity : 200 purchases Date : 15/08/2023",
  },
  {
    url: "jean.jpg",
    date: new Date("2024-10-12"),
    title: "Black Baggy Jean",
    price: "90",
    popularity: "187",
    description: "Price : 90$ Popularity : 187 purchases Date : 12/10/2024",
  },
  {
    url: "hoodie.jpg",
    date: new Date("2022/05/04"),
    title: "Hoodie",
    price: "87.9",
    popularity: "90",
    description: "Price : 87.9$ Popularity : 90 purchases Date : 04/05/2022",
  },
];
function sort() {
  if (document.getElementById("date").ischecked == true) {
    sortdate();
  } else {
    if (document.getElementById("price").ischecked) {
      sortprice();
    } else {
      if (document.getElementById("popularity").ischecked) {
        sortpopularity();
      } else {
        alert("choose a sort type!");
      }
    }
  }
}
function sortdate(list1,list2) {
  document.getElementById("table").style.visibility="hidden"
  list1.sort((a,b) =>a.date - b.date)
  list2.sort((a,b) =>a.date - b.date)
}
