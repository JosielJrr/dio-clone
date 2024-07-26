import styled from 'styled-components';

export const Container = styled.div`
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
    height: 425px;
    position: relative;
`

export const Text = styled.p`
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    position: absolute;
    top: 0;
`
export const Wrapper = styled.div`
    width: 374px;
`

export const TitleLogin = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    margin-bottom: 5px;
`

export const SubtitleLogin = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    margin-bottom: 15px;
`
export const TextLogin = styled.p`
    width: 372px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    margin: 20px 0;
`

export const Login = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    margin-bottom: 20px;

    a{
        display: inline;
        text-decoration: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        line-height: 19.07px;
        color:  #23DD7A;

            &:hover{
                opacity: 0.5;    
            }
    }
`


