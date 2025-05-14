// src/App.tsx
import Layout from './components/Layout/Layout';
import Section from './components/Section/Section';
import Article from './components/Article/Article';

export default function App() {
  return (
    <Layout>
      <Section>
        <Article title="Заголовок статьи" content="Описание новости..." />
      </Section>
    </Layout>
  );
}