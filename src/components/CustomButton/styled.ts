import styled from "styled-components";

export const ButtonStyled = styled.div`
  .primary {
    background: radial-gradient(
      circle,
      rgba(46, 125, 50, 0.8) 0%,
      rgba(0, 0, 0, 1) 70%
    );
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
