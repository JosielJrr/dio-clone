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
    Wrapper
} from './styles';

const Login = () => {
    const navigate = useNavigate();

    // Configura o react-hook-form para validar enquanto o usuário digita
    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',           // Valida o campo a cada mudança (tecla pressionada)
        reValidateMode: 'onChange', // Revalida o campo enquanto o usuário digita após um erro
    });

    // Função chamada quando o formulário é enviado com dados válidos
    const onSubmit = async (formData) => {
        try {
            // Busca usuário no backend com email e senha fornecidos
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            // Se a resposta contém pelo menos um usuário válido, redireciona para o feed
            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            // Se não encontrar, avisa que usuário ou senha estão errados
            alert('Usuário ou senha inválido');
        } catch (e) {
            console.error('Erro ao tentar o login', e);
            alert('Houve um erro ao tentar o login. Tente novamente.');
        }
    };

    console.log('errors', errors); // Ajuda a ver erros de validação no console

    return (
        <>
            <Header /> {/* Cabeçalho sem controle de autenticação */}

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
                            <Input placeholder='E-mail' leftIcon={<MdEmail />} name='email' control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            {/* Campo para senha com ícone */}
                            <Input type='password' placeholder='Senha' leftIcon={<MdLock />} name='senha' control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}

                            {/* Botão secundário para enviar o formulário */}
                            <Button title='Entrar' $variant='secondary' type='submit' />
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
