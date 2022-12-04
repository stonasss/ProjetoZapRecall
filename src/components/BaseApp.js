import styled from "styled-components";
import Logo from "./Logo";
import Card from "./Card";
import CardQuestions from "./CardQuestions";
import { useState } from "react";

export default function BaseApp() {

    const [questionsClicked, setQuestionsClicked] = useState([])
    const [questionsTurned, setQuestionsTurned] = useState([])
    const [questionsAnswered, setQuestionsAnswered] = useState([])

    return (
        <Screen>

            <Logo />
            
            {CardQuestions.map((card, index) => (
                <Card
                    card={card}
                    key={index}
                    cardNumber={index}
                    questionsClicked={questionsClicked}
                    setQuestionsClicked={setQuestionsClicked}
                    questionsTurned={questionsTurned}
                    setQuestionsTurned={setQuestionsTurned}
                    questionsAnswered={questionsAnswered}
                    setQuestionsAnswered={setQuestionsAnswered}
                />
            ))}
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;