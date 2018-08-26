import Head from 'next/head';
import { Component } from 'react';

import Menu from '../components/menu';
import PostMeta from '../components/post-meta';


class EssayLayout extends Component {
  get date() {
    const { meta } = this.props;
    return new Date(meta.date);
  }

  render() {
    const { children, meta } = this.props;
    return (
      <main>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet" />
          <title>
            {meta.title}
          </title>


          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Menu />
        <section>
          <PostMeta
            dateTime={meta.date}
            date={this.date}
            readingTime={children}
            postImage={meta.postImage}
            title={meta.title}
          />
          <article lang={meta.lang || 'en'}>{children}</article>
        </section>
        <style jsx global> {`
          body {
            font-family: 'Raleway', sans-serif;
            margin: 0;
            font-size: 1rem;
            font-weight: 200;
          }
          ::selection {
            background-color: #000;
            color: #FFF;
          }

          section {
            font-size: 1.25rem;
            margin: 0 auto 10vh;
            max-width: 36em;
            width: 100%;
          }

          img {
            max-width: 100%;
          }
        `}
        </style>
      </main>
    );
  }
}

export default EssayLayout;