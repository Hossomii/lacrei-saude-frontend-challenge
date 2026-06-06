"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { Container } from "../Layout/Container";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.default};
`;

const Content = styled.div`
  min-height: 80px;

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
  font-weight: 800;
  line-height: 1;
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

const Navigation = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  position: absolute;
  top: 80px;
  left: 0;
  right: 0;

  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.default};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0;
    border: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.body};
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const Actions = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 44px;
  min-height: 44px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.default};

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1.5rem;

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
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

          <Navigation $isOpen={isMenuOpen} aria-label="Navegação principal">
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Início
            </NavLink>

            <NavLink href="/profissionais" onClick={() => setIsMenuOpen(false)}>
              Profissionais
            </NavLink>
          </Navigation>

          <Actions>
            <Button href="/profissionais">Encontrar profissionais</Button>
          </Actions>

          <MenuButton
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? "×" : "☰"}
          </MenuButton>
        </Content>
      </Container>
    </Wrapper>
  );
}
