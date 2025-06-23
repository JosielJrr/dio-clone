import { useNavigate } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';

import {
    Container,
    TextContent,
    Title,
    TitleHighlight
} from './styles';

const Home = () => {
    const navigate = useNavigate();

    // Redireciona para a página de login ao clicar no botão
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header /> {/* Cabeçalho fixo sem estado de autenticação explícito */}

            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>

                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>

                    {/* Botão secundário que chama navegação para login */}
                    <Button title='Começar agora' variant='secondary' onClick={handleClickSignIn} />
                </div>

                <div>
                    <img src={bannerImage} alt='Banner HomePage' />
                </div>
            </Container>
        </>
    )
}

export { Home };
