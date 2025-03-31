import styled from "styled-components";

export const ButtonStyled = styled.div`
   .primary {
    position: relative;
    border-radius: 50px;
    padding: 12px 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    background: var(--color-bg-bg-dark, rgba(11, 14, 21, 1));
    color: rgba(240, 255, 250, 1);
  }

  .primary::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0px -8px 32px 0px rgba(0, 51, 26, 1) inset;
    background: linear-gradient(
        0deg,
        rgba(130, 255, 226, 0.01),
        rgba(130, 255, 226, 0.01)
      ),
      linear-gradient(
        180deg,
        rgba(243, 238, 255, 0) 0%,
        rgba(243, 238, 255, 0.04) 100%
      ),
      radial-gradient(
        231.94% 231.94% at 50% 100%,
        #6cffc4 0%,
        rgba(41, 128, 103, 0) 25.24%
      );
  }

  .contact-home {
    background: radial-gradient(circle, rgb(73 206 80 / 80%) 0%, #163f20 83%);
    border-radius: 50px;
    padding: 12px 24px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 18px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.5),
      0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.6),
        0 5px 8px rgba(0, 0, 0, 0.4);
    }
  }

   .icon {
    background: radial-gradient(
      circle,
      rgba(46, 125, 50, 0.8) 0%,
      rgba(0, 0, 0, 1) 70%
    );
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 18px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.5),
      0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.6),
        0 5px 8px rgba(0, 0, 0, 0.4);
    }
`;
