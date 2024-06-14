import { Link } from "react-router-dom";
import '../style/menu.css';
function Navbar() {
  return (
    <div className="Navbar">
      <header class="navbar sticky-top custom-navbar  flex-md-nowrap p-0 shadow"  data-bs-theme="dark">
      <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white text-center">Multigranos Bonanza</Link>

      <ul class="navbar-nav flex-row d-md-none">
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
          
          </button>
        </li>
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            Menu     
          </button>
        </li>
      </ul>

        <div id="navbarSearch" class="navbar-search w-100 collapse">
      
        </div>
     </header>

    </div>
  );
}
export default Navbar;
