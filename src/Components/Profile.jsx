import { Avatar, Box, Flex, Text, Tooltip, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Profile({ data }) {
  return (
    <Box>
      <Flex align="center" flexDirection={"row"} justifyContent={"flex-start"}>
        <Image
          borderRadius="full"
          boxSize="50px"
          src={data.image_url}
          alt="Dan Abramov"
        />

        <Text fontWeight="bold" fontSize="sm" marginX={"15px"}>
          {data.first_name.concat(" ", data.last_name)}
        </Text>
        {data.is_verified && (
          <Tooltip label="Verified" aria-label="Tooltip">
            <CheckCircleIcon color="blue.500" w={4} h={4} mt={1} />
            {/* <Text>V</Text> */}
          </Tooltip>
        )}
      </Flex>
    </Box>
  );
}
