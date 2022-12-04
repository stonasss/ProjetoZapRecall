import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CardQuestions from "./CardQuestions";
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"

export default function Card({
    card,
    cardNumber,
    questionsClicked,
    setQuestionsClicked,
    questionsTurned,
    setQuestionsTurned,
    questionsAnswered,
    setQuestionsAnswered
}) {
    console.log(questionsClicked)
    return (
        <>
            <ClosedQuestion display={questionsClicked.includes(card) ? true : false}>
                <p>Pergunta {cardNumber + 1}</p>
                <img src={play}
                    onClick={() => { setQuestionsClicked([...questionsClicked, card]) }}>
                </img>
            </ClosedQuestion>

            <OpenQuestion display={!questionsClicked.includes(card) || questionsTurned.includes(card) ? true : false}>
                <p>{card.question}</p>
                <img src={turn}
                    onClick={() => { setQuestionsTurned([...questionsTurned, card]) }}>
                </img>
            </OpenQuestion>

            <Answer display={questionsTurned.includes(card) ? false : true}>
                <p>{card.answer}</p>
                <span>
                    <Button color="#FF3030">
                        Não lembrei
                    </Button>
                    <Button color="#FF922E">
                        Quase não lembrei
                    </Button>
                    <Button color="#2FBE34">
                        Zap!
                    </Button>
                </span>
            </Answer>
        </>
    )
}

const ClosedQuestion = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.display ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const OpenQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.display ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: space-between;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const Answer = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.display ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: space-between;

    span {
        display: flex;
        justify-content: space-between;
    }
`

const Button = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.color};
    border-radius: 5px;
    border: 1px solid;
    padding:5px;
`