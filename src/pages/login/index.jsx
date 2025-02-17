import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import {
    Container,
    Title,
    TextContainer,
    TitleLogin,
    SubtitleLogin,
    EsqueciText,
    CriarText,
    Row,
    Wrapper
} from './styles';

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
            console.error('Erro ao tentar o login', e);
            alert('Houve um erro ao tentar o login. Tente novamente.');
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <div>
                <TextContainer>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.</Title>
                </TextContainer>
            </div>
            <div>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder='E-mail' leftIcon={<MdEmail />} name='email' control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type='password' placeholder='Senha' leftIcon={<MdLock />} name='senha' control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title='Entrar' variant='secondary' type='submit' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText href='/register'>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </div>
        </Container>
    </>)
}

export { Login };