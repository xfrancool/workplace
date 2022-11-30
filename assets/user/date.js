const std = [
  {
    id: 0,
    title: "Whatsapp Web",
    url: "https://web.whatsapp.com/%F0%9F%8C%90/es",
  },
  {
    id: 1,
    title: "Meet",
    url: "http://meet.google.com/igk-aquw-bkf",
  },
  {
    id: 2,
    title: "Way",
    url: "https://apex.wayfromhome.cx/",
  },
  {
    id: 3,
    title: "Trainer",
    url: "https://trainer.telecom.com.ar/",
  },
  {
    id: 4,
    title: "E-memo",
    url: "https://mail.apexamerica.com/",
  },
  {
    id: 5,
    title: "Base",
    url: "https://basedeconocimientos.custhelp.com/",
  },

  {
    id: 6,
    title: "Generar contraseña --> Tools",
    url: "https://password-generator96.netlify.app/",
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
