import {
  Box,
  Flex,
  VStack,
  Heading,
  Link,
  Image,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Avatar,
  Input,
} from '@chakra-ui/react';

import * as React from 'react';

function Frame(props: React.ComponentProps<typeof Box>) {
  return <Box pos="absolute" {...props} />;
}

function App() {
  return (
    <>
      <Frame width={1280} height={720}>
        <Flex width="1280px" height="720px" className="bg-slate-100" />
      </Frame>
      <Frame width={222} height={720}>
        <VStack
          alignItems="left"
          height="100%"
          spacing="5px"
          paddingY="10px"
          paddingX="10px"
          backgroundColor="rgba(11,21,48,0.9)"
          backdropFilter="auto"
          backdropBlur="10px"
        >
          <Heading
            color="#fff"
            fontWeight="semibold"
            size="md"
            padding="12px 10px"
          >
            {'CollabDrix'}
          </Heading>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Campaigns'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="medium"
            backgroundColor="rgba(255,255,255,0.1)"
            color="#fff"
          >
            {'Dashboard'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Subscriptions'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Invoices'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Payments'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Products'}
          </Link>
        </VStack>
      </Frame>
      <Frame left={263} top={30} width={855} height={55}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {'Dashboard'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={263} top={100} width={230} height={181}>
        <Flex
          width="230px"
          height="181px"
          className="bg-white rounded-lg shadow-sm"
        />
      </Frame>
      <Frame left={263} top={301} width={980} height={442}>
        <Flex
          width="980px"
          height="442px"
          className="bg-white rounded-lg shadow-sm"
        />
      </Frame>
      <Frame left={287} top={122} width={38} height={38}>
        <Image
          src="https://api.iconify.design/material-symbols/person.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={287} top={223} width={206} height={32}>
        <Text className="text-blue-600 font-semibold">
          {'Likes, Comments and Shares'}
        </Text>
      </Frame>
      <Frame left={287} top={162} width={206} height={56}>
        <Flex>
          <Heading flex="1" size="2xl" lineHeight="1.3">
            {'2143'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={513} top={100} width={230} height={181}>
        <Flex
          width="230px"
          height="181px"
          className="bg-white rounded-lg shadow-sm"
        />
      </Frame>
      <Frame left={537} top={122} width={38} height={38}>
        <Image
          src="https://api.iconify.design/material-symbols/mouse.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={537} top={223} width={206} height={32}>
        <Text className="text-green-600 font-semibold">
          {'Click Through Rates'}
        </Text>
      </Frame>
      <Frame left={537} top={162} width={206} height={56}>
        <Flex>
          <Heading flex="1" size="2xl" lineHeight="1.3">
            {'8%'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={763} top={100} width={230} height={181}>
        <Flex
          width="230px"
          height="181px"
          className="bg-white rounded-lg shadow-sm"
        />
      </Frame>
      <Frame left={787} top={122} width={38} height={38}>
        <Image
          src="https://api.iconify.design/tabler/brand-onlyfans.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={787} top={223} width={206} height={32}>
        <Text className="text-orange-600 font-semibold">
          {'Brand Follower Count'}
        </Text>
      </Frame>
      <Frame left={787} top={162} width={206} height={56}>
        <Flex>
          <Heading flex="1" size="2xl" lineHeight="1.3">
            {'34%'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={1013} top={100} width={230} height={181}>
        <Flex
          width="230px"
          height="181px"
          className="bg-white rounded-lg shadow-sm"
        />
      </Frame>
      <Frame left={1037} top={122} width={38} height={38}>
        <Image
          src="https://api.iconify.design/material-symbols/attach-money.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={1037} top={223} width={206} height={32}>
        <Text className="text-purple-600 font-semibold">
          {'Estimated Revenue Generated'}
        </Text>
      </Frame>
      <Frame left={1037} top={162} width={206} height={56}>
        <Flex>
          <Heading flex="1" size="2xl" lineHeight="1.3">
            {'$12,842'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={263} top={360} width={980} height={371}>
        <VStack
          alignItems="left"
          height="100%"
          backgroundColor="rgba(255,255,255,0.9)"
          backdropFilter="auto"
          backdropBlur="10px"
          overflowY="auto"
          border="1px solid #eee"
          color="#000"
        >
          <Table size="md">
            <Thead>
              <Tr>
                <Th>{'Campaign ID'}</Th>
                <Th>{'Brand'}</Th>
                <Th>{'Platform'}</Th>
                <Th>{'Activity'}</Th>
              </Tr>
            </Thead>
            <Tr>
              <Td>{'50086'}</Td>
              <Td>{'Othership'}</Td>
              <Td>{'Instagram'}</Td>
              <Td>{'Comment'}</Td>
            </Tr>
            <Tr>
              <Td>{'50085'}</Td>
              <Td>{'The Look Lab'}</Td>
              <Td>{'Tik Tok'}</Td>
              <Td>{'Link Accessed'}</Td>
            </Tr>
            <Tr>
              <Td>{'50084'}</Td>
              <Td>{'Othership'}</Td>
              <Td>{'Instagram'}</Td>
              <Td>{'Link Accessed'}</Td>
            </Tr>
            <Tr>
              <Td>{'50083'}</Td>
              <Td>{'Marked'}</Td>
              <Td>{'Instagram'}</Td>
              <Td>{'Comment'}</Td>
            </Tr>
            <Tr>
              <Td>{'50082'}</Td>
              <Td>{'Othership'}</Td>
              <Td>{'Instagram'}</Td>
              <Td>{'Giveaway Entry'}</Td>
            </Tr>
            <Tr>
              <Td>{'50081'}</Td>
              <Td>{'F45 Liberty Village'}</Td>
              <Td>{'Instagram'}</Td>
              <Td>{'Discount Code'}</Td>
            </Tr>
          </Table>
        </VStack>
      </Frame>
      <Frame left={1205} top={35} width={38} height={38}>
        <Avatar size="sm" name="Laura Colucci" />
      </Frame>
      <Frame left={287} top={318} width={295} height={35}>
        <Flex>
          <Heading flex="1" size="md" lineHeight="1.3">
            {'Recent Activity'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={944} top={310} width={280} height={35}>
        <Input
          value="Filter"
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={1084} top={310} width={140} height={35}>
        <Input
          value="ALL"
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={453} top={30} width={140} height={35}>
        <Input
          value="This Month"
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={621} top={30} width={166} height={35}>
        <Input
          value="All Campaigns"
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={1134} top={315} width={20} height={26}>
        <Image
          src="https://api.iconify.design/material-symbols/arrow-circle-down.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={556} top={35} width={20} height={26}>
        <Image
          src="https://api.iconify.design/material-symbols/arrow-circle-down.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
      <Frame left={751} top={39} width={20} height={26}>
        <Image
          src="https://api.iconify.design/material-symbols/arrow-circle-down.svg"
          fit="contain"
          align="middle"
          w="100%"
          h="100%"
        />
      </Frame>
    </>
  );
}
export { App };
