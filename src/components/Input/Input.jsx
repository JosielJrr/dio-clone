import { Controller } from 'react-hook-form';
import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, rules, ...rest }) => {
    return (
        <InputContainer>
            {/* Renderiza ícone à esquerda, se fornecido */}
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}

            {/* Integração do input com react-hook-form */}
            <Controller
                name={name}           // Nome do campo no formulário
                control={control}     // Objeto de controle do formulário do react-hook-form
                rules={rules}         // Regras de validação para o campo (ex: required, pattern)
                render={({ field }) => (
                    <InputText
                        {...field}                // Conecta onChange, onBlur, value, name ao input
                        {...rest}                 // Props extras (placeholder, type, etc)
                        value={field.value ?? ''} // Garante string vazia se valor undefined
                    />
                )}
            />
        </InputContainer>
    )
}

export { Input };
