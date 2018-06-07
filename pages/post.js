import React from 'react';
import { Layout } from '../src/components';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
  <Layout>
      {!props.show.name ? <div>Loading...</div> : null}
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  setTimeout(()=>{

  }, 1000);

  console.log(`Fetched show: ${show.name}`);

  return { show }
};

export default Post;