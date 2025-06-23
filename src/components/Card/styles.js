import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 32px; 

    border-radius: 8px;
    overflow: hidden;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 220px; 

    object-fit: cover;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`

export const UserInfo = styled.div`
    display: flex;
    margin-bottom: 16px;

    div {
        margin-left: 16px;
    }

    h4{
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export const UserPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #FFFFFF;
`

export const PostInfo = styled.div`
    margin-bottom: 16px;

    h4{
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }

    strong {
        cursor: pointer;
        color: inherit;
    }
`

export const HasInfo = styled.div`
    margin-top: 16px;

    h4{
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF80;
    }

    p {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        gap: 6px;
    }
`
