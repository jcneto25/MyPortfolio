import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: ${props => props.isAgent ? '200px' : '100%'};
  object-fit: cover;
  overflow: hidden;
`;

export const BlogCard = styled.div`
  position: relative;
  border-radius: ${props => props.isAgent ? '12px' : '10px'};
  border: ${props => props.isAgent
    ? `2px solid ${props.theme.colors.borderAgent}`
    : `1px solid ${props.theme.colors.borderTraditional}`
  };
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: ${props => props.isAgent ? '400px' : '350px'};
  background: ${props => props.theme.colors.cards};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    ${props => props.isAgent && 'transform: translateY(-4px);'}
    ${props => props.isAgent && 'box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);'}
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.isAgent ? props.theme.colors.agentPurple : '#9cc9e3'};
  padding: .5rem 0;
  font-size: ${props => props.main ? '2rem' : '1.8rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${props => props.isAgent ? props.theme.colors.agentPurple : '#d0bb57'};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: ${props => props.isAgent ? '0 24px' : '0 50px'};
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem;
  }
`;

export const ExternalLinks = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 16px;
  padding: 8px 16px;
  background: ${props => props.isAgent
    ? props.theme.gradients.button
    : '#6b3030'};
  border-radius: 8px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 1rem;
`;

export const Tag = styled.li`
  color: ${props => props.isAgent ? props.theme.colors.agentGreen : '#d8bfbf'};
  font-size: ${props => props.isAgent ? '13px' : '15px'};
  font-weight: ${props => props.isAgent ? '600' : '400'};
`;

export const ProjectSection = styled.div`
  margin: 32px 0;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.isCompact ? '300px' : '400px'}, 1fr));
  gap: ${props => props.isCompact ? '16px' : '24px'};
  padding: ${props => props.isCompact ? '16px' : '24px'};
  place-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

export const AgentBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${props => props.theme.colors.agentPurple};
  color: ${props => props.theme.colors.textPrimary};
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  z-index: 10;
`;
