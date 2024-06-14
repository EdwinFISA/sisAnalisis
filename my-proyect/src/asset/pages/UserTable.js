// Tabla Usuarios
import React from 'react';
import { FaTrashAlt, FaEdit, FaHtml5 } from 'react-icons/fa';

const UserTable = ({ books, handleDelete, newData }) => {
  return (

    <div className="container">
      <div className="table-responsive small">
      <h1 className='text-center'>Tabla aun no funciona</h1> <br></br>
        <table className="table table-striped">
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
            {books && books.length > 0 && books.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.ape}</td>
                <td>{item.nits}</td>
                <td>{item.tel}</td>
                <td>{item.dire}</td>
                <td>{item.user}</td>
                <td>{item.pass}</td>
                <td>{item.role}</td>
                <td>{item.state}</td>
                <td>
                  <button
                    onClick={(e) => handleDelete(item.id, e)}
                    style={{ border: 'none', padding: 0, margin: 0, backgroundColor: 'transparent' }}
                  >
                    <FaTrashAlt size={18} color="red" />
                  </button>
                  <button
                    onClick={(e) => newData(item.id, item.nom, item.ape, item.nits, item.tel, item.dire, item.user, item.pass, item.role, item.state)}
                    style={{ border: 'none', padding: 0, margin: 0, backgroundColor: 'transparent' }}
                  >
                    <FaEdit size={18} color="black" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
