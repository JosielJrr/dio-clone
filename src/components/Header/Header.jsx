import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-dio.png';

import { Button } from '../Button/Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({ autenticado }) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

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
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/151585338?v=4' />
                    ) : (
                        <>
                            <MenuRight href='/'>Home</MenuRight>
                            <Row>
                                <Button title='Entrar' onClick={handleClickSignIn} />
                                <Button title='Cadastrar' onClick={handleClickRegister} />
                            </Row>
                        </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };