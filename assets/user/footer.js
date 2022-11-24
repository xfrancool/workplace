const footer = [
  {
    id: 1,
    urlsocial1: "https://react-portafolio16.netlify.app/",
    urlsocial2: "https://www.instagram.com/franco.ortega2/?hl=es",
    urlsocial3: "https://www.facebook.com/franco.ortega2/",
    urlsocial4: "https://www.linkedin.com/in/franco-ortega-9148b617a/",
    urlsocial5:
      "https://api.whatsapp.com/send?phone=+5493513532478&text=Hola, queria consultarte sobre un inconveniente con la página..",
  },
];

function Template(footer) {
  return `
  </p> &copy; Todos los derechos reservados
  <a href="${footer.urlsocial1}" id="website"  target="_blank"
    >Franeli</a
  >
</p>

<div class="social-links">
<a href="${footer.urlsocial2}"  target="_blank"
><i class="fab fa-instagram"></i
></a>
<a href="${footer.urlsocial3}"  target="_blank"
><i class="fab fa-facebook-f"></i
></a>
<a
href="${footer.urlsocial5}"  target="_blank"
><i class="fab fa-whatsapp" aria-hidden="true" id=""></i
></a> 
<a href="${footer.urlsocial4}"  target="_blank"
><i class="fab fa-linkedin" aria-hidden="true"></i></a>
</div>
 
`;
}

document.getElementById("apk").innerHTML = `
        
        ${footer.map(Template).join("")}
        
      `;
