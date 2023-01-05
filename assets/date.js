const std = [
  {
    id: 0,
    title: "Whatsapp Web",
    url: "https://web.whatsapp.com/%F0%9F%8C%90/es",
  },

  {
    id: 2,
    title: "Way",
    url: "https://apex.wayfromhome.cx/",
  },
  {
    id: 3,
    title: "E-mail Apex",
    url: "https://mail.apexamerica.com/",
  },
  /* {
    id: 4,
    title: "Base",
    url: "https://basedeconocimientos.custhelp.com/",
  }, */
  {
    id: 5,
    title: "Trainer",
    url: "https://trainer.telecom.com.ar/",
  },
  {
    id: 6,
    title: "Diagramas --> Tools",
    url: "https://app.diagrams.net/",
  },
  {
    id: 7,
    title: "Notion --> Tools",
    url: "https://www.notion.so/",
  },
  {
    id: 9,
    title: "Mecanografía",
    url: "https://10fastfingers.com/typing-test/spanish",
  },
  {
    id: 8,
    title: "Generar contraseña --> Tools",
    url: "https://password-generator96.netlify.app/",
  },
  {
    id: 9,
    title: "Tabulaciones",
    url: "https://tabulaciones.netlify.app/",
  },
  {
    id: 10,
    title: "Calc. Wondersoft",
    url: "https://generar-planilla2.netlify.app/",
  },
  {
    id: 11,
    title: "Drive",
    url: "https://drive.google.com/drive/folders/1hhpyZakZxtsl5DyqSlVIN7VMxkIYQFhk?usp=sharing",
  },
];

function Template(std) {
  return `
 



  <div class="card animate__animated animate__pulse animate__delay-4s" id="">
  <div class="textcard">
    <p class="parrafocard">
    <h3>${std.title}</h3>
    <a href="${std.url}" target="_blank">
      <button class="learn-more" id="btn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Click aquí</span>
      </button>
    </a>
    </p>
  </div>
</div>
    
    
      `;
}

document.getElementById("std").innerHTML = `
              
              ${std.map(Template).join("")}
              
            `;
