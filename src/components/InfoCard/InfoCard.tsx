"use client";

import styled from "styled-components";

import { Button } from "../Button/Button";

type InfoCardProps = {
  name: string;
  specialty: string;
  city: string;
};

const Card = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border.default};

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #018762 0%,
    #004e9b 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.text.heading};
`;

const Specialty = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
`;

const City = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
`;

const Badge = styled.span`
  width: fit-content;

  padding: 6px 12px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.background.subtle};

  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 0.875rem;
  font-weight: 700;
`;

export function InfoCard({
  name,
  specialty,
  city,
}: InfoCardProps) {
  return (
    <Card>

      <Avatar>
        {name.charAt(0)}
      </Avatar>

      <Name>{name}</Name>

      <Specialty>
        {specialty}
      </Specialty>

      <City>
        {city}
      </City>

      <Badge>
        Atendimento Inclusivo
      </Badge>

      <Button variant="secondary">
        Visualizar perfil
      </Button>

    </Card>
  );
}