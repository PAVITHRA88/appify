import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Button from './common/button';

const Game = ({ options, answers, history }) => {

    const [optionsList, setOptionsList] = useState([]);

    useEffect(() => {
        let optionList = [];
        optionList.push(options.map((option => { return { 'word': option, 'selected': false } })))
        setOptionsList(...optionList);
    }, []);

    const setAnswers = option => {
        let optionsListSet = [...optionsList];
        const index = optionsListSet.indexOf(option);
        optionsListSet[index].selected = !optionsListSet[index].selected;
        setOptionsList(optionsListSet);
    }

    const getScore = () => {
        let selectedAnswers = optionsList.filter(option => option.selected).map(option => option.word);
        const answeredWord = answers.map(answer => answer.word);
        const score = _.intersectionWith(selectedAnswers, answeredWord, _.isEqual).length;
        localStorage.setItem('score', score);
        history.replace('/score');
    }

    const renderTestWords = () => optionsList.map((option, index) => <button disabled={!option.selected && selectedItems >= 5 ? true : false} key={index} className={`box ${option.selected && 'selected-box'}`} onClick={() => setAnswers(option)}>{option.word}</button>)

    const renderButton = () => <Button onclick={getScore} label="Get Score" disable={selectedItems >= 5 ? true : false} />

    let selectedItems = optionsList.filter(option => option.selected).length;

    return <div className="game-container">
        {renderTestWords()}
        {renderButton()}
    </div>;
}

export default Game;