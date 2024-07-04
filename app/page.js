// page.js
import Layout from './layout';
import styles from './page.module.css';
import PageContainer from '../src/components/PageContainer';

const Page = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <PageContainer />
      </div>
    </Layout>
  );
};

export default Page;
