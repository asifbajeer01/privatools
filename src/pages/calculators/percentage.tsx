import Head from 'next/head';
import PercentageCalculator from '@/components/tools/PercentageCalculator';

export default function PercentagePage() {
  return (
    <>
      <Head>
        <title>Percentage Calculator | PrivaTools</title>
        <meta
          name="description"
          content="Calculate percentages quickly using PrivaTools."
        />
      </Head>

      <PercentageCalculator />
    </>
  );
}
