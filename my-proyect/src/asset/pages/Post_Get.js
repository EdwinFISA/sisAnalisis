import React, { useState, Fragment, useEffect } from "react";
import { FaTrashAlt,FaEdit,FaUser,FaSignInAlt } from 'react-icons/fa';
import axios from "axios";
import Swal from 'sweetalert2'


function BookCreate() {
  
  const [load, setLoad ] = useState(true);

  const [formBook, setFormBook] = useState({
    nombre:"",
    apellido:"",
    nit:"",
    telefono:"",
    direccion:"",
    usuario:"",
    contrasenia:"",
    rol:"",
    estado:"",
  });

  const [errors, setErrors] = useState({
    nombre:"",
    apellido:"",
    nit:"",
    telefono:"",
    direccion:"",
    usuario:"",
    contrasenia:"",
    rol:"",
    estado:"",
  });

  const validate = () => {
    let isValid = true;

    const nuevosErrores = {
      nombre:"",
      apellido:"",
      nit:"",
      telefono:"",
      direccion:"",
      usuario:"",
      contrasenia:"",
      rol:"",
      estado:"",
    };

    if (formBook.nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es requerido";
      isValid = false;
    }
    if (formBook.apellido.trim() === "") {
      nuevosErrores.apellido = "El apellido es requerido";
      isValid = false;
    }
    if (formBook.nit.trim() === "") {
      nuevosErrores.nit = "El nit es requerido";
      isValid = false;
    }
    if (formBook.telefono.trim() === "") {
      nuevosErrores.telefono = "El numero de telefono es requerido";
      isValid = false;
    }
    if (formBook.direccion.trim() === "") {
      nuevosErrores.direccion = "El direccion es requerido";
      isValid = false;
    }
    if (formBook.usuario.trim() === "") {
      nuevosErrores.usuario = "El usuario es requerido";
      isValid = false;
    }
    if (formBook.contrasenia.trim() === "") {
      nuevosErrores.contrasenia = "El contrasenia es requerido";
      isValid = false;
    }
    if (formBook.rol.trim() === "") {
      nuevosErrores.rol = "El rol es requerido";
      isValid = false;
    }
    if (formBook.estado.trim() === "") {
      nuevosErrores.estado = "El estado es requerido";
      isValid = false;
    }

    setErrors(nuevosErrores);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormBook({
      ...formBook,
      [name]: value,
    });
  };
//Metodo Post con Validaciones

function newData(id, nom, ape, nits, tel, dire, user, pass, role, state, e){
 setFormBook({
    id:[id ? id : null],
    nombre: [nom],
    apellido: [ape],
    nit: [nits],
    telefono: [tel],
    direccion: [dire],
    usuario:[user],
    contrasenia:[pass],
    rol:[role],
    estado:[state],
  })
 }

 const handleReset =()=>{
  setFormBook({
    nombre:"",
    apellido:"",
    nit:"",
    telefono:"",
    direccion:"",
    usuario:"",
    contrasenia:"",
    rol:"",
    estado:"",
  });
};
  const handleSubmit = (form, e) => {
    e.preventDefault()
    
   if(form && form.id){
    console.log("Estoy dentro de la condicion if si existe id")
    axios.put(`http://localhost:4200/Books/${form.id}`, {
      nom: formBook.nombre,
      ape: formBook.apellido,
      nits: formBook.nit,
      tel: formBook.telefono,
      dire: formBook.direccion,
      user: formBook.usuario,
      pass: formBook.contrasenia,
      role: formBook.rol,
      state: formBook.estado,/*,*/ 
      })
      .then(function (response) {
         console.log(response.data);
         console.log("Registro editado exitosamente");
         handleReset();
         setLoad(true);
         setFormBook({
          nombre: "",
          apellido: "",
          nit: "",
          telefono: "",
          direccion: "",
          usuario: "",
          contrasenia: "",
          rol: "",
          estado: ""}
         )
        // setSelectedId(null)
       }).catch((error)=>{console.log(error)})
       
   }
   
   else {
        if (!validate()) {
      console.log(`No es valida la formulario`);
      return;
    }

    axios
      .post("http://localhost:4200/Books", {
        nom: formBook.nombre,
        ape: formBook.apellido,
        nits: formBook.nit,
        tel: formBook.telefono,
        dire: formBook.direccion,
        user: formBook.usuario,
        pass: formBook.contrasenia,
        role: formBook.rol,
        state: formBook.estado/*,*/
      })
   
      .then(function (response) {
        console.log(`Se ha enviado el registro correctamente`, response);
        handleReset();
        setLoad(true);
      })
      .catch(function (error) {
        console.log(`Ha ocurrido un error`);
        console.log(error);
      });
    //Reseteo de formulario cuando se envia los datos POST
      handleReset();
  }
}

//Metodo Get 
  const url = "http://localhost:4200/Books";  
  const [books, setBooks ] = useState(null);

  useEffect(() => {

    if (load===true){
      obtenerLibros();
      setLoad(false);
    }
    }, [load]);
  
    function obtenerLibros() {
      axios.get(url).then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }





   //Metodo Delete
   const handleDelete=(id,e)=>{
    console.log(`Soy el ID ${id}`);
        Swal.fire({
          title: '¿Estás seguro de eliminar este registro?',
          text: 'Esta acción no se puede deshacer',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, estoy seguro'
        }).then((result)=>{
          if(result.isConfirmed){
         
            console.log(`Soy el registro que intentas eliminar de manera exitosa ${id}`,e.target);
          
            axios.delete(`http://localhost:4200/Books/ ${id}`)
             .then(response => {
              console.log(`Id ${id} eliminado exitosamente!`);
              setLoad(true);
            })
            .catch(error => {
              console.log(`Ha ocurrido un error al eliminar el registro${id},e.target`);
              console.error(error );
            });
  
            Swal.fire({
              title: "Eliminado exitosamente!",
              icon: "success"
            });
          }
          else{
            console.log('Operacion cancelada')
          }
        });
     }

  return (  
    <Fragment>  
        <p>Data: {JSON.stringify(formBook)}</p>
        <br></br>
      
        <h4> <FaUser  size={18} color="black"/> Datos de la persona</h4>
        <form onSubmit={(e)=>handleSubmit(formBook, e)}>
        <div className="container">
            <div className="row">
                <div className="mb-3 col-md-4">
                  <label for="exampleFormControlInput1" className="form-label">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    type="text"
                    className="form-control"
                    value={formBook.nombre}
                    id="nombre"
                    placeholder="Ingrese el nombre"
                    onChange={handleChange}
                  />
                  <div style={{ color: "red" }}>{errors.nombre}</div>
                </div>
                <div className="mb-3 col-md-4">
                      <label for="exampleFormControlInput1" className="form-label">
                        Apellidos
                      </label>
                      <input
                        name="apellido"
                        type="text"
                        className="form-control"
                        value={formBook.apellido}
                        id="apellido"
                        placeholder="Ingrese el apellido"
                        onChange={handleChange}
                      />
                      <div style={{ color: "red" }}>{errors.nombre}</div>
                </div>
                <div className="col-md-4">
            <label for="exampleFormControlInput1" className="form-label">
              Nit
            </label>
            <input
              name="nit"
              type="number"
              className="form-control"
              value={formBook.nit}
              id="nit"
              placeholder="Ingrese el nit"
              onChange={handleChange}
            />
            <div style={{ color: "red" }}>{errors.nit}</div>
                </div>  
            </div>
        
            <div className="row">
              <div className=" col-md-4">
                <label for="exampleFormControlInput1" className="form-label">
                  Telefono
                </label>
                <input
                  name="telefono"
                  type="number"
                  className="form-control"
                  value={formBook.telefono}
                  id="telefono"
                  placeholder="Ingrese el telefono"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.telefono}</div>
              </div>
              <div className="mb-3 col-md-4">
                <label for="exampleFormControlInput1" className="form-label">
                  Direccion
                </label>
                <input
                  name="direccion"
                  type="text"
                  className="form-control"
                  value={formBook.direccion}
                  id="direccion"
                  placeholder="Direccion"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.direccion}</div>
              </div>
            </div>

            <h4><FaSignInAlt  size={18} color="black"/> Datos del usuario</h4>
            <div className="row">
                <div className="mb-3 col-md-4">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Usuario
                  </label>
                  <input
                    name="usuario"
                    type="text"
                    className="form-control"
                    value={formBook.usuario}
                    id="usuario"
                    placeholder="usuario"
                    onChange={handleChange}
                  />
                  <div style={{ color: "red" }}>{errors.usuario}</div>
                </div>
                <div className="mb-3 col-md-4">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Contraseña
                </label>
                <input
                  name="contrasenia"
                  type="password"
                  className="form-control"
                  value={formBook.contrasenia}
                  id="contrasenia"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.contrasenia}</div>
                </div>
                <div className="mb-3  col-md-4 ">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Rol
                </label>
                <input
                  name="rol"
                  type="text"
                  className="form-control"
                  value={formBook.rol}
                  id="rol"
                  placeholder="Rol"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.rol}</div>
                </div>
            </div>

            <div className="row">
            <div className="mb-3  col-md-4 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Estado
              </label>
              <input
                name="estado"
                type="text"
                className="form-control"
                value={formBook.estado}
                id="estado"
                placeholder="Estado"
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{errors.estado}</div>
            </div>
            </div>
        </div>
        
        <div className="container d-flex justify-content-center">
  <button type="submit" className="btn btn-warning">
    Guardar Registro
  </button>
