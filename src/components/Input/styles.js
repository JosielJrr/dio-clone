import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 30px;

    border-bottom: 1px solid #3B3550;
    margin-bottom: 20px;

    display: flex;
    align-items: center;

    @media (min-width: 1440px) {
        height: 36px;
        margin-bottom: 15px;
    }
`

export const IconContainer = styled.div`
    margin-right: 10px;

    @media (min-width: 1440px) {
        margin-right: 16px;
    }
`

export const InputText = styled.input`
    width: 100%;
    height: 30px;
    background-color: transparent;
    color: #FFF;
    border: 0;
    font-size: 14px;

    &:focus {
    outline: none;
    }

    @media (min-width: 1440px) {
        height: 36px;
        font-size: 16px;
    }
`
