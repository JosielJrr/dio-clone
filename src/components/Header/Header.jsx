import { Link } from 'react-router-dom';

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
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da DIO' />
                    {autenticado ? (
                        <>
                            {/* Input de busca visível só se autenticado */}
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <LinkMenu to='https://www.dio.me/'>Live Code</LinkMenu>
                            <LinkMenu to='https://www.dio.me/'>Global</LinkMenu>
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
                                <Link to="/login">
                                    <Button title="Entrar" />
                                </Link>
                                <Link to="/register">
                                    <Button title="Cadastrar" />
                                </Link>
                            </Row>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };
