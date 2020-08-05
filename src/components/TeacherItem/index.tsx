import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
         <img src="https://avatars1.githubusercontent.com/u/13683284?s=60&v=4"  alt="Allan"/> 
         <div>
             <strong>Allan Kleber</strong>
             <span>Programação web</span>
         </div> 
        </header>
        <p>
            Entusiasta de java
        </p>
        <footer>
            <p>
              preço/hora 
              <strong>R$ 50,00</strong> 
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entar em contato

            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;