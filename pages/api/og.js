/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const fontData = await fetch(
    new URL('./og/lexend-deca-v21-latin_latin-ext-700.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());


  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex items-start justify-start bg-white"
        style={{ fontFamily: 'Lexend Deca' }}
      >
        <div tw="flex items-start justify-start h-full">
          <div
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, .85))',
            }}
            tw="absolute inset-0"
          />
          <div tw="flex items-end justify-start w-full h-full relative">
            <div tw="text-[65px] text-white font-black text-center mx-10 mb-10">
              Page title
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Lexend Deca',
          data: fontData,
          style: 700,
        },
      ],
    },
  );
}
