"use client"

import Image from 'next/image';
import './style.scss' 

const Header = () => {
  const name = "Marcus";

  function formatarDataAtual() {
  const dataAtual = new Date();
    
    const diasDaSemana = [
      'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
    ];
  
    const mesesDoAno = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
  
    const diaSemana = diasDaSemana[dataAtual.getDay()];
    const dia = String(dataAtual.getDate()).padStart(2, '0'); 
    const mes = mesesDoAno[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear(); 
  
    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  }
  return (
    <header>
      <nav>
        <div className='logo'>
          <Image src='/Shape.png' width={33.17} height={"33"} alt={''}></Image>
          <Image src='/Logotype.png' width={106.14} height={15.5} alt={''}></Image></div>
        <div className='welcome'>Bem-vindo de volta, {name}</div>
        <div className='data'>{formatarDataAtual()}</div>
      
      </nav>
        


    </header>
  );
};

export default Header;