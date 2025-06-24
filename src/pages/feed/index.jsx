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
            <Header autenticado={true} />

            {/* Container principal com layout em colunas flexíveis */}
            <Container>
                {/* Coluna principal maior (flex 3) com título e lista de cards */}
                <Column $flex={3}>
                    <Title>Feed</Title>
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        name="Josiel Junior"
                        time={8}
                        title="Como a IA está redefinindo o futuro do desenvolvimento de software"
                        subtitle="IA já impacta como codamos e automatizamos tarefas."
                        technologies={['React', 'Python']}
                        likes={25}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        name="Josiel Junior"
                        time={1}
                        title="Melhores práticas com React 18"
                        subtitle="Como otimizar performance usando hooks"
                        technologies={['React', 'JavaScript', 'CSS']}
                        likes={44}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        name="Josiel Junior"
                        time={4}
                        title="CSS Grid: Layouts flexíveis e modernos"
                        subtitle="Domine o Grid para construir interfaces responsivas"
                        technologies={['CSS Grid', 'Sass', 'HTML']}
                        likes={33}
                    />
                    <Card
                        banner="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        avatar="https://avatars.githubusercontent.com/u/151585338?v=4"
                        name="Josiel Junior"
                        time={5}
                        title="Introdução ao TypeScript no front-end"
                        subtitle="Como o TS melhora seu código React"
                        technologies={['TypeScript', 'React', 'Webpack']}
                        likes={55}
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
