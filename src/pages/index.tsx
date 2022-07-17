import * as React from "react";

import type { NextPage } from "next";

import {
  useCatsStateService,
  useSelectedCatsState,
} from "@/machines/cats/cats.machine";

import { selectorGetCats } from "@/machines/cats/cats.selectors";

const Home: NextPage = () => {
  const catsStateService = useCatsStateService();

  const cats = useSelectedCatsState(selectorGetCats);

  console.log("cats", cats);

  React.useEffect(() => {
    catsStateService.send({ type: "GET_CATS_FETCH" });
  }, [catsStateService]);

  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi eaque
      assumenda, aspernatur itaque ratione vel consequuntur natus nobis
      voluptate veniam vitae voluptas voluptatibus perferendis. Expedita id vel
      quidem reprehenderit.
    </div>
  );
};

export default Home;
