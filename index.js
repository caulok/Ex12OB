// - Registra el error en un archivo a través de un try...catch

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const problema = () => {if(3 === "3"){
    console.log("Son iguales")} throw new Error('Esto es un error ya que no son iguales los strings y los números');
};

try {
    problema();
} catch (error) {
    logger.error(`CORREGIR: ${error}`);
}