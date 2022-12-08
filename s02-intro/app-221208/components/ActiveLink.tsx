import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};
type Props = { href: string; text: string };

export const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
