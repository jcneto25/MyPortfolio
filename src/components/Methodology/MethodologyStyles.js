import styled from 'styled-components';

export const PhaseCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const PhaseCard = styled.div`
  background: ${props => props.theme.colors.cards};
  border: 2px solid ${props => props.theme.colors.agentPurple};
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
  }
`;

export const PhaseNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.theme.colors.agentPurple};
  margin-bottom: 12px;
`;

export const PhaseTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 12px;
`;

export const PhaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSecondary};
`;

export const BenefitsContainer = styled.div`
  margin: 32px 0;
  padding: 0 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const BenefitItem = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin: 12px 0;

  &:before {
    content: "✓ ";
    color: ${props => props.theme.colors.agentGreen};
    font-weight: 700;
    margin-right: 8px;
  }
`;

export const CTAContainer = styled.div`
  text-align: center;
  margin: 48px 0 24px;
`;

export const CTALink = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.gradients.button};
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.5);
  }
`;
