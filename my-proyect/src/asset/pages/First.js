import React, { Fragment, useEffect } from 'react';
import BarChart from '../components/BarChart';
import Column3DChart from '../components/Column3DChart';

function First() {
  useEffect(() => {
    if (typeof window.graficaUno === 'function') {
      window.graficaUno();
    }
    if (typeof window.graficaDos === 'function') {
      window.graficaDos();
    }
  }, []);

  return (
    <Fragment>
      <h2>Bienvenido Sandra</h2>
      <section className="container_btnReporte">
        <button className="btnReporte">
          <label>Compras</label>
          <label>50</label>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button className="btnReporte">
          <label>Clientes</label>
          <label>48</label>
          <i className="fa-solid fa-users"></i>
        </button>
        <button className="btnReporte">
          <label>Producto</label>
          <label>8</label>
          <i className="fa-solid fa-box"></i>
        </button>
      </section>
      <section className="contenedorGraficasPrincipal" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '500px', height: '400px' }}>
          <BarChart />
        </div>
        <div style={{ width: '500px', height: '400px' }}>
          <Column3DChart />
        </div>
      </section>
    </Fragment>
  );
}

export default First;
