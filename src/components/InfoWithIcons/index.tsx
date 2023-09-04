import { InfoWithIconsContainer, InfoWithIconsSpan } from "./styles";

export type VariantType =
  | "yellow-dark"
  | "yellow"
  | "purple-dark"
  | "purple"
  | "base-text";

interface InfoWithIconsProps {
  variant: VariantType;
  icon: React.ReactNode;
  info: React.ReactNode;
}

export function InfoWithIcons({ variant, icon, info }: InfoWithIconsProps) {
  return (
    <InfoWithIconsContainer>
      <InfoWithIconsSpan variant={variant}>{icon}</InfoWithIconsSpan>
      {info}
    </InfoWithIconsContainer>
  );
}
