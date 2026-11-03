import Head from 'next/head';
import WordCounter from '@/components/tools/WordCounter';

export default function WordCounterPage() {
  return (
    <>
      <Head>
        <title>Word Counter | PrivaTools</title>
        <meta
          name="description"
          content="Count words, characters and text statistics privately in your browser."
        />
      </Head>

      <WordCounter />
    </>
  );
}
