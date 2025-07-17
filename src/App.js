// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchResult from './SearchResult';

function Title(){
  return(
    <div className='box'>
      <h1>수능 문학 검색기 β</h1>
      <div className='detail'>수능, 모의평가, 학력평가, EBS 연계교재에 출제된 문학 작품을 검색해보세요.<span className='subdetail'>※ 현재 현대시, 현대소설, 수필, 극만 지원</span></div>
      <div className='detail'>작품 카드 클릭 시 설명과 함께 복사됩니다.</div>
    </div>
  )
}

function SearchForm({handleFormChange}){
  return(
    <div className='box'>
      <input type='text' onChange={handleFormChange} placeholder='검색어 입력: 작가 또는 제목'></input>
    </div>
  )
}

function Credit(){
  return(
    <div className='row-container detail'>
      <div><a href='https://github.com/zanmulgyeol/litfind'>litfind: CSAT Literature Finder</a></div>
      <div className='detail'>© 2025 <a href='https://github.com/zanmulgyeol'>zanmulgyeol</a></div>
    </div>
  )
}

function App(){
  const [keyword, setKeyword] = useState('');

  const handleFormChange = (e) => {
    setKeyword(e.target.value);
  }

  return(
    <div className='App'>
      <header>
        <Title></Title>
        <SearchForm handleFormChange={handleFormChange}></SearchForm>
      </header>
      <main className='box'>
        <SearchResult keyword={keyword}></SearchResult>
      </main>
      <footer>
        <Credit></Credit>
      </footer>
    </div>
  );
}

export default App;
