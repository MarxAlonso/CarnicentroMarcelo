export type Tema = "claro" | "oscuro" | "sistema";

/** Clave de localStorage. Compartida entre el script inline y el interruptor. */
export const CLAVE_TEMA = "cm-tema";

/**
 * Script que decide el tema antes del primer pintado.
 *
 * Tiene que ir inline y en el `<head>`, antes de cualquier contenido: si se
 * ejecutara después, el visitante vería la página en claro durante un
 * fotograma y luego saltaría a oscuro. Ese parpadeo blanco es el error clásico
 * del modo oscuro y no tiene arreglo desde React, porque React llega tarde.
 *
 * Prioridad: lo que el visitante eligió a mano; si no eligió nada, lo que pida
 * su sistema operativo.
 */
export const TEMA_SCRIPT = `
(function(){
  try{
    var guardado = localStorage.getItem('${CLAVE_TEMA}');
    var oscuro = guardado === 'oscuro'
      || (guardado !== 'claro' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (oscuro) document.documentElement.classList.add('dark');
  }catch(e){
    // Si localStorage está bloqueado, se queda en claro y no pasa nada.
  }
})();
`;
