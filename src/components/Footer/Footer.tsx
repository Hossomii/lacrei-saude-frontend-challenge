"use client";

import Link from "next/link";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Container } from "../Layout/Container";

const Wrapper = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.lg};

  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.default};
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.5fr repeat(3, 1fr);
    align-items: flex-start;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  width: fit-content;

  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 1.5rem;
  font-weight: 900;
`;

const LogoSymbol = styled.span`
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: -0.08em;
`;

const SocialList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.accent};

  border-radius: 50%;

  transition:
    background 150ms ease,
    transform 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.subtle};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ColumnTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.body};
  font-size: 0.95rem;

  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

const Divider = styled.hr`
  margin: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.lg};

  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const Legal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  color: ${({ theme }) => theme.colors.text.body};
  font-size: 0.875rem;
  line-height: 1.6;
`;

const BackToTop = styled.button`
  position: fixed;
  right: ${({ theme }) => theme.spacing.lg};
  bottom: ${({ theme }) => theme.spacing.xxl};

  width: 44px;
  height: 44px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 1.25rem;
  font-weight: 900;

  cursor: pointer;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

export function Footer() {
  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Brand>
            <Logo href="/" aria-label="Página inicial da Lacrei Saúde">
              <LogoSymbol aria-hidden="true">LS</LogoSymbol>
              Lacrei Saúde
            </Logo>

            <SocialList aria-label="Redes sociais da Lacrei Saúde">
              <SocialLink href="#" aria-label="Facebook da Lacrei Saúde">
                <FaFacebookF aria-hidden="true" />
              </SocialLink>

              <SocialLink href="#" aria-label="Instagram da Lacrei Saúde">
                <FaInstagram aria-hidden="true" />
              </SocialLink>

              <SocialLink href="#" aria-label="LinkedIn da Lacrei Saúde">
                <FaLinkedinIn aria-hidden="true" />
              </SocialLink>

              <SocialLink
                href="mailto:contato@lacreisaude.com.br"
                aria-label="Enviar e-mail para Lacrei Saúde"
              >
                <MdEmail aria-hidden="true" />
              </SocialLink>
            </SocialList>
          </Brand>

          <Column aria-label="Links sobre a Lacrei Saúde">
            <ColumnTitle>Lacrei Saúde</ColumnTitle>
            <FooterLink href="/">Quem Somos</FooterLink>
            <FooterLink href="/">Nosso Propósito</FooterLink>
            <FooterLink href="/">Missão, Visão e Valor</FooterLink>
            <FooterLink href="/">Acessibilidade</FooterLink>
          </Column>

          <Column aria-label="Links sobre saúde">
            <ColumnTitle>Saúde</ColumnTitle>
            <FooterLink href="/profissionais">Buscar atendimento</FooterLink>
            <FooterLink href="/profissionais">Oferecer atendimento</FooterLink>
          </Column>

          <Column aria-label="Links de segurança e privacidade">
            <ColumnTitle>Segurança e Privacidade</ColumnTitle>
            <FooterLink href="/">Política de Privacidade</FooterLink>
            <FooterLink href="/">Termos de Uso</FooterLink>
            <FooterLink href="/">Direitos de Titular</FooterLink>
          </Column>
        </Content>

        <Divider />

        <Legal>
          <p>
            A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
            emergência procure o hospital mais próximo.
          </p>

          <p>
            Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o
            site https://cvv.org.br
          </p>

          <p>
            Copyright © 2023 Lacrei Saúde. Todos os direitos reservados. CNPJ:
            51.265.351/0001-65
          </p>
        </Legal>
      </Container>

      <BackToTop
        type="button"
        aria-label="Voltar ao topo da página"
        onClick={handleBackToTop}
      >
        ↑
      </BackToTop>
    </Wrapper>
  );
}