"use client";

import { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { Container } from "../Layout/Container";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  padding: ${({ theme }) => theme.spacing.md} 0;

  border-top: 1px solid ${({ theme }) => theme.colors.border.default};

  background: ${({ theme }) => theme.colors.background.default};

  box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.08);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Wrapper role="region" aria-label="Aviso de cookies">
      <Container>
        <Content>
          <Text>
            Utilizamos cookies para melhorar sua experiência de navegação e
            entender como você interage com nosso conteúdo.
          </Text>

          <Actions>
            <Button variant="secondary" onClick={() => setIsVisible(false)}>
              Recusar
            </Button>

            <Button onClick={() => setIsVisible(false)}>Aceitar</Button>
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
}