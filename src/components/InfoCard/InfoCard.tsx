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

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.background.default};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
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

export function InfoCard({
  name,
  specialty,
  city,
}: InfoCardProps) {
  return (
    <Card>

      <Name>{name}</Name>

      <Specialty>
        {specialty}
      </Specialty>

      <City>
        {city}
      </City>

      <Button variant="secondary">
        Visualizar perfil
      </Button>

    </Card>
  );
}