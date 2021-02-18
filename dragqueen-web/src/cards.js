//drag queen db

const dragQueens = [
    {  id: 1,
       name: "Ongina",
       season: 1,
       Instagram: "@ongina",
       image: "../db/bw/ongina.jpg",
   
   },
   {  id: 2,
       name: "Jujubee",
       season: 2,
       Instagram: "@jujubeeonline",
       instagramAddress: "https://instagram.com/jujubeeonline ",
       image: "../db/bw/juju.jpg",
       description:"she is a drag queen",
   },
   {  id: 3,
       name: "Alexis Mateo",
       season: 3,
       Instagram: "@miss_alexis_mateo",
       instagramAddress: "https://instagram.com/miss_alexis_mateo ",
       image: "../db/bw/alexis.jpg",
       description:"she is a drag queen", 
   },
   {  id: 4,
       name: "Manila Luzon",
       season: 3,
       Instagram: "@manilaluzon",
       instagramAddress: "https://instagram.com/manilaluzon ",
       image: "https://i.pinimg.com/564x/f3/77/0b/f3770b21fc070e13f8b3c109f3953361.jpg",
       description:"she is a drag queen",
   },
   {  id: 5,
       name: "Alyssa Edwards",
       season: 5,
       Instagram: "@alyssaedwards_1",
       instagramAddress: "https://instagram.com/alyssaedwards_1 ",
       image: "https://i.pinimg.com/564x/3e/e5/5a/3ee55abf92454b3ce6213ed304f2a5e2.jpg",
       description:"she is a drag queen",
   },
   {  id: 6,
       name: "Detox",
       season: 5,
       Instagram: "@theonlydetox",
       instagramAddress: "https://instagram.com/theonlydetox ",
       image: "https://i.pinimg.com/564x/c5/e8/df/c5e8df08a7276e79302a80f8e3543062.jpg",
       description:"she is a drag queen",
   },
   {  id: 7,
       name: "BenDeLaCreme",
       season: 6,
       Instagram: "@bendelacreme",
       instagramAddress: "https://instagram.com/bendelacreme ",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0U_QOBANoTRfqYBhdl5s1tNyQkT1diLF10A&usqp=CAU",
       description:"she is a drag queen",
   },
   {  id: 8,
       name: "Adore Delano",
       season: 6,
       Instagram: "@adoredelano",
       instagramAddress: "https://instagram.com/adoredelano ",
       image: "https://i.pinimg.com/564x/5e/5f/06/5e5f06642ca5e9a6452b6ebc7393c3af.jpg",
       description:"she is a drag queen", 
   },
   {  id: 9,
       name: "Katya",
       season: 7,
       Instagram: "@katya_zamo",
       instagramAddress: "https://instagram.com/katya_zamo ",
       image:"https://i.pinimg.com/564x/a7/4c/6e/a74c6edc33b7955fd7b49b5c426979ba.jpg",
       description:"she is a drag queen",
   },
   {  id: 10,
       name: "Violet Chachki",
       season: 7,
       Instagram: "@violetchachki",
       instagramAddress: "https://instagram.com/violetchachki ",
       image: "https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTUxMzk4OTgwOTY4Nzg1MTUx/bettie-page-lingerie-violet-chachki.png",
       description:"she is a drag queen",
   },
   {  id: 11,
       name: "Valentina",
       season: 9,
       Instagram: "@allaboutvalentina",
       instagramAddress: "https://instagram.com/allaboutvalentina ",
       image: "https://i.pinimg.com/564x/e5/4b/da/e54bda6d7d603b07fdb357965fcc1a6c.jpg",
       description:"she is a drag queen"
   },
   {  id: 12,
       name: "Sasha Velour",
       season: 9,
       Instagram: "@sashavelour",
       instagramAddress: "https://instagram.com/sashavelour ",
       image: "https://i.pinimg.com/564x/00/49/81/004981666b1a81996044ba8b44977305.jpg",
       description:"she is a drag queen"
   },
   {  id: 13,
       name: "Miz Cracker",
       season: 10,
       Instagram: "@miz_cracker",
       instagramAddress: "https://instagram.com/miz_cracker ",
       image: "https://i.pinimg.com/564x/12/93/4d/12934dabfc1022aa79d54927268de3d2.jpg",
       description:"she is a drag queen"
   },
   {  id: 14,
       name: "Scarlet Bobo",
       season: "Canada season 1",
       Instagram: "@itsscarlettbobo",
       instagramAddress: "https://instagram.com/itsscarlettbobo ",
       image:"https://i.pinimg.com/564x/25/7d/2a/257d2aff616c7910c6349b30d86cfb8c.jpg",
       description:"she is a drag queen"
   },
   {  id: 15,
       name: "Crystal Methyd",
       season: 12,
       Instagram: "@crystalmethyd",
       instagramAddress: "https://instagram.com/crystalmethyd ",
       image:"https://i.pinimg.com/564x/cc/54/9e/cc549ee926b209a3974daf554c678be0.jpg",
       description:"she is a drag queen"
   },
   {  id: 16,
       name: "Aiden Zhane",
       season: 12,
       Instagram: "@aidenzhane",
       instagramAddress: "https://instagram.com/aidenzhane",
       image:"https://i.pinimg.com/564x/78/45/c1/7845c13f956cfa77bd40725129a3a5cb.jpg",
       description:"she is a drag queen"
   }
   ]

