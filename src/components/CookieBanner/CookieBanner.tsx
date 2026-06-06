"use client";

import { useState } from "react";
import styled from "styled-components";

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

const RainbowButton = styled.button<{ $variant?: "filled" | "outline" }>`
  position: relative;

  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};

  border: 0;
  border-radius: 10px;

  background:
    linear-gradient(
        ${({ $variant }) =>
          $variant === "filled" ? "#018762, #018762" : "#ffffff, #ffffff"}
      )
      padding-box,
    linear-gradient(90deg, #bc1c1c, #e8a233, #00b15c, #4d8acb, #28588a)
      border-box;

  border: 2px solid transparent;

  color: ${({ $variant, theme }) =>
    $variant === "filled"
      ? theme.colors.background.default
      : theme.colors.text.accent};

  font-size: 1rem;
  font-weight: 800;
  line-height: 1.5;

  cursor: pointer;

  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
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
            <RainbowButton type="button" onClick={() => setIsVisible(false)}>
              Recusar
            </RainbowButton>

            <RainbowButton
              type="button"
              $variant="filled"
              onClick={() => setIsVisible(false)}
            >
              Aceitar
            </RainbowButton>
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
}
