import React, { useState } from "react";

export const Questions = ({shuffledQuestions, question, correctAnswer}) => {
   const [clickedBtn, setClickedBtn] = useState(undefined);
    const btnClasses = (index) => {
        console.log(question.answers.indexOf(correctAnswer))
        if(clickedBtn === index && clickedBtn === question.answers.indexOf(correctAnswer)){
            return 'correct'
        }else if(clickedBtn === index && clickedBtn !== question.answers.indexOf(correctAnswer)){
            return 'wrong'
        }else{
            return undefined
        }
    }
   function handleClickBtn(index){
    setClickedBtn(index)
   }

   

  return (
    <div className="questions-block">
      <div className="questions-wrapper">
        <progress max={100} value={10}></progress>
        <p>{question.text}</p>
        <ul>
            {shuffledQuestions.map((answer, index) => (
                <li key={index} >
                   <button className={btnClasses(index)} onClick={() => handleClickBtn(index)}>{answer}</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
