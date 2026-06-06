"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { FiInfo } from "react-icons/fi";

import { Button } from "../Button/Button";
import { Container } from "../Layout/Container";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #f5fffb;
`;

const Content = styled.div`
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 1.25rem;
  font-weight: 900;
  line-height: 1;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const LogoSymbol = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.08em;

  line-height: 1;
`;

const LogoName = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
`;

const DesktopArea = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 700;
  font-size: 0.95rem;

  &:hover {
  color: ${({ theme }) => theme.colors.text.heading};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const MobileArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;

  border: 0;
  border-radius: 50%;

  background: transparent;
  color: ${({ theme }) => theme.colors.text.accent};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => theme.spacing.lg};

  border-top: 1px solid ${({ theme }) => theme.colors.border.default};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo href="/" aria-label="Página inicial da Lacrei Saúde">
            <LogoSymbol aria-hidden="true">LS</LogoSymbol>
            <LogoName>Lacrei Saúde</LogoName>
          </Logo>

          <DesktopArea>
            <Navigation aria-label="Navegação principal">
              <NavLink href="/">Quem somos</NavLink>
              <NavLink href="/">Ajuda</NavLink>
            </Navigation>

            <Button href="/profissionais">Entrar</Button>
          </DesktopArea>

          <MobileArea>
            <IconButton
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <FiInfo aria-hidden="true" />
            </IconButton>

            <Button href="/profissionais">Entrar</Button>
          </MobileArea>
        </Content>

        <MobileMenu $isOpen={isMenuOpen} aria-label="Navegação mobile">
          <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Quem somos
          </NavLink>

          <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Ajuda
          </NavLink>
        </MobileMenu>
      </Container>
    </Wrapper>
  );
}