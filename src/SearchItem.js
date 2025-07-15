import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

function SearchItem({item}){
  const litType = {'modernNovel': '현대소설', 'drama': '극'};
  const type = item[9];

  const [copiedText, copy] = useCopyToClipboard();

  const handleClick = () => {
    let text = `${item[0]}, ${item[1]}\n${litType[type]}`;
    if(item[2] !== '') text += `\n평가원: ${item[2]}`;
    if(item[3] !== '') text += `\n사관/경찰: ${item[3]}`;
    if(item[6] !== '') text += `\n고1: ${item[6]}`;
    if(item[5] !== '') text += `\n고2: ${item[5]}`;
    if(item[4] !== '') text += `\n고3: ${item[4]}`;
    if(item[7] !== '') text += `\nEBS: ${item[7]}`;
    if(item[8] !== '') text += `\n기타: ${item[8]}`;

    copy(text);
  };

  return(
    <div onClick={handleClick} className={`search-item search-item-${type}`}>
      <h3 style={{marginTop: 0, marginBottom: 0, fontSize: '1.3rem'}}>{item[0]}, {item[1]}</h3>
      <div>{litType[type]}</div>
      {item[2]===''?<></>:<div>
        <span className='search-detail-prefix'>평가원</span>
        <span>{item[2]}</span>
      </div>}
      {item[3]===''?<></>:<div>
        <span className='search-detail-prefix'>사관/경찰</span>
        <span>{item[3]}</span>
      </div>}
      {item[6]===''?<></>:<div>
        <span className='search-detail-prefix'>고1</span>
        <span>{item[6]}</span>
      </div>}
      {item[5]===''?<></>:<div>
        <span className='search-detail-prefix'>고2</span>
        <span>{item[5]}</span>
      </div>}
      {item[4]===''?<></>:<div>
        <span className='search-detail-prefix'>고3</span>
        <span>{item[4]}</span>
      </div>}
      {item[7]===''?<></>:<div>
        <span className='search-detail-prefix'>EBS</span>
        <span>{item[7]}</span>
      </div>}
      {item[8]===''?<></>:<div>
        <span className='search-detail-prefix'>기타</span>
        <span>{item[8]}</span>
      </div>}
    </div>
  )
}

export default SearchItem;