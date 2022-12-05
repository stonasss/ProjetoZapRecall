import styled from "styled-components";
import { useState } from "react";
import play from "../assets/img/seta_play.png";
import turn from "../assets/img/seta_virar.png";
import wrong from "../assets/img/icone_erro.png";
import almost from "../assets/img/icone_quase.png";
import right from "../assets/img/icone_certo.png";

export default function Card({
    card,
    cardNumber,
    questionsClicked,
    setQuestionsClicked,
    questionsTurned,
    setQuestionsTurned,
    questionsAnswered,
    setQuestionsAnswered,
    finishedCards,
    setFinishedCards,
}) {

    const [color, setColor] = useState("")
    const [ansIcon, setAnsIcon] = useState("")
    const [dt, setDt] = useState("")

    return (
        <>
            <ClosedQuestion
                data-test="flashcard"
                display={questionsClicked.includes(card) ? true : false}
            >
                <p data-test="flashcard-text">Pergunta {cardNumber + 1}</p>
                <img
                    alt="play"
                    data-test="play-btn"
                    src={play}
                    onClick={() => { setQuestionsClicked([...questionsClicked, card]) }}>
                </img>
            </ClosedQuestion>

            <OpenQuestion
                data-test="flashcard"
                display={!questionsClicked.includes(card) || questionsTurned.includes(card) ? true : false}
            >
                <p data-test="flashcard-text">{card.question}</p>
                <img
                    alt="turn"
                    data-test="turn-btn"
                    src={turn}
                    onClick={() => { setQuestionsTurned([...questionsTurned, card]) }}>
                </img>
            </OpenQuestion>

            <Answer
                data-test="flashcard"
                display={!questionsTurned.includes(card) || questionsAnswered.includes(card) ? true : false}
            >
                <p data-test="flashcard-text">{card.answer}</p>
                <span>
                    <Button
                        data-test="no-btn"
                        color="#FF3030"
                        onClick={() => {
                            setQuestionsAnswered([...questionsAnswered, card])
                            setFinishedCards(finishedCards + 1)
                            setColor("#FF3030")
                            setAnsIcon(wrong)
                            setDt("no-icon")
                        }}>Não lembrei
                    </Button>

                    <Button
                        data-test="partial-btn"
                        color="#FF922E"
                        onClick={() => {
                            setQuestionsAnswered([...questionsAnswered, card])
                            setFinishedCards(finishedCards + 1)
                            setColor("#FF922E")
                            setAnsIcon(almost)
                            setDt("partial-icon")
                        }}>Quase não lembrei
                    </Button>

                    <Button
                        data-test="zap-btn"
                        color="#2FBE34"
                        onClick={() => {
                            setQuestionsAnswered([...questionsAnswered, card])
                            setFinishedCards(finishedCards + 1)
                            setColor("#2FBE34")
                            setAnsIcon(right)
                            setDt("zap-icon")
                        }}>Zap!
                    </Button>
                </span>
            </Answer>

            <AnsweredQuestion
                data-test="flashcard"
                display={!questionsAnswered.includes(card) ? true : false}
                color={color}
            >
                <p data-test="flashcard-text">Pergunta {cardNumber + 1}</p>
                <img
                    alt="answer"
                    data-test={dt}
                    src={ansIcon}
                >
                </img>
            </AnsweredQuestion>
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
    padding: 5px;
`

const AnsweredQuestion = styled.div`
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
        color: ${props => props.color};
        text-decoration: line-through;
    }
`