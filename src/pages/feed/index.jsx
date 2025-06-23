import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { UserInfo } from '../../components/UserInfo/UserInfo';

import {
    Column,
    Container,
    Title,
    TitleHighlight
} from './styles';

const Feed = () => {
    return (
        <>
            {/* Cabeçalho com status de autenticação */}
            <Header $autenticado={true} />
            
            {/* Container principal com layout em colunas flexíveis */}
            <Container>
                {/* Coluna principal maior (flex 3) com título e lista de cards */}
                <Column $flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                {/* Coluna lateral menor (flex 1) com ranking */}
                <Column $flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    {/* Usuários com progresso percentual para o ranking */}
                    <UserInfo nome='Josiel Junior' image='https://avatars.githubusercontent.com/u/151585338?v=4' percentual={90} />
                    <UserInfo nome='Josiel Junior' image='https://avatars.githubusercontent.com/u/151585338?v=4' percentual={75} />
                    <UserInfo nome='Josiel Junior' image='https://avatars.githubusercontent.com/u/151585338?v=4' percentual={33} />
                    <UserInfo nome='Josiel Junior' image='https://avatars.githubusercontent.com/u/151585338?v=4' percentual={22} />
                </Column>
            </Container>
        </>
    )
}

export { Feed };
