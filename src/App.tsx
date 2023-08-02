import React, {useState} from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {Filters} from "./features/Filters/Filters";
import {Characters} from "./features/Characters/Characters";
import {Pagination} from "./features/Pagination/Pagination";
import {InfoOfCharacter} from "./features/InfoOfCharacter/InfoOfCharacter";

function App() {
    const [isOpenCharacterInfo, setIsOpenCharacterInfo] = useState(false)
  return (
      <div>
          <div>
              <Header/>
              <Filters/>
              <Pagination/>
              <Characters setIsOpenCharacterInfo={setIsOpenCharacterInfo}/>
              <Pagination/>
          </div>
          {isOpenCharacterInfo &&
              <InfoOfCharacter setIsOpenCharacterInfo={setIsOpenCharacterInfo}/>
          }
      </div>
  );
}

export default App;
