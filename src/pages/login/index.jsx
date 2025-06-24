import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

import {
    Container,
    StyledLink,
    ForgotPasswordText,
    Row,
    SubtitleLogin,
    TextContainer,
    Title,
    TitleLogin,
    Wrapper,
    SpanError
} from './styles';

const Login = () => {
    const navigate = useNavigate();

    // Configura o react-hook-form para validar enquanto o usuário digita
    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',           // Valida o campo a cada mudança (tecla pressionada)
        reValidateMode: 'onChange', // Revalida o campo enquanto o usuário digita após um erro
    });

    // Função chamada ao enviar o formulário com dados válidos
    const onSubmit = async (formData) => {
        try {
            // Busca usuário no backend com email e senha fornecidos
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);

            // Se a resposta contém pelo menos um usuário válido, redireciona para o feed
            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            // Se não encontrar, avisa que email ou senha estão errados
            alert('E-mail ou senha inválido');
        } catch (e) {
            console.error('Erro ao tentar o login', e);
            alert('Houve um erro ao tentar o login. Tente novamente.');
        }
    };

    return (
        <>
            <Header /> 
            <Container>
                <div>
                    <TextContainer>
                        <Title>
                            A plataforma para você aprender com experts, dominar as principais tecnologias
                            e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </TextContainer>
                </div>

                <div>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

                        {/* Formulário controlado pelo react-hook-form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Campo para email com ícone */}
                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                                rules={{ required: 'E-mail é obrigatório' }}
                            />
                            {errors.email && <SpanError>{errors.email.message}</SpanError>}

                            {/* Campo para senha com ícone */}
                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                name="password"
                                control={control}
                                rules={{ required: 'Senha é obrigatória' }}
                            />
                            {errors.password && <SpanError>{errors.password.message}</SpanError>}

                            {/* Botão secundário para enviar o formulário */}
                            <Button title='Entrar' variant='secondary' type='submit' />
                        </form>

                        {/* Links para recuperação de senha e cadastro */}
                        <Row>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                            <StyledLink to='/register'>Criar Conta</StyledLink>
                        </Row>
                    </Wrapper>
                </div>
            </Container>
        </>
    )
}

export { Login };
