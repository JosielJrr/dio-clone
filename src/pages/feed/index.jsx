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
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        nome="Josiel Jr."
                        tempo={8}
                        titulo="Como a IA Está Redefinindo o Futuro do Desenvolvimento de Software"
                        subtitulo="IA já impacta como codamos e automatizamos tarefas."
                        tecnologias={['React', 'Python']}
                        curtidas={25}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        nome="Josiel Jr."
                        tempo={1}
                        titulo="Melhores práticas com React 18"
                        subtitulo="Como otimizar performance usando hooks"
                        tecnologias={['React', 'JavaScript', 'CSS']}
                        curtidas={44}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        nome="Josiel Jr."
                        tempo={4}
                        titulo="CSS Grid: Layouts flexíveis e modernos"
                        subtitulo="Domine o Grid para construir interfaces responsivas"
                        tecnologias={['CSS Grid', 'Sass', 'HTML']}
                        curtidas={33}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        nome="Josiel Jr."
                        tempo={5}
                        titulo="Introdução ao TypeScript no front-end"
                        subtitulo="Como o TS melhora seu código React"
                        tecnologias={['TypeScript', 'React', 'Webpack']}
                        curtidas={55}
                    />
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
