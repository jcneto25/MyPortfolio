import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 1.6rem;
  row-gap: 1.2rem;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 2rem 48px 0;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: minmax(0, 1fr);
    justify-items: stretch;
    padding: 1.6rem 32px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 16px 0;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 0;

  a {
    min-width: 0;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 0;

  li {
    list-style: none;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    justify-content: flex-start;
  }
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    justify-content: flex-start;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 6px;
  display: inline-flex;
  padding: 0.4rem 0.6rem;
  transition: color 0.2s ease, opacity 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 4px;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    min-height: 44px;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  align-items: center;
  border-radius: 999px;
  color: white;
  display: inline-flex;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.agentGreen};
    outline-offset: 4px;
  }
`;
