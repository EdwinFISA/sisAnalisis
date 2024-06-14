// config.cjs

module.exports = {
    DB_NAME: process.env.DB_NAME || 'nombre_basedatos',
    DB_USER: process.env.DB_USER || 'usuario',
    DB_PASSWORD: process.env.DB_PASSWORD || 'contraseña',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 5432,  // Puerto por defecto para PostgreSQL
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
    PORT: process.env.PORT || 3000,
  };
  