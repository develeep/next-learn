import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>index</h1>
      <ul>
        <li>
          <Link href="/sub">/sub/index.js</Link> 
        </li>
        <li>
          <Link href="/sub/about">/sub/about.js</Link> 
        </li>
        <li>
          <Link href="/sub/1">/sub/1.js</Link> 
        </li>
        <li>
          <Link href="/sub/2">/sub/2.js</Link> 
        </li>
      </ul>
    </div>
  );
}