/**
 * MT Studio — Ancho de los titulos en el resultado de busqueda
 * ─────────────────────────────────────────────────────────────────
 * Google recorta el <title> por ancho en pixeles, no por cantidad de
 * caracteres: renderiza en Arial 20px dentro de un contenedor de unos
 * 600px. "Facturación electrónica ARCA (ex AFIP) para monotributistas"
 * mide 544px con 57 caracteres, y "MMMMMMMMMMMMMMMMMMMMMMMMM" mide 500px
 * con 25. Contar caracteres da el resultado equivocado en los dos sentidos.
 *
 * La tabla son los anchos reales de Arial 20px, medidos con el archivo de
 * la fuente. Es una estimacion: Google puede usar otra version de Arial y
 * no aplica kerning entre pares, asi que el margen de error ronda el 1%.
 * Para decidir si entra un sufijo de marca alcanza y sobra.
 */

const CHAR_WIDTH = {
  " ":6.0,"!":6.0,"\"":7.0,"#":11.0,"$":11.0,"%":18.0,"&":13.0,"'":4.0,"(":7.0,")":7.0,
  "*":8.0,"+":12.0,",":6.0,"-":7.0,".":6.0,"/":6.0,"0":11.0,"1":11.0,"2":11.0,"3":11.0,
  "4":11.0,"5":11.0,"6":11.0,"7":11.0,"8":11.0,"9":11.0,":":6.0,";":6.0,"<":12.0,"=":12.0,
  ">":12.0,"?":11.0,"@":20.0,"A":13.0,"B":13.0,"C":14.0,"D":14.0,"E":13.0,"F":12.0,
  "G":16.0,"H":14.0,"I":6.0,"J":10.0,"K":13.0,"L":11.0,"M":17.0,"N":14.0,"O":16.0,"P":13.0,
  "Q":16.0,"R":14.0,"S":13.0,"T":12.0,"U":14.0,"V":13.0,"W":19.0,"X":13.0,"Y":13.0,
  "Z":12.0,"[":6.0,"\\":6.0,"]":6.0,"^":9.0,"_":11.0,"`":7.0,"a":11.0,"b":11.0,"c":10.0,
  "d":11.0,"e":11.0,"f":6.0,"g":11.0,"h":11.0,"i":4.0,"j":4.0,"k":10.0,"l":4.0,"m":17.0,
  "n":11.0,"o":11.0,"p":11.0,"q":11.0,"r":7.0,"s":10.0,"t":6.0,"u":11.0,"v":10.0,"w":14.0,
  "x":10.0,"y":10.0,"z":10.0,"{":7.0,"|":5.0,"}":7.0,"~":12.0,"á":11.0,"é":11.0,"í":6.0,
  "ó":11.0,"ú":11.0,"ü":11.0,"ñ":11.0,"Á":13.0,"É":13.0,"Í":6.0,"Ó":16.0,"Ú":14.0,"Ñ":14.0,
  "¿":12.0,"¡":7.0,"—":20.0,"–":11.0,"“":7.0,"”":7.0,"‘":4.0,"’":4.0,"…":20.0,"°":8.0,
  "º":7.0,"ª":7.0,"€":11.0,"·":7.0
}

/** Ancho de fallback para cualquier caracter fuera de la tabla. */
const FALLBACK = 9.73

/** Ancho aproximado de un texto renderizado en Arial 20px, en pixeles. */
export function titleWidth(text) {
  let total = 0
  for (const char of String(text)) total += CHAR_WIDTH[char] ?? FALLBACK
  return total
}

/** Ancho util del title en el resultado de busqueda de escritorio. */
export const TITLE_MAX_WIDTH = 600
