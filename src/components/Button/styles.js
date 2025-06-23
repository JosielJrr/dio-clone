import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    min-width: 120px;

    border: none;
    border-radius: 22px; 
    padding: 10px 12px;
    position: relative;

    background-color: #565656; /* Cor padrão do botão */
    color: #FFF;

    font-size: 14px;

    &:hover {
        opacity: 0.6;  
        cursor: pointer;  
    }

    /* Se a variante não for 'primary', aplica estilos alternativos */
    ${props => props.$variant !== 'primary' && css`
        min-width: 167px;
        height: 33px;

        background-color: #E41050; /* Cor da variante secundária */

        /* Contorno extra ao redor do botão para destacar variante */
        &::after {
            content: '';
            position: absolute; 
            border: 1px solid #E41050;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

    /* Estilos adicionais para telas grandes */
    @media (min-width: 1440px) {
        padding: 14px 20px;
        font-size: 16px;

        ${props => props.$variant !== 'primary' && css`
            height: 40px;
        `}
    }
`;
