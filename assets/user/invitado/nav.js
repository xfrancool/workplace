const navT = [
  {
    id: 1,
  },
];

function Template(navT) {
  const name = "invitado";
  return `
  <nav id="menu">
  <input
    type="checkbox"
    id="responsive-menu"
    onclick="updatemenu()"
  /><label></label>
  <ul>
    
    <li>
      <a  href="${name}.html">Inicio</a>
      
    </li>

    

    <li>
      <a  href="../../../index.html">Cerrar Sesión 🔐</a>
      
    </li>
   
  </ul>
</nav> 
  `;
}

document.getElementById("navT").innerHTML = `
          
          ${navT.map(Template).join("")}
          
        `;
