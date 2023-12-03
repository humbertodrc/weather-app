enum Days {
  Domingo,
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
}

export const getDayWeek = (fecha: string): string => {
  // Convierte la cadena de fecha a un objeto de fecha
  const date = new Date(fecha);
  // Obtiene el día de la semana
  const day = date.getDay();
  // Devuelve el nombre del día de la semana
  return Days[day];
}