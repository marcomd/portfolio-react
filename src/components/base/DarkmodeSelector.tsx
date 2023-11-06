import {
  useState,
  useEffect
} from "react";

import styled from "styled-components"
//import { MOBILE_LIMIT_WIDTH } from "../styled/StyledGlobal";

const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  overflow: hidden;
  border-radius: 3rem;
  background-color: rgba(200, 200, 200, 0.5);
  transition: 0.5s ease;
  &:hover {
    /* background-color: grey; */
    /* border: 1px solid grey; */
    background-color: rgba(220, 220, 220, 0.5);
    color: #555555;
  }
  &.dark {
    color: white;
  }
  &.dark:hover {
    background-color: rgba(220, 220, 220, 0.6);
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* position: relative;
  top: 0;
  left: 0; */
  /*
  TODO: Would be great have the buttons floating on the left but it breaks tab links layout
  @media only screen and (max-width: MOBILE_LIMIT_WIDTH) {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    align-items: start;
    justify-content: start;
    flex-direction: column;
  }
  */
`

export default function DarkmodeSelector() {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const storageDarkmode = localStorage.getItem('darkmode')
    console.log('storageDarkmode', !!storageDarkmode)
    if (!!storageDarkmode) {
      performDarkmode(true)
    }
  }, [])

  const performDarkmode = (pDarkmode: boolean) => {
    console.log("performDarkmode", pDarkmode)
    setDarkmode(pDarkmode)
    if (pDarkmode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('darkmode', pDarkmode ? 'true' : '')
  };

  return (
  <StyledContainer>
    {darkmode ? ( 
      <StyledButton className="dark" onClick={() => performDarkmode(false)}>
        <span className="material-symbols-outlined">brightness_5</span>
      </StyledButton>
      ) : (
      <StyledButton onClick={() => performDarkmode(true)}>
        <span className="material-symbols-outlined">nightlight_round</span>
      </StyledButton>
      )
    }
  </StyledContainer>
  )
}