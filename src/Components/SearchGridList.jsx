import {
  Table,
  Tbody,
  Td,
  Input,
  Th,
  Thead,
  Grid,
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
  Tooltip,
  Image,
  GridItem,
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
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const UserCard = ({
  image_url,
  first_name,
  last_name,
  email,
  description,
  is_verified,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: editIsOpen,
    onOpen: editOpen,
    onClose: editClose,
  } = useDisclosure();
  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

  const handleEditClick = () => {
    // Handle edit click event
  };

  const handleRemoveClick = () => {
    // Handle remove click event
  };
  const handleDelete = () => {
    // Handle delete profile event
  };
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <Flex>
            <Image
              borderRadius={"full"}
              src={image_url}
              alt={`${first_name}'s avatar`}
              boxSize="50px"
              mr="4"
            />

            <Flex flexDirection={"column"}>
              <Flex justifyContent={"flex-start"}>
                <Text fontWeight="bold" fontSize="lg">
                  {first_name.concat(" " + last_name)}
                </Text>
                {is_verified && (
                  <Tooltip label="Verified" aria-label="Tooltip">
                    <CheckCircleIcon
                      color="blue.500"
                      w={4}
                      h={4}
                      mt={1}
                      marginLeft={5}
                    />
                  </Tooltip>
                )}
              </Flex>
              <Text fontSize="sm" color="gray.500">
                {email}
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"flex-end"}>
            <Menu>
              <MenuButton as={Button}>
                <HiDotsVertical />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={editOpen}>Edit Profile</MenuItem>
                <MenuItem onClick={onOpen}>Remove Profile</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box>
          <Text fontSize="md" mt="2" noOfLines={6}>
            {description}
          </Text>
        </Box>
      </Box>

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
};

export default function SearchGridList({ searchData }) {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="4"
        marginTop={10}
        paddingX={3}
      >
        {searchData.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Grid>
    </>
  );
}
