import componentsImg from './assets/Components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from'./components/Header.jsx';

function CoreConcept({image, title, description}) {
  return <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image}/>
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description} 
              image={CORE_CONCEPTS[2].image}/>
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description} 
              image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;