import React from "react";
import {
  Box,
  Flex,
  useColorMode,
  IconButton,
  Text,
  Image,
  Switch,
  Button,
  Card,
} from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaSun } from "react-icons/fa";
import { CiDark } from "react-icons/ci";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card boxShadow="lg">
      <Flex align="center" justify="space-between" paddingX={"14"} flex={1}>
        <Flex alignItems="center">
          <Flex
            fontSize="60px"
            fontWeight="bold"
            fontFamily={"Baskerville old face"}
          >
            V
          </Flex>
          <Flex fontSize="24px" ml="2" fontWeight={600}>
            iral Nation
          </Flex>
        </Flex>

        <Box>
          <Switch
            padding={5}
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <CiDark /> : <FaSun />}
          </Button>
        </Box>
      </Flex>
    </Card>
  );
}
{
  /* <IconButton
          icon={<FaCog />}
          aria-label="Settings"
        /> */
}
{
  /* <IconButton
          icon={<FaHome />}
          aria-label="Home"
          mr={2}
        /> */
}
