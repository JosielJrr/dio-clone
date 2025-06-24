import { ButtonContainer } from './styles';

const Button = ({ title, variant = 'primary', onClick }) => {
    return (
        // Renderiza o botão com estilo baseado na variante
        <ButtonContainer $variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export { Button };
