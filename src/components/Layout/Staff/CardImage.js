import Vinicios from '../../../images/Vinicios.jpg';
import Pedro from '../../../images/Pedro.jpg';
import Paulo from '../../../images/Paulo.jpg';
import Gustavo from '../../../images/Gustavo.jpg';
import Teo from '../../../images/Teo.jpg';
import João from '../../../images/Teo.jpg';



export default (nome)=>{
  const image = {
    Vinicios,
    Gustavo,
    Pedro,
    João,
    Teo,
    Paulo
  }
  return image[nome];
};