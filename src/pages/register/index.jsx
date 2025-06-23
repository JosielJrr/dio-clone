import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

import {
    Container,
    Login,
    SubtitleLogin,
    Text,
    TextContainer,
    TextLogin,
    TitleLogin,
    Wrapper
} from './styles';

const Register = () => {


    const { control } = useForm();

    return (
        <>
            <Header />
            <Container>
                <div>
                    <TextContainer>
                        <Text>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Text>
                    </TextContainer>
                </div>
                <div>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <Input placeholder='Nome Completo' leftIcon={<MdPerson />} name='name' control={control} />
                        <Input placeholder='E-mail' leftIcon={<MdEmail />} name='email' control={control} />
                        <Input placeholder='Password' leftIcon={<MdLock />} name='Password' control={control} />
                        <Button variant='secondary' title='Criar minha conta' />
                        <TextLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextLogin>
                        <Login>já tenho conta. <a href='/login'>Fazer login</a></Login>
                    </Wrapper>
                </div>
            </Container>
        </>
    )
}

export { Register };