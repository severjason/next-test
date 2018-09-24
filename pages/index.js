import React from 'react';
import { Layout } from '../src/components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <Layout>
    <h1>Batman TV shows1</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id} >
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=superman');
  const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  }
};

export default Index;