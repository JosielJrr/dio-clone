import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    min-width: 120px;

    border: none;
    border-radius: 22px;
    padding: 2px 12px;
    position: relative;

    background-color: #565656;
    color: #FFF;

            &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        
    ${({ variant }) => variant !== 'primary' && css`
        min-width: 167px;
        height: 33px;

        background-color: #E41050;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

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
`