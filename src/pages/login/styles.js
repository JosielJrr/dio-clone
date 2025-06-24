import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1440px) {
        max-width: 1200px;
        margin-top: 140px;
        gap: 40px;
    }
`

export const TextContainer = styled.div`
    width: 388px;
    height: 308px;

    @media (min-width: 1440px) {
        width: 450px;
        height: auto;
    }
`

export const Wrapper = styled.div`
    width: 400px; /* fixa mesmo */
    max-width: none;
    flex-grow: 1;

    @media (min-width: 1440px) {
        width: 480px;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media (min-width: 1440px) {
        margin-top: 28px;
    }
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    @media (min-width: 1440px) {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 28px;
    }
`

export const TitleLogin = styled.p`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;

    @media (min-width: 1440px) {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 12px;
    }
`

export const SubtitleLogin = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;

    @media (min-width: 1440px) {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 40px;
    }
`
export const SpanError = styled.span`
    color: #ff4d4f;
    font-size: 0.875rem; 
    margin-bottom: 20px;   
    display: block;
`;

export const ForgotPasswordText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #E5E044;

    @media (min-width: 1440px) {
        font-size: 16px;
        line-height: 21px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    color: #23DD7A;

    &:hover {
        opacity: 0.5;
    }

    @media (min-width: 1440px) {
        font-size: 16px;
        line-height: 21px;
    }
`
