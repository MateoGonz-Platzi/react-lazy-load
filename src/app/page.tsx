"use client";
import { useState } from "react";
import Head from "next/head";
import { RandomFox } from "./components/randomFox";
import type { NextPage } from "next";

type ImageItem = Array<{ id: string, url: string }>;

const random = (): number => Math.floor(Math.random() * 123) + 1;

//generate function to random id with uuid
const generateUuid = (): string => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

const Home: NextPage = () => {
  const [images, setImages] = useState<ImageItem>([
    { id: generateUuid(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateUuid(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateUuid(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateUuid(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateUuid(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <div>
      <Head>
        <title>Curso de platzi</title>
        <meta name="description" content="Generated By MateoGonz__" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox alt={"foxImage"} image={url} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home;