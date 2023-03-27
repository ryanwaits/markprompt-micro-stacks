import Head from 'next/head';
import { Markprompt } from '@/components/Markprompt';
import { MicroStacksIcon } from '@/components/icons/microstacks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Markprompt Starter Template</title>
        <meta
          name="description"
          content="A starter template featuring the Markprompt React component"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center gap-12 p-8">
            <div className="max-h-[480px] w-full max-w-[720px] flex-grow rounded-xl border border-neutral-900 bg-neutral-900/25 p-8 shadow-md">
              {process.env.NEXT_PUBLIC_PROJECT_KEY ? (
                <Markprompt
                  onDark
                  projectKey={process.env.NEXT_PUBLIC_PROJECT_KEY!}
                />
              ) : (
                <p className="px-4 pt-12 text-center text-sm text-neutral-500">
                  You need to set the{' '}
                  <code className="font-mono text-sky-700">
                    NEXT_PUBLIC_PROJECT_KEY
                  </code>{' '}
                  environment variable to your project&apos;s public API key.
                  You can find your key in the Markprompt dashboard, under the
                  project settings.
                </p>
              )}
            </div>
            <div className="flex flex-none flex-col items-center justify-center gap-2">
              <MicroStacksIcon className="h-12 w-12 text-white" />
              <p className="text-xl font-bold text-white">micro-stacks</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
