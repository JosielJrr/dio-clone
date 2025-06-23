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

const Card = ({ banner, avatar, nome, tempo, titulo, subtitulo, tecnologias, curtidas }) => {
    // Tratar pluralização
    const tempoTexto = tempo === 1 ? 'minuto' : 'minutos';

    // Monta a string de linguagens com #
    const tecnologiasTexto = Array.isArray(tecnologias)
        ? tecnologias.map(tech => `#${tech}`).join(' ')
        : tecnologias;

    return (
        <CardContainer>
            <ImageBackground src={banner} />
            <Content>
                <UserInfo>
                    <UserPicture src={avatar} />
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
                        <FiThumbsUp /> {curtidas}
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };
