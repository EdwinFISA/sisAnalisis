import { Link } from "react-router-dom";

import '../style/main.css';
import '../style/menu.css';



function Menu() { 

    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 menuContainerSuperior" style={{ backgroundColor: '#3677be' }}>
              <div class="offcanvas-md offcanvas-end  " style={{ backgroundColor: '#3677be' }} tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div  class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto " >
                <nav className="nav flex-column custom-nav">
             
                    <div class="accordion" id="accordionExample" style={{ backgroundColor: '#3677be' }}>
                      <div className="accordion-item" >
                          <h2 class="accordion-header">
                              <button className="accordion-button btn-superior " type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse" aria-expanded="true" aria-controls="comprasCollapse">
                                  <i class="fa-solid fa-cart-shopping"></i>
                                  <label for="" >Compras</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a href="#">Nueva Compra</a><br></br>
                                  <a href="#">Compras Realizadas</a><br></br>
                                  <a href="#">Buscar compras</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                        <h2 class="accordion-header">
                            <button class="accordion-button btn-superior collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse2" aria-expanded="false" aria-controls="comprasCollapse2">
                                <i class="fa-regular fa-money-bill-1"></i>
                                <label for="">Ventas</label>
                            </button>
                        </h2>
                        <div id="comprasCollapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <a href="#">Nueva/Crear Venta</a><br></br>
                                <a href="#">Ventas Realizadas</a><br></br>
                                <a href="#">Buscar ventas</a><br></br>
                            </div>
                        </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse3" aria-expanded="false" aria-controls="comprasCollapse3">
                                  <i class="fa-solid fa-users"></i>
                                  <label for="">Clientes</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a  href="#" >Nuevo Cliente</a><br></br>
                                  <a  href="#" >Clientes Registrados</a><br></br>
                                  <a  href="#" >Buscar clientes</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse4" aria-expanded="false" aria-controls="comprasCollapse4">
                                  <i class="fa-solid fa-box"></i>
                                  <label for="">Productos</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a href="#">Nuevo Producto</a><br></br>
                                  <a href="#">Producto Registrado</a><br></br>
                                  <a href="#">Buscar Productos</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse5" aria-expanded="false" aria-controls="comprasCollapse5">
                                  <i class="fa-solid fa-rotate-left"></i>
                                  <label for="">Devoluciones</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a  href="#">Nueva Devolución</a><br></br>
                                  <a  href="#">Lista Devolución </a><br></br>
                                  <a  href="#">Buscar Devolución</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse6" aria-expanded="false" aria-controls="comprasCollapse6">
                                  <i class="fa-regular fa-copy"></i>
                                  <label for="">Reporte</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a  href="#">Reportes usuarios </a><br></br>
                                  <a  href="#">Reportes de bajas </a><br></br>
                                  <a  href="#">Buscar reportes </a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse7" aria-expanded="false" aria-controls="comprasCollapse7">
                                  <i class="fa-solid fa-file-signature"></i>
                                  <label for="">Kardex</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse7" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a href="#">Nuevo Kardex</a><br></br>
                                  <a href="#">Kardex Registrados</a><br></br>
                                  <a href="#">Buscar kardex</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse8" aria-expanded="false" aria-controls="comprasCollapse8">
                                  <i class="fa-solid fa-user-pen"></i>
                                  <label for="">Inventario</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse8" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a  href="#">Inventario general</a><br></br>
                                  <a  href="#">Ingresos/Salida</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse9" aria-expanded="false" aria-controls="comprasCollapse9">
                                  <i class="fa-solid fa-users"></i>
                                  <label for="">Proveedores</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse9" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a className="colorLabel"  href="#">Nuevo Proveedor</a><br></br>
                                  <a className="colorLabel"  href="#">Lista Proveedor</a><br></br>
                                  <a className="colorLabel"  href="#">Buscar proveedor</a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse11" aria-expanded="false" aria-controls="comprasCollapse11">
                                  <i class="fa-solid fa-user"></i>
                                  <label for="">Usuario</label>
                              </button>
                          </h2>
                          <div id="comprasCollapse11" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                             
                                  <Link to="/post_get"> Crear usuario</Link><br></br>
                                  <Link to="/UserTable">Listar usuarios </Link><br></br>
                                  <a className="colorLabel"  href="#">Buscar Persona    </a><br></br>
                              </div>
                          </div>
                      </div>
                      <div class="accordion-item fondo">
                          <h2 class="accordion-header">
                              <button class="accordion-button btn-superior collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comprasCollapse10" aria-expanded="false" aria-controls="comprasCollapse10">
                                  <i class="fa-regular fa-circle-user"></i>
                                  <label for="">Edwin</label>
                                  
                              </button>
                          </h2>
                          <div id="comprasCollapse10" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <a href="#">Mi Perfil</a><br></br>
                                  <a href="#">Configuracion</a><br></br>
                                  <a href="#">Cerrar Sesion</a><br></br>
                              </div>
                          </div>
                      </div>
                    </div>

                    </nav>
                </div>
              </div>
          </div>
    );
  }

  export default Menu;
