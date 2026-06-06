"use client";

import Link from "next/link";
import styled from "styled-components";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
};

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};

  border-radius: 8px;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.background.accent
        : theme.colors.border.accent};

  background:
    ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.background.accent
        : theme.colors.background.default};

  color:
    ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.background.default
        : theme.colors.text.accent};

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;

  cursor: pointer;
  transition:
    background 150ms ease,
    color 150ms ease,
    border-color 150ms ease;

  &:hover {
    background:
      ${({ theme, $variant }) =>
        $variant === "primary"
          ? theme.colors.background.accentHover
          : theme.colors.background.subtle};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};

  border-radius: 8px;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.background.accent
        : theme.colors.border.accent};

  background: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.background.accent
      : theme.colors.background.default};

  color: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.background.default
      : theme.colors.text.accent};

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;

  cursor: pointer;
  transition:
    background 150ms ease,
    color 150ms ease,
    border-color 150ms ease;

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.background.accentHover
        : theme.colors.background.subtle};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <StyledLink href={href} $variant={variant}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton type="button" onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
}