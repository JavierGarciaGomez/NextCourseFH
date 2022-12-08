import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};
type Props = { href: string; text: string };

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
