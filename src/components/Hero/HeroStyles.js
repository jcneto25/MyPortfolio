import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  margin-top: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    gap: 12px;
  }
`;

export const ButtonAsLink = styled.a`
  min-width: 280px;
  min-height: 56px;
  padding: 16px 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background: ${(props) => props.theme.gradients.hero};
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.45);
    opacity: 0.96;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-width: 220px;
    min-height: 48px;
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    min-width: 100%;
    min-height: 44px;
    font-size: 14px;
  }
`;

export const SecondaryActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const SecondaryLink = styled.a`
  padding: 14px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: border-color 0.2s ease, background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(139, 92, 246, 0.12);
    border-color: rgba(16, 185, 129, 0.4);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;

export const SupportingText = styled.p`
  max-width: 720px;
  margin: -8px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
  line-height: 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ProofList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
`;

export const ProofItem = styled.li`
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.55);
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 22px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
`;
