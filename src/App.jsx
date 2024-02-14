import { useEffect, useState } from 'react'
import './Relogio.css';

const RelogioAnalogico= () => {
  const [hora, setHora] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [segundo, setSegundo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(()=>{
      const dataAtual = new Date();
      setHora(dataAtual.getHours() % 12); //formato para o relógio de 12 horas
      setMinuto(dataAtual.getMinutes());
      setSegundo(dataAtual.getSeconds());

    }, 1000)
  

  return () => clearInterval(intervalId) // Limpar o intervalo ao desmontar o componente
},[]);

const segundoAngulo = segundo * 6; // 360 graus divididos por 60 segundos
const minutoAngulo = minuto * 6 + segundo * 0.1; // 360 graus divididos por 60 minutos
const horaAngulo = hora * 30 + minuto * 0.5; // 360 graus divididos por 12 horas

return(
  <div className='relogio'>
    <div className='ponteiro segundo' style={{transform: `rotate(${segundoAngulo}deg)`}}/>
    <div className='ponteiro minuto' style={{transform: `rotate(${minutoAngulo}deg)`}}/>
    <div className='ponteiro hora' style={{transform: `rotate(${horaAngulo}deg)`}}/>

  </div>
)
}
 
export default RelogioAnalogico;
