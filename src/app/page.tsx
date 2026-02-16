import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Satya Dillikar</h1>
      <h2 className="text-xl mb-8">Accomplished technology leader with over 20 years of experience leading global teams to deliver innovative, scalable, and mission-critical software products</h2>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/blog" className="text-blue-500 hover:underline">Blog</Link></li>
          <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link href="/cv" className="text-blue-500 hover:underline">Resume</Link></li>
          <li><Link href="/photos" className="text-blue-500 hover:underline">Gallery</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;