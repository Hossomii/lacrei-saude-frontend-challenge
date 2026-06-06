"use client";

import Link from "next/link";
import styled from "styled-components";

import { Container } from "../Layout/Container";
import { Button } from "../Button/Button";

const Wrapper = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};

  background: ${({ theme }) => theme.colors.background.default};
`;

const Content = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text.accent};
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.body};

  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
  }
`;

const Actions = styled.div`
  display: flex;
`;

export function Header() {
  return (
    <Wrapper>
      <Container>

        <Content>

          <Logo href="/">
            Lacrei Saúde
          </Logo>

          <Navigation aria-label="Navegação principal">

            <NavLink href="/">
              Início
            </NavLink>

            <NavLink href="/profissionais">
              Profissionais
            </NavLink>

          </Navigation>

          <Actions>
            <Button href="/profissionais">
              Encontrar profissionais
            </Button>
          </Actions>

        </Content>

      </Container>
    </Wrapper>
  );
}