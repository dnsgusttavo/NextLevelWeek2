import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
const TeacherItem = () => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG01jVs29T8xA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=fMRGoKuOC2aZr8HMzyYczwQsEwVMQ4PQoF-1QMiu-J4" alt="Foto de perfil"/>
                        <div>
                            <strong>Gustavo Maltez</strong>
                            <span>Desenvolvimento de Aplicativos</span>
                        </div>
                    </header>

                    <p>
                        Estudante de Engenharia de Software na UFC
                        <br/><br/>
                        Apaixonado por tecnologia e programação. Estudando a stack Javascript e desenvolvendo aplicações incríveis!
                    </p>

                    <footer>
                        <p>Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                    
        </article>
    )
}

export default TeacherItem;