const container = document.querySelector("main");
const image = document.getElementById("image");


//color collections

const red = ["../db/red/adore.jpg", "../db/red/aiden.jpg", "../db/red/alexis.jpg", 
"../db/red/alyssa.jpg", "../db/red/bendela.jpg", "../db/red/cracker.jpg",
"../db/red/detox.jpg", "../db/red/juju.jpg", "../db/red/katya.jpg", 
"../db/red/manila.jpg", "../db/red/ongina.jpg", "../db/red/sasha.jpg", "../db/red/scarlett.jpg",
"../db/red/valentina.jpg", "../db/red/violet.jpg"];



//colorPicker

const colorRed = () => {
    document.body.style.background = 'red';
    let red = document.getElementById("color");
    red.innerHTML = "RED";
    red.style.color="firebrick";
};
const colorGreen = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(39,103,54,1) 30%, rgba(122,189,130,1) 69%)';
    let green = document.getElementById("color");
    green.innerHTML = "GREEN";
    green.style.color = "seagreen";

};
const colorYellow = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(103,95,39,1) 30%, rgba(189,188,122,1) 69%)';
    let yellow = document.getElementById("color");
    yellow.innerHTML = "YELLOW";
    yellow.style.color = "khaki";
};
const colorBlue = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(39,44,103,1) 30%, rgba(122,157,189,1) 69%)';
    let blue = document.getElementById("color");
    blue.innerHTML = "BLUE";
    blue.style.color = "royalblue";

};

//card

for (dragQueen of dragQueens) {
    //variables
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    const bodyDiv = document.createElement("div");
    const titleNode = document.createElement("h5");
    const subtitleNode = document.createElement("h6");
    const image = document.createElement("img");

    //create the card
    bodyDiv.appendChild(image);
    mainDiv.className = "card";
    mainDiv.style="width: 18rem;";
    mainDiv.id="main-div";
    bodyDiv.className="card-body";
    bodyDiv.id="body-div";
    mainDiv.appendChild(bodyDiv);
    bodyDiv.appendChild(titleNode);
    bodyDiv.appendChild(subtitleNode);
    titleNode.innerHTML = dragQueen.name;
    titleNode.className="card-title";
    image.id="image";
    image.src=dragQueen.image;
    image.className="card-img-top";
    image.setAttribute("alt","drag queen");
    image.setAttribute("width", "200px");
    subtitleNode.innerHTML = dragQueen.season;
    subtitleNode.className = "card-subtitle mb-2 text-muted";
}
