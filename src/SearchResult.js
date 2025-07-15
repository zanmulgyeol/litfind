import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import SearchItem from './SearchItem';

function SearchResult({keyword}){
  const [modernNovelRows, setModernNovelRows] = useState([]);

  useEffect(() => {
    if(!keyword) return;

    async function loadAndFilter() {
      // 읽기
      const resp = await fetch(`${process.env.PUBLIC_URL}/data.xlsx`);
      const buffer = await resp.arrayBuffer();
      const wb = XLSX.read(buffer, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];

      const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', blankrows: false });

      // 필터링
      const matches = data.filter(row => {
        const a = row[0]?.toString() || '';
        const b = row[1]?.toString() || '';
        return a.includes(keyword) || b.includes(keyword);
      });

      setModernNovelRows(matches);
    }

    loadAndFilter().catch(console.error);
  }, [keyword]);

  if(!keyword){
    return(
      <div>
        <h2>아직 입력된 검색어가 없습니다!</h2>
        <div className='detail'>위의 검색창에 작가 또는 제목을 입력해보세요.</div>
      </div>
    )
  }

  return(
    <div className='search-container'>
      <h2>{keyword}<span className='detail'>의 검색 결과(</span>{modernNovelRows.length}<span className='detail'>)</span></h2>
      <div className='search-list'>
        {modernNovelRows.map((item, index) => (
          <SearchItem key={`searchItem-${index}`} item={item}></SearchItem>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;