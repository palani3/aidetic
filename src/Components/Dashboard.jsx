import { useNavigate } from "react-router-dom";
import { Input, Button, Flex, Box } from "@chakra-ui/react";
import { FiUserPlus, FiList } from "react-icons/fi";
import { CiGrid2V } from "react-icons/ci";
import { gql, useQuery } from "@apollo/client";
import {
  FormControl,
  FormLabel,
  Textarea,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Switch,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Profile from "./Profile";

import UserFlexList from "./UserFlexList";
import UserGridList from "./UserGridList";
import SearchFlexList from "./SearchFlexList";
import SearchGridList from "./SearchGridList";
const url = import.meta.env.VITE_BASE_URL;

const Get_AllProfiles = gql`
  query GetAllProfiles(
    $orderBy: globalOrderBy
    $searchString: String
    $rows: Int
    $page: Int
  ) {
    getAllProfiles(
      orderBy: $orderBy
      searchString: $searchString
      rows: $rows
      page: $page
    ) {
      size
      profiles {
        id
        first_name
        last_name
        email
        is_verified
        image_url
        description
      }
    }
  }
`;
export default function Dashboard() {
  const [searchData, setSearchData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, data } = useQuery(Get_AllProfiles);
  const [listType, SetListType] = useState("grid");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

  const SearchDataQuery = () => {
    if (!data) return;
    const result = data.getAllProfiles.profiles.filter((user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setSearchData(result);
  };
  useEffect(() => {
    setTimeout(() => {
      SearchDataQuery();
    }, 500);
  }, [listType, searchQuery]);

  console.log("listType", listType);
  return (
    <Box h="100vh">
      <Box>
        <Flex
          direction="row"
          align="center"
          justifyContent={"center"}
          paddingTop={10}
        >
          <Input
            placeholder="Search"
            w="60%"
            py={6}
            marginRight={5}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline" marginRight={5} onClick={onOpen}>
            {" "}
            <FiUserPlus style={{ marginRight: 10 }} /> Create Profile
          </Button>
          <Button
            variant="outline"
            borderRadius="sm"
            onClick={() => SetListType("grid")}
          >
            <CiGrid2V />
          </Button>
          <Button
            borderRadius="sm"
            variant="outline"
            onClick={() => SetListType("flex")}
            color={listType === "flex" ? "#4076B8" : "#757575"}
          >
            <FiList />
          </Button>
        </Flex>
      </Box>
      {/* <Flex> */}
      {/* <Profile /> */}
      <Box paddingX={"140px"}>
        {listType === "flex" &&
          (searchData
            ? data && <SearchFlexList searchData={searchData} />
            : data && <UserFlexList data={data} />)}
        {listType === "grid" &&
          (searchData
            ? data && <SearchGridList searchData={searchData} />
            : data && <UserGridList data={data} />)}
        {/* {data && listType === "flex" ? (
          searchData ? (
            <SearchFlexList searchData={searchData} />
          ) : (
            <UserFlexList data={data} />
          )
        ) : (
          data  && <UserGridList data={data} />
        )} */}
      </Box>
      {/* </Flex> */}

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Profile</ModalHeader>
          <ModalCloseButton marginTop={3} size={24} marginRight={10} />
          <hr />
          <ModalBody marginX={10} marginBottom={150}>
            <FormControl id="image" marginTop={5}>
              <FormLabel fontSize={"12"}>Image link</FormLabel>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormControl>
            <Box>
              <Flex gap={10}>
                <FormControl id="fname" marginTop={5}>
                  <FormLabel fontSize={"12"}>First name</FormLabel>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id="lname" marginTop={5}>
                  <FormLabel fontSize={"12"}>Last name</FormLabel>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>
            </Box>
            <FormControl id="email" marginTop={5}>
              <FormLabel fontSize={"12"}>Email</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="bio" marginTop={5}>
              <FormLabel fontSize={"12"}>Description</FormLabel>
              <Textarea
                h={120}
                // value={value}
                // onChange={handleChange}
                placeholder="Write a description for the talent"
                size="lg"
                resize="none"
              />
            </FormControl>
            <FormControl id="bio" marginTop={5}>
              <FormLabel fontSize={"12"}>Verification</FormLabel>
              <Box bgColor={"#E0E0E0"} paddingX={5} borderRadius={5}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text fontSize="16px" padding={2}>
                    Talent is Verified
                  </Text>
                  <Switch id="email-alerts" />
                </Flex>
              </Box>
            </FormControl>
          </ModalBody>
          <hr />
          <ModalFooter>
            {/* onClick={handleSubmit} */}
            <Button colorScheme="blue" mr={3}>
              Create Profile
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