</div>

        </form>
        <br></br>
        <h1 className='text-center'>Funciona lo de registrar, eliminar y solo editar aun no!</h1> <br></br>
        <br></br>  <h4>Table</h4>   <hr></hr>
        <div className="container">
          <div class="table-responsive small">    
          <table class="table table-striped">

            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Nit</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Usuario</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>

            <tbody>
              {books && books.length > 0 && books.map((item, index)=>(
                  //Otra manera de llamar los datos
                  //  {personaje.map((personaje) => (
                  <tr key={item.id}>
                      <td> {item.id} </td>
                      <td> {item.nom} </td>  
                      <td> {item.ape} </td>
                      <td> {item.nits} </td>
                      <td> {item.tel} </td>
                      <td> {item.dire} </td>  
                      <td> {item.user} </td>  
                      <td> {item.pass} </td>  
                      <td> {item.role} </td>  
                      <td> {item.state} </td>  
                    <td>
                      {<button onClick={(e)=>handleDelete(item.id, e)} style={{ border: 'none', padding: 0, margin: 0, backgroundColor: 'transparent' }}> <FaTrashAlt  size={18} color="red"/></button> }
                      {/*<button  onClick={(e)=>handleEdit(item.id, e)} style={{ border: 'none', padding: 0, margin: 0, backgroundColor: 'transparent' }}> <FaEdit  size={18} color="blue"/></button>*/}
                      {<button  onClick={(e)=>newData(item.id, item.nom, item.ape, item.nits, item.tel, item.dire, item.user, item.pass, item.role, item.state)} style={{ border: 'none', padding: 0, margin: 0, backgroundColor: 'transparent' }}> <FaEdit  size={18} color="black"/></button> }
                    </td> 
                  </tr>   ))
                }
            </tbody>
          </table>
          </div>
        </div>
    </Fragment>
  );
}

export default BookCreate;