import { Cards } from "nextra/components";

type CardProps = {
  image?: boolean;
  arrow?: boolean;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
};
export const Card: React.FC<CardProps> = ({
  image = true,
  arrow = true,
  ...props
}) => {
  return <Cards.Card image={image} arrow={arrow} {...props} />;
};
