import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto; // check for this
  height: 55px;
  letter-spacing: 0.5;
  line-height: 28px;

  font: var(--buton-text);
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  border-radius: 28px;

  background-color: var(--dark-purple);
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: var(--light-purple);
  }
`;

export const GradientOneButton = styled(BaseButton)`
  background: linear-gradient(hsl(13, 100%, 64%), hsl(322, 87%, 55%));

  &:hover {
    opacity: 0.5;
  }
`;

export const GradientTwoButton = styled(BaseButton)`
  background: linear-gradient(
    hsl(237, 100%, 64%),
    hsl(322, 87%, 55%)
  );

  &:hover {
    opacity: 0.5;
  }
`;
