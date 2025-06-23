import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-dio.png';

import { Button } from '../Button/Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    LinkMenu,
    LinkRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    // Navega para a tela de login
    const handleClickSignIn = () => {
        navigate('/login');
    }

    // Navega para a tela de cadastro
    const handleClickRegister = () => {
        navigate('/register');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da dio' />
                    {autenticado ? (
                        <>
                            {/* Input de busca visível só se autenticado */}
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <LinkMenu>Live Code</LinkMenu>
                            <LinkMenu>Global</LinkMenu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        // Mostra a foto do usuário autenticado
                        <UserPicture src='https://avatars.githubusercontent.com/u/151585338?v=4' />
                    ) : (
                        <>
                            {/* Links e botões para usuários não autenticados */}
                            <LinkRight to='/'>Home</LinkRight>
                            <Row>
                                <Button title='Entrar' onClick={handleClickSignIn} />
                                <Button title='Cadastrar' onClick={handleClickRegister} />
                            </Row>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };
