import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 0;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    background-color: #2D2037;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-size: 18px;
    line-height: 25px;
    text-decoration: none;
    margin-right: 12px;
    color: #FFF;
`

export const MenuRight = styled.a`
    font-size: 12px;
    line-height: 25px;
    text-decoration: none;
    margin-right: 12px;
    color: #FFF;
        &:hover{
            opacity: 0.5;
        }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border: 2px solid #FFF;
    border-radius: 22px;
`

export const Input = styled.input`
    height: 100%;
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFF;
`