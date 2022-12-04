import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png"

export default function Logo() {
    return(
        <Container>
            <Title>
                <img src={logo} alt="logo"></img>
                <p>ZapRecall</p>
            </Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`;

const Title = styled.div`
    background-color: #FB6B6B;
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }

    p {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;