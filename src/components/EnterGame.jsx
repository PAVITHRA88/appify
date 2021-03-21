import React, { useEffect, useState } from 'react';
import _ from "lodash";
import { getWordsMeanLike, getWordsSpellLike } from './../services/wordService';
import Game from './game';
import SearchBox from './searchBox';
import Table from './common/table';
import Button from './common/button';

const EnterGame = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const [words, setWords] = useState([]);
  const [confusers, setConfusers] = useState([]);
  const [options, setOptions] = useState([]);
  const [gameEntry, setGameEntry] = useState(false);
  const [answers, setAnswers] = useState([]);
  const headers = ['word', 'score'];
  const minCharLimit = 3;

  useEffect(() => {
    searchQuery && searchQuery.trim().length >= minCharLimit ? callToGetMovies() : setWords([]);
  }, [searchQuery]);

  const callToGetMovies = async () => {
    const { data: suggestions } = await getWordsMeanLike(searchQuery);
    const { data: confusers } = await getWordsSpellLike(searchQuery);
    setWords(suggestions);
    setConfusers(confusers);
  };

  const handleSearch = query => setSearchQuery(query);

  const gamer = () => {
    const randomChoosenAnswers = _.sampleSize(words, 5);
    const randomChoosenConfusers = _.sampleSize(confusers, 5);
    const options = [];
    randomChoosenAnswers.map(randomAnswer => options.push(randomAnswer.word));
    randomChoosenConfusers.map(randomConfuser => options.push(randomConfuser.word));
    const shuffledOptions = _.shuffle(options);
    setOptions(shuffledOptions);
    setAnswers(randomChoosenAnswers);
    setGameEntry(true);
  }

  const renderSearchBox = () => {
    return <SearchBox value={searchQuery} onChange={handleSearch} />
  }

  const renderTable = () => searchQueryMinLimitReached ? words.length > 0 ? <Table headers={headers} columns={words} /> : 'try another word' : 'Characters should be minimum three';

  const renderMeansLikeWords = () => <div className="d-flex">
    {
      options.length > 0 && options.map((option, index) => <div key={index} className="box">{option}</div>)
    }
  </div>

  const renderButton = () => <Button onclick={gamer} label="Enter Game" disable={searchQueryMinLimitReached} />

  let searchQueryMinLimitReached = searchQuery.trim().length >= minCharLimit ? true : false;

  return !gameEntry ? <div className="d-block">
    {renderSearchBox()}
    {renderTable()}
    {renderButton()}
    {renderMeansLikeWords()}
  </div>
    :
    <Game options={options} answers={answers} {...props} />
}

export default EnterGame;