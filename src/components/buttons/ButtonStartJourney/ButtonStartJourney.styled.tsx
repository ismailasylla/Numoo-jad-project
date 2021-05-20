import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  position: relative;
  letter-spacing: 0.15em;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 28px;
  color: #111;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;

  ::after,
  ::before {
    border: 0;
    content: "";
    position: absolute;
    height: 40%;
    width: 4.5%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: -2;
    border-radius: 50%;
  }

  ::before {
    border: 0;
    border-radius: 50%;
    border-style: solid;
    border-width: 8px;
    border-color: #2a1467;
    top: -0.75rem;
    left: -0.5rem;
    animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s
      infinite alternate;
  }

  ::after {
    border-radius: 50%;
    border-style: solid;
    border-width: 8px;
    border-color: #faaf4a;
    top: 3rem;
    left: 13rem;
    animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s
      infinite alternate;
  }

  :hover {
    color: white;
    border-width: 0px;
  }

  :hover::before,
  :hover::after {
    top: 0;
    height: 100%;
    width: 100%;
    border-width: 0px;
    border-radius: 4px;
    animation: none;
  }

  :hover::after {
    left: 0rem;
    background-color: #9160ef;
  }

  :hover::before {
    top: 0.5rem;
    left: 0.35rem;
    background-color: none;
  }
`;
