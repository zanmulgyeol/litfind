// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchResult from './SearchResult';

function Title(){
  return(
    <div className='box'>
      <h1>수능 문학 검색기 β</h1>
      <div className='detail'>수능, 모의평가, 학력평가, EBS 연계교재에 출제된 문학 작품을 검색해보세요.<span className='subdetail'>※ 현재 고전시가는 지원하지 않음</span></div>
      <div className='detail'>작품 카드 클릭 시 설명과 함께 복사됩니다.</div>
    </div>
  )
}

function SearchForm({handleFormChange, searchMode, setSearchMode, setAccurateMode}){
  const search_options = [
    {'id': 'all', 'label': '전체'},
    {'id': 'author', 'label': '작가'},
    {'id': 'title', 'label': '제목'},
  ]

  return(
    <div className='box' style={{display: 'flex'}}>
      <input type='text' onChange={handleFormChange} placeholder='검색어 입력: 작가 또는 제목' id='search-input'></input>
      <div style={{display: 'flex', marginLeft: '.5rem'}}>
        {search_options.map((opt) => (
          <div>
            <label key={opt.id} for={`searchMode-${opt.id}`}>{opt.label}</label>
            <input type='radio' value={opt.id} checked={searchMode === opt.id} onChange={(e) => setSearchMode(e.target.value)} id={`searchMode-${opt.id}`} name={`searchMode-${opt.id}`}></input>
          </div>
        ))}
      </div>
      <div style={{marginLeft: '.5rem'}}>
        <div>
          <label key='accurate' for='accurateMode'>정확히 일치</label>
          <input type='checkbox' onChange={(e) => setAccurateMode(e.target.checked)} id='accurate' name='accurate'></input>
        </div>
      </div>
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
  const [searchMode, setSearchMode] = useState('all');
  const [accurateMode, setAccurateMode] = useState(false);

  const handleFormChange = (e) => {
    setKeyword(e.target.value);
  }

  return(
    <div className='App'>
      <header>
        <Title></Title>
        <SearchForm handleFormChange={handleFormChange} searchMode={searchMode} setSearchMode={setSearchMode} setAccurateMode={setAccurateMode}></SearchForm>
      </header>
      <main className='box'>
        <SearchResult keyword={keyword} searchMode={searchMode} accurateMode={accurateMode}></SearchResult>
      </main>
      <footer>
        <Credit></Credit>
      </footer>
    </div>
  );
}

export default App;
