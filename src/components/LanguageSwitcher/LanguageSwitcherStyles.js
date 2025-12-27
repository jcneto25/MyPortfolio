import styled from 'styled-components';

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  color: white;

  span {
    color: rgba(255, 255, 255, 0.5);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#13ADC7' : 'rgba(255, 255, 255, 0.5)')};
  font-weight: ${(props) => (props.active ? '600' : '400')};
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.4rem;
  padding: 0;

  &:hover {
    color: #13ADC7;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;
