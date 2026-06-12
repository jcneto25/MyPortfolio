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
  border-radius: 6px;
  color: ${(props) => (props.$active ? props.theme.colors.accentTeal : 'rgba(255, 255, 255, 0.5)')};
  font-weight: ${(props) => (props.$active ? '600' : '400')};
  cursor: pointer;
  min-height: 44px;
  min-width: 44px;
  padding: 0.3rem 0.5rem;
  transition: color 0.2s ease, background-color 0.2s ease;
  font-size: 1.4rem;

  &:hover {
    color: ${(props) => props.theme.colors.accentTeal};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 3px;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    min-height: 44px;
    min-width: 44px;
  }
`;
