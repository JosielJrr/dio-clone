import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TextContainer = styled.div`
    width: 388px;
    height: 308px;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;
`

export const TitleLogin = styled.p`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleLogin = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const EsqueciText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
`

export const CriarText = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    color:  #23DD7A;

        &:hover{
            opacity: 0.5;    
        }
`