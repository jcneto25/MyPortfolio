import styled from 'styled-components';

export const TechGroup = styled.div`
  margin: ${props => {
    if (props.$isPrimary) return '48px 0';
    if (props.$isSecondary) return '32px 0';
    return '24px 0';
  }};
  padding: 24px;
  background: ${props => {
    if (props.$isPrimary) return props.theme.colors.cards;
    if (props.$isSecondary) return 'rgba(37, 37, 37, 0.5)';
    return 'transparent';
  }};
  border-radius: ${props => props.$isPrimary ? '12px' : '8px'};
  border: ${props => props.$isPrimary
    ? `1px solid ${props.theme.colors.borderAgent}`
    : 'none'};
`;

export const TechGroupTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 16px;
`;

export const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.cards};
  }
`;

export const TechIcon = styled.div`
  color: ${props => props.$muted
    ? props.theme.colors.textMuted
    : props.theme.colors.agentPurple};
  flex-shrink: 0;
`;

export const TechContent = styled.div`
  flex: 1;
`;

export const TechItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.$muted
    ? props.theme.colors.textMuted
    : props.theme.colors.textPrimary};
  margin-bottom: 4px;
`;

export const TechItemDesc = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => props.$muted
    ? props.theme.colors.textMuted
    : props.theme.colors.textSecondary};
`;

// Keep legacy exports for compatibility
export const List = TechList;
export const ListItem = TechItem;
export const ListContainer = TechContent;
export const ListParagraph = TechItemDesc;
export const ListTitle = TechItemTitle;
