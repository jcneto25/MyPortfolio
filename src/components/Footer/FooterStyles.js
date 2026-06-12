import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: 100%;
  }
`;

export const ContactIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 0 24px;
  max-width: 720px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 28px 0 20px;
    gap: 10px;
  }
`;

export const FooterHeading = styled.h3`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  padding: 0 0 12px;
  margin: 0;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    padding-bottom: 8px;
  }
`;

export const LinkColumn = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  width: fit-content;
  max-width: 100%;
  margin-top: 14px;
  min-height: 48px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 18px;
  line-height: 30px;
  transition: color 0.2s ease, transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.agentGreen};
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 4px;
    border-radius: 10px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
    gap: 12px;
    margin-top: 12px;
  }
`;

export const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: ${(props) => props.theme.colors.agentGreen};
  background: rgba(16, 185, 129, 0.12);

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 42px;
    height: 42px;
  }
`;

export const ContactDetails = styled.span`
  display: inline-block;
  word-break: break-word;
`;
