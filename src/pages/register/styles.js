import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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
`;

export const TextContainer = styled.div`
    width: 388px;

    display: flex;
    align-items: center;

    @media (min-width: 1440px) {
        width: 460px;
        height: auto;
    }
`;

export const Text = styled.p`
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    max-width: 100%;

    @media (min-width: 1440px) {
        font-size: 36px;
        line-height: 50px;
    }
`;

export const Wrapper = styled.div`
    width: 374px;

    @media (min-width: 1440px) {
        width: 480px;
    }
`;

export const TitleLogin = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    margin-bottom: 5px;

    @media (min-width: 1440px) {
        font-size: 36px;
        line-height: 50px;
        margin-bottom: 8px;
    }
`;

export const SubtitleLogin = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    margin-bottom: 15px;

    @media (min-width: 1440px) {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 20px;
    }
`;

export const SpanError = styled.span`
    color: #ff4d4f;
    font-size: 0.875rem; 
    margin-bottom: 20px;   
    display: block;
`;

export const TextLogin = styled.p`
    width: 372px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    margin: 20px 0;

    @media (min-width: 1440px) {
        width: 450px;
        font-size: 16px;
        line-height: 28px;
        margin: 24px 0;
    }
`;

export const Login = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    margin-bottom: 20px;

    @media (min-width: 1440px) {
        font-size: 16px;
        line-height: 21px;
    }
`;

export const StyledLink = styled(Link)`
    display: inline;
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
`;
