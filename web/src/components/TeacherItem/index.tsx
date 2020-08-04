import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/29788908?s=460&u=438550c6169b19d4ed5a66cded2da5e6cc9e43e1&v=4" alt="" />
        <div>
          <strong>Cláudio Yuri</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/>
        <br/>
        Apaixonado pro explodir coisas em laboratório e por mudar a vida
        das pessoas através de expreriências. Mas de 200.000 pressoas já 
        passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;