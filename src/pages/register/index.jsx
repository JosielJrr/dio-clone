import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

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
    Wrapper,
    StyledLink
} from './styles';
const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', {
                name: formData.name,
                email: formData.email,
                senha: formData.Password,
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (e) {
            console.error('Erro ao cadastrar usuário', e);
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <div>
                    <TextContainer>
                        <Text>
                            A plataforma para você aprender com experts, dominar as principais tecnologias
                            e entrar mais rápido nas empresas mais desejadas.
                        </Text>
                    </TextContainer>
                </div>
                <div>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                placeholder="Nome Completo"
                                leftIcon={<MdPerson />}
                                name="name"
                                control={control}
                                rules={{ required: true }}
                            />
                            {errors.name && <span>Nome é obrigatório</span>}

                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                                rules={{ required: true }}
                            />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            <Input
                                placeholder="Password"
                                leftIcon={<MdLock />}
                                type="password"
                                name="Password"
                                control={control}
                                rules={{ required: true }}
                            />
                            {errors.Password && <span>Senha é obrigatória</span>}

                            <Button $variant='secondary' title='Criar minha conta' type='submit' />
                        </form>

                        <TextLogin>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </TextLogin>

                        <Login>
                            já tenho conta. <StyledLink to="/login">Fazer login</StyledLink>
                        </Login>
                    </Wrapper>
                </div>
            </Container>
        </>
    );
};


export { Register };
