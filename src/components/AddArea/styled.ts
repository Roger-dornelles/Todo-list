import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding:10px;
    margin: 20px 0;
    align-items: center;
    display: flex;

    .image{
        margin-right: 5px;
        font-weight: bold;
    }

    input{
        border: 0;
        color: #fff;
        outline: 0;
        background-color: transparent;
        flex: 1;
        font-size: 18px;
    }
`;