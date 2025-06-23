import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 1440px) {
        max-width: 1200px;
        margin-top: 140px;
        gap: 40px;
    }
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;

    @media (min-width: 1440px) {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 32px;
    }
`

export const TitleHighlight = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;

    @media (min-width: 1440px) {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 32px;
    }
`

export const Column = styled.div`
    flex: ${props => props.$flex};
    padding-right: 24px;

    @media (min-width: 1440px) {
        padding-right: 32px;
    }
`
