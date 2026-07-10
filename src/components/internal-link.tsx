import {buttonVariants, linkVariants} from "@heroui/react";
import NextLink from "next/link";
import type {ComponentProps} from "react";

type Props = ComponentProps<typeof NextLink>;
type ButtonLinkProps = Props & {variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost"; size?: "sm" | "md" | "lg"};

const linkStyles = linkVariants();

export function InternalLink({className = "", ...props}: Props) {
  return <NextLink className={`${linkStyles.base()} ${className}`} {...props} />;
}

export function InternalButtonLink({className = "", variant = "primary", size = "md", ...props}: ButtonLinkProps) {
  return <NextLink className={buttonVariants({variant, size, className})} {...props} />;
}
