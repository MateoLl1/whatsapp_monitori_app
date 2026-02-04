
# WhatsappMonitor
El frontend está desarrollado en Angular y no se ejecuta como servidor independiente.
El resultado del build se sirve como archivos estáticos embebidos dentro de NestJS.

## Requisitos

- Node.js 18+
- Angular CLI instalado globalmente


## Construir el build de Angular

Desde el directorio del frontend Angular:

1. Instalar dependencias
```
npm install
```

2. Generar build de producción
```
ng build --configuration production
```
