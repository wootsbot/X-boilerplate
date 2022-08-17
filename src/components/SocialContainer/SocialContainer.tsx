import { Github } from '@icons-pack/react-simple-icons';

import styles from './SocialContainer.module.css';

import { XBoilerplateSimple } from '@/components/XBoilerplate';

function SocialContainer() {
  return (
    <div className={styles.root}>
      <a href="https://github.com/react-next-boilerplate/X-boilerplate" target="_blank" rel="noreferrer">
        <Github color="#374151" />
      </a>

      <a href="https://www.reactnextboilerplate.com/" target="_blank" rel="noreferrer">
        <XBoilerplateSimple color="#374151" />
      </a>
    </div>
  );
}

export default SocialContainer;
