import React, { useContext } from 'react';
import { Container, Lang, ActiveLang } from './LangSwitch.styled';
import { saveToStorage } from "utils";
import { AppContext } from "context/AppContext";

function LangSwitch() {
  const { dispatch, state } = useContext(AppContext);

  const data = [
    {label: 'EN', value: 'en_US'},
    {label: 'AR', value: 'ar_SA'}
  ];

  const setLanguage = (siteLang: string) => {
    saveToStorage('siteLang', siteLang);
		dispatch({
      type: 'setLang', 
      siteLang
    });
	}

  return (
    <Container>
      {data.map((item, key) => {
        const Active = (item.value === state.siteLang) ? ActiveLang : Lang;
        return (
          <Active
            key={key}
            className={key === 1 ? 'border' : ''}
            onClick={() => setLanguage(item.value)}
          >{item.label}</Active>
        )
      })}

    </Container>
  )
}

export default LangSwitch;