import {
  Table,
  Tbody,
  Td,
  Input,
  Th,
  Thead,
  Tr,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Flex,
  Text,
  Card,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Switch,
  ModalFooter,
  ModalBody,
  TableCaption,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import Profile from "./Profile";

export default function SearchFlexList({ searchData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });
  const {
    isOpen: editIsOpen,
    onOpen: editOpen,
    onClose: editClose,
  } = useDisclosure();

  const handleEditClick = () => {
    // Handle edit click event
  };

  const handleRemoveClick = () => {
    // Handle remove click event
  };
  const handleDelete = () => {
    // Handle delete profile event
  };
  console.log("searchData", searchData);

  return (
    <>
      <Flex>
        <Table>
          <Thead>
            {/* <Tr>
              <Th>Name</Th>
            </Tr> */}
            <Tr>
              <Th minWidth="250px">Name</Th>

              <Th>ID</Th>
              <Th>Email</Th>
              <Th>Description</Th>
              <Th>
                <IconButton
                  aria-label="Settings"
                  icon={<SettingsIcon />}
                  variant="ghost"
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {searchData &&
              searchData.map((user, index) => (
                <Tr key={user.id}>
                  <Td>
                    <Profile data={user} />
                  </Td>
                  <Td>{index}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Text noOfLines={3}>{user.description}</Text>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button}>
                        <HiDotsVertical />
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={editOpen}>Edit Profile</MenuItem>
                        <MenuItem onClick={onOpen}>Remove Profile</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Profile</ModalHeader>
          <ModalCloseButton marginTop={3} />
          <hr />
          <ModalBody paddingY={5}>
            Removed profile will be deleted permenantly and won't be available
            anymore.
          </ModalBody>
          <hr />
          <ModalFooter justifyContent={"space-around"}>
            <Button onClick={onClose} mr={3} flex={1}>
              Cancel
            </Button>
            <Button
              flex={1}
              color={"white"}
              bgColor={"#cc1016"}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={editIsOpen} onClose={editClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
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
              {/* <Input
                  type="text"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                /> */}
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
              Update Profile
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
