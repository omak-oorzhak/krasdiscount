import Head from './Head';
import Nav from './Nav';

export default ({ children}) => (
  <div>
    <Head title="Титул сайта"/>
    <Nav/>
    
    { children }
    
    <footer>
      I`m Footer
    </footer>
  </div>
)
