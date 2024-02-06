import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { AdminInfo } from "./AdminMain";
import ActionButton from "./ActionButton";
import { FaPlus } from "react-icons/fa6";
import { SiLivejournal } from "react-icons/si";

const AdminBody = ({ adminInfo }: { adminInfo: AdminInfo }) => {
  return (
    <SimpleGrid columns={2} spacing={10} minH={350}>
      <ActionButton icon={<FaPlus />} text="Add a Product" />
      <ActionButton icon={<SiLivejournal />} text="Post News" />
    </SimpleGrid>
  );
};

export default AdminBody;
