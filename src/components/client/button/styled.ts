import styled from "styled-components";

export const ButtonStyled = styled.div`
  button {
    position: relative;
    border-radius: 50px;
    padding: 12px 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    background: var(--color-bg-bg-dark, rgba(11, 14, 21, 1));
    color: rgba(240, 255, 250, 1);
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 12px 0px #ffffff14 inset;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0px -8px 32px 0px rgba(0, 51, 26, 1) inset;
    background: linear-gradient(0deg, rgba(130, 255, 226, 0.01), rgba(130, 255, 226, 0.01)),
      linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
      radial-gradient(231.94% 231.94% at 50% 100%, #6cffc4 0%, rgba(41, 128, 103, 0) 25.24%);
    z-index: 0;
  }

  button svg {
    z-index: 1;
    position: relative;
  }

  button.icon {
    padding: 10px;
  }

  button.consulting {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.transparent {
    background-color: transparent;
  }
`;
