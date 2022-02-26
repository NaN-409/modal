import React from "react";
import { STRINGS } from "constants/string";
import { Stack } from "components/Stack";
import { Image } from "components/Image";

const Pluginfilecover1Page = () => {
  return (
    <Stack className="2xl:h-[721px] 3xl:h-[865px] bg-white_A700 h-[960px] lg:h-[560px] ml-[auto] mr-[auto] w-[100%] xl:h-[641px]">
      <Image
        src="img_image1.png"
        className="2xl:h-[1123px] 3xl:h-[1347px] absolute h-[1495px] lg:h-[873px] self-stretch w-[100%] xl:h-[998px]"
        alt="image1"
      />
    </Stack>
  );
};

export default Pluginfilecover1Page;
