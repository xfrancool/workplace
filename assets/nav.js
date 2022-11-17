const navT = [
  {
    id: 1,
  },
];

function Template(navT) {
  const name = "eric";
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
      <a class="dropdown-arrow" href="#">Material de estudio</a>
      <ul class="sub-menus">
        <li><a href="#">Tips</a></li>
        <li><a href="#">Notas</a></li>
        <li><a href="#">Calendario</a></li>
        <li><a href="#">Tareas</a></li>
        <li><a href="#">Videos</a></li>
       
      </ul>
    </li>
   
  </ul>
</nav> 
  `;
}

document.getElementById("navT").innerHTML = `
          
          ${navT.map(Template).join("")}
          
        `;
