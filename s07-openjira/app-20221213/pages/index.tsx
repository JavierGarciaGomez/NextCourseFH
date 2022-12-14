import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layouts";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Typography variant="h1" color="secondary">
        Hola, mundo, munda
      </Typography>
    </Layout>
  );
}
