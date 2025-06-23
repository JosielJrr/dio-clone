import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;

    @media (min-width: 1440px) {
        margin-bottom: 32px;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;

    @media (min-width: 1440px) {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border-width: 4px;
    }
`

export const NameText = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;

    @media (min-width: 1440px) {
        font-size: 22px;
        line-height: 30px;
    }
`

// Barra de progresso com fundo branco e preenchimento dinâmico
export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    // Preenchimento da barra com base na prop percentual
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.$percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }

    @media (min-width: 1440px) {
        width: 220px;
        height: 8px;

        &::after {
            height: 8px;
        }
    }
`
