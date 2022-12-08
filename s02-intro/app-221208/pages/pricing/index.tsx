import Link from "next/link";

import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <h1 className="title">
        Go to
        {<Link href="/"> Pricing</Link>}
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
