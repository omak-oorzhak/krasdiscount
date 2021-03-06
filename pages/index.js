/*import Head from './../components/Head';
import Nav from './../components/Nav';*/
import PostLink from './../components/PostLink';
import Layout from './../components/Layout';

const done = {
  first: 'Lorem HTML5',
  second: 'Lorem Bulma',
  third: 'Lorem Next.js'
};
export default () => (
  <Layout>
    <h1 className="title">Title</h1>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores culpa dolorum laboriosam nulla quaerat temporibus tenetur voluptas voluptatem voluptatibus!</p>
  
    <div className="blog">
      <h3>Последние записи:</h3>
      <ul>
        <PostLink id="nextjs" title={done.third}/>
        <PostLink id="bulma" title={done.second}/>
        <PostLink id="html" title={done.first}/>
      </ul>
    </div>
  
    <style jsx>{`
      .title { font-size: 36px; }
    `}</style>
  </Layout>
)
