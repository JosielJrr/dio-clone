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

const Card = ({ banner, avatar, name, time, title, subtitle, technologies, likes }) => {
    // Tratar pluralização
    const timeUnit = time === 1 ? 'minuto' : 'minutos';

    // Monta a string de tecnologias com #
    const formattedTechnologies = Array.isArray(technologies)
        ? technologies.map(tech => `#${tech}`).join(' ')
        : technologies;

    return (
        <CardContainer>
            <ImageBackground src={banner} />
            <Content>
                <UserInfo>
                    <UserPicture src={avatar} />
                    <div>
                        <h4>{name}</h4>
                        <p>Há {time} {timeUnit}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </PostInfo>
                <HasInfo>
                    <h4>{formattedTechnologies}</h4>
                    <p>
                        <FiThumbsUp /> {likes}
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };
