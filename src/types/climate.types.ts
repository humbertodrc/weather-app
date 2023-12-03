//TODO: Eliminar los datos que no se necesitan

export type ClimateType = {
  main:       Main;
  name:       string;
}

export type Main = {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}
