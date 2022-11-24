const data = [
  {
    clase: "Syntact - Ego",
    estudio: "",
    frame: "https://www.youtube.com/embed/sDfF2aj8L-4",
    gif: "",
    mes: "",
  },
  {
    clase: "Am I Wrong - Nico & Vinz ",
    estudio: "",
    frame: "https://www.youtube.com/embed/gRD_hmtLROE",
    gif: "",
    mes: "",
  },
  {
    clase: "Cartoon - Why We Lose ",
    estudio: "",
    frame: "https://www.youtube.com/embed/zyXmsVwZqX4",
    gif: "",
    mes: "",
  },
  {
    clase: "Janji - Heroes Tonigh",
    estudio: "",
    frame: "https://www.youtube.com/embed/3nQNiWdeH2Q",
    gif: "",
    mes: "",
  },
  {
    clase: "Unknown Brain - Superhero",
    estudio: "",
    frame: "https://www.youtube.com/embed/LHvYrn3FAgI",
    gif: "",
    mes: "",
  },

  {
    clase: "Diviners - Savannah",
    estudio: "",
    frame: "https://www.youtube.com/embed/u1I9ITfzqFs",
    gif: "",
    mes: "",
  },

  {
    clase: "Syn Cole - Feel Good",
    estudio: "",
    frame: "https://www.youtube.com/embed/q1ULJ92aldE",
    gif: "",
    mes: "",
  },
];

function Template(data) {
  return `
  <div class="textcard">

  <p class="parrafocard">
  <h3>${data.clase} ${data.mes}</h3>
  
</p>

<h3 class="cap">




         

           <iframe id="iframecard"
           
           height="230"
           src="${data.frame}"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
           >
           </iframe>




<h4 class="cap">



</h4>
</div>
`;
}

document.getElementById("date").innerHTML = `
        
        ${data.map(Template).join("")}
      `;
