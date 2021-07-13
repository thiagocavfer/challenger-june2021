export function money(value){
  return parseFloat(value).toLocaleString('pt-BR', {minimumFractionDigits: 2 , maximumFractionDigits: 2, style: 'currency', currency: 'BRL'});
}