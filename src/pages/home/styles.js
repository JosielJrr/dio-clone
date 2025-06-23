import styled from 'styled-components';

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

export const Title = styled.h2`
    width: 320px;

    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    
    margin-bottom: 20px;

    @media (min-width: 1440px) {
        font-size: 36px;
        line-height: 48px;
        width: 360px;
        margin-bottom: 28px;
    }
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    width: 420px;

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    margin-bottom: 20px;

    @media (min-width: 1440px) {
        font-size: 18px;
        line-height: 26px;
        width: 480px;
        margin-bottom: 28px;
    }
`
