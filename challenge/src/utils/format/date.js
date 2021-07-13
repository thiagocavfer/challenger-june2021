import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export function format(date, model=null){
  if(model)
    return moment(date).format(model);
  else
    return moment(date).fromNow();
}