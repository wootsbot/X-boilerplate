"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { XBoilerplateSimple } from "@/components/x-boilerplate";
import styles from "./SocialContainer.module.css";

function SocialContainer() {
  return (
    <div className={styles.root}>
      <a href="https://github.com/react-next-boilerplate/X-boilerplate" target="_blank" rel="noreferrer">
        <SiGithub color="#374151" />
      </a>

      <a href="https://x.openkit.run" target="_blank" rel="noreferrer">
        <XBoilerplateSimple color="#374151" />
      </a>
    </div>
  );
}

export default SocialContainer;
