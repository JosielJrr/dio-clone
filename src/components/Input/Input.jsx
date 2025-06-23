import { Controller } from 'react-hook-form';
import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, ...rest }) => {
    return (
        <InputContainer>
            {/* Renderiza ícone à esquerda, se fornecido */}
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}

            {/* Integração do input com react-hook-form */}
            <Controller
                name={name}          // Nome do campo no formulário
                control={control}    // Objeto de controle do formulário
                render={({ field }) => (
                    <InputText
                        {...field}      // Conecta o input com o estado do react-hook-form (onChange, onBlur, value, name)
                        {...rest}       // Props extras (ex: placeholder, type, etc)
                    />
                )}
            />
        </InputContainer>
    )
}

export { Input };
