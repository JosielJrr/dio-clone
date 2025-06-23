import { Container, NameText, Progress, UserPicture } from './styles';

const UserInfo = ({ nome, image, percentual }) => {
    return (
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual} /> {/* Passa a porcentagem para renderizar a barra dinamicamente */}
            </div>
        </Container>
    )
}

export { UserInfo };
