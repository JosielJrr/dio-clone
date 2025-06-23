import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = ({ imagem, nome, tempo, titulo, subtitulo, tecnologias }) => {
    // Tratar pluralização
    const tempoTexto = tempo === 1 ? 'minuto' : 'minutos';

    // Monta a string de linguagens com #
    const tecnologiasTexto = Array.isArray(tecnologias)
        ? tecnologias.map(tech => `#${tech}`).join(' ')
        : tecnologias;

    return (
        <CardContainer>
            <ImageBackground src='https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Content>
                <UserInfo>
                    <UserPicture src={imagem} />
                    <div>
                        <h4>{nome}</h4>
                        <p>Há {tempo} {tempoTexto}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{titulo}</h4>
                    <p>{subtitulo}</p>
                </PostInfo>
                <HasInfo>
                    <h4>{tecnologiasTexto}</h4>
                    <p>
                        <FiThumbsUp /> 25
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };
