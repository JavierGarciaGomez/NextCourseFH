import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="PENDING" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="DOING" />
            <EntryList status={"in-progress"} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="COMPLETED" />
            <EntryList status={"finished"} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
