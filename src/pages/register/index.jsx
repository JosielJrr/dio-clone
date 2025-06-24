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
    StyledLink,
    SpanError
} from './styles';

const Register = () => {
    const navigate = useNavigate();

    // Configura o react-hook-form para validar enquanto o usuário digita
    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',           // Valida o campo a cada mudança (tecla pressionada)
        reValidateMode: 'onChange', // Revalida o campo enquanto o usuário digita após um erro
    });

    // Função chamada ao enviar o formulário com dados válidos
    const onSubmit = async (formData) => {
        try {
            await api.post('/users', {
                name: formData.name,
                email: formData.email,
                senha: formData.password,
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
                                rules={{ required: 'Nome é obrigatório' }}
                            />
                            {errors.name && <SpanError>{errors.name.message}</SpanError>}

                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                                rules={{ required: 'E-mail é obrigatório' }}
                            />
                            {errors.email && <SpanError>{errors.email.message}</SpanError>}

                            <Input
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                type="password"
                                name="password"
                                control={control}
                                rules={{ required: 'Senha é obrigatória' }}
                            />
                            {errors.password && <SpanError>{errors.password.message}</SpanError>}

                            <Button variant='secondary' title='Criar minha conta' type='submit' />
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
