[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-8.1-purple.svg)](https://redux.js.org/)
[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blueviolet.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-2.6-blueviolet.svg)](https://vitejs.dev/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-2.5-blueviolet.svg)](https://openweathermap.org/)
[![OpenCage Geocoding API](https://img.shields.io/badge/OpenCage%20Geocoding%20API-1.0-blueviolet.svg)](https://opencagedata.com/)



# App del Clima

Este proyecto esta realizado con ReactJS, la API de OpenWeatherMap y la API de OpenCage Geocoding AP. Utiliza TypeScript, Redux, Redux Toolkit, Redux Saga. Para los estilos se utilizo CSS. La aplicación permite obtener el clima de una ciudad, para ello se debe ingresar el nombre de la ciudad en el Formulario y presionar el botón de "Consultar Clima". La aplicación tambien muestra el clima actual de la ciudad donde se encuentra el usuario y el pronostico de los proximos 5 dias cada 30 minutos de la ciudad consultada. Se debe permitir la ubicación del usuario para poder obtener el clima actual de la ciudad donde se encuentra. Para esto debes aceptar el permiso de ubicación que te solicita el navegador.

## Features

- Consultar el clima de una ciudad.
- Consultar el clima actual de la ciudad donde se encuentra el usuario.
- Consultar el pronostico de los proximos 5 dias cada 30 minutos de la ciudad consultada.

## Environment Variables

Para correr este proyecto, debes agregar las siguientes variables de entorno a tu archivo .env, puedes utilizar el archivo .env.example como ejemplo.	

`VITE_CLIMA_API_KEY`

`VITE_LOCATION_API_KEY`

VITE_CLIMA_API_KEY=5e04f361bb111f953e11b1ab3b85b27b
VITE_LOCATION_API_KEY=0eadd6117fa845af9bf6d819f9b5ff43

Para conseguir estas claves debes registrarte en las siguientes paginas:
https://opencagedata.com/
https://openweathermap.org/

## API Reference

#### Get Clima

```http
  GET https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api_key}&units=metric
```

| Parameter       | Type     | Description                |
| :--------       | :------- | :------------------------- |
| `CLIMA_API_KEY` | `string` | **Required**. Your API key |
| `ciudad`        | `string` | **Required**. Ciudad       |
| `pais`          | `string` | **Required**. Pais         |

#### Get Location

```http
  GET https://api.opencagedata.com/geocode/v1/json?key=${api_key}&q=${lat}+${lon}&pretty=1
```

| Parameter               | Type     | Description                       |
| :---------------------- | :------- | :-------------------------------- |
| `LOCATION_API_KEY`      | `string` | **Required**. Your API key        |
| `lat`                   | `string` | **Required**. Latitud             |
| `lon`                   | `string` | **Required**. Longitud            |    


## Estrutura de carpetas

```
/app-weather
|-- coverage
|-- public
|-- src
|   |-- assets
|   |-- components
          |-- common
                |-- Alert
                |-- Form
                |-- Header
                |-- Icons
                |-- Input
                |-- Select
          |-- ForescastCard
          |-- WatherCard
|   |-- constants
            |-- options
|   |-- data
          |-- climate
          |-- forecast
|   |-- hooks
          |-- useSEO
|   |-- features
          |-- Climate
          |-- Forecast
          |-- Search
|   |-- services
          |-- getCity
          |-- getClimate
          |-- getLocation
|   |-- store
          |-- saga
                |-- index
          |-- slice
                |-- index
          |-- index
|   |-- test
          |--App.test
|   |-- types
          |-- climate.types
          |-- forecast.types
          |-- location.types
          |-- search.types
|   |-- utils
          |-- getDate
|-- example.env
|-- eslintrc.js
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json
|-- tsconfig.test.json
|-- vite.config.ts
```


## Ambiente de desarrollo

Clone el proyecto

```bash
  git clone https://github.com/humbertodrc/weather-app.git
```

Para correr este proyecto, debes ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```bash
  npm install
  npm run dev
```

## Ambiente de producción

Para correr este proyecto, debes ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```bash
  npm install
  npm run build
```

Hay que tener en cuenta que para correr el proyecto en producción se debe agregar las variables de entorno en el archivo .env

## Running Tests

Para correr los test, debes ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```bash
  npm run test
```

Para obtener el coverage de los test, debes ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```bash
  npm run coverage
```

Puede obtener un mejor visualización del coverage de los test ejecutando el comando:

```bash
  npm run test:ui
```

## Demo

Puedes ver el demo del proyecto en el siguiente enlace: https://weather-app-humbertodrc.netlify.app/

## Screenshots

![App Screenshot](https://github.com/humbertodrc/weather-app/assets/63797901/a6d9201c-19d1-4817-8576-81cb4f40a73c)

![Lighthouse Screenshot](https://github.com/humbertodrc/weather-app/assets/63797901/40556e1d-adb9-4f86-ad78-0792a71014b3)



## Authors

- [@humbertodrc](https://github.com/humbertodrc)
