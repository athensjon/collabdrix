import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Link,
  Text,
  Avatar,
  Switch,
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
      <Frame width={1280} height={166}>
        <Image
          src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=215&ixid=MnwxfDB8MXxyYW5kb218MHx8Zml0bmVzcyxidXN0ZXJ8fHx8fHwxNjc3MjcwMzM0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280"
          fit="cover"
          align="middle"
          w="1280px"
          h="166px"
        />
      </Frame>
      <Frame top={166} width={222} height={554}>
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
            fontWeight="medium"
            backgroundColor="rgba(255,255,255,0.1)"
            color="#fff"
          >
            {'Campaigns'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
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
      <Frame left={93} top={47} width={315} height={57}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3" className="text-white">
            {'Campaigns'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={251} top={191} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLGJ1c3Rlcnx8fHx8fDE2NzcyNzA0MTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'Altea Active'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 14% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={593} top={191} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1657803778483-2b289d0f22c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8U2F1bmEsYnVzdGVyfHx8fHx8MTY3NzI3MDU4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'Othership'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 85% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={932} top={191} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8UmVzdGF1cmFudCxidXN0ZXJ8fHx8fHwxNjc3MjkwMzMy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'Marked'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 24% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={253} top={457} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1506003094589-53954a26283f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8QmVhdXR5LFNwYSxidXN0ZXJ8fHx8fHwxNjc3MjkwMjEy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'The Look Lab'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 52% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={595} top={457} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8SmV3ZWxsZXJ5LGJ1c3Rlcnx8fHx8fDE2NzcyOTAyMjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'Meijuri'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 12% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={934} top={457} width={319} height={238}>
        <Flex
          width="319px"
          height="238px"
          className="flex-col bg-white p-4 shadow rounded-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHx8R3ltLGJ1c3Rlcnx8fHx8fDE2NzcyOTAzOTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=512"
            fit="cover"
            align="middle"
            minHeight={0}
            className="rounded-lg flex-1"
          />
          <Flex>
            <Heading flex="1" size="sm" lineHeight="1.3" className="mt-4">
              {'F45 Liberty Village'}
            </Heading>
          </Flex>
          <Text className="mt-1">{'ERG \uD83D\uDCC8 32% (WTD)'}</Text>
        </Flex>
      </Frame>
      <Frame left={1227} top={21} width={37} height={26}>
        <Avatar size="sm" name="Laura Colucci" />
      </Frame>
      <Frame left={502} top={373} width={107} height={41}>
        <Switch size="lg" isChecked isDisabled={false} />
      </Frame>
      <Frame left={839} top={373} width={107} height={41}>
        <Switch size="lg" isChecked isDisabled={false} />
      </Frame>
      <Frame left={1174} top={373} width={107} height={41}>
        <Switch size="lg" isChecked isDisabled={false} />
      </Frame>
      <Frame left={1192} top={641} width={107} height={41}>
        <Switch size="lg" isChecked={false} isDisabled={false} />
      </Frame>
      <Frame left={839} top={641} width={107} height={41}>
        <Switch size="lg" isChecked={false} isDisabled={false} />
      </Frame>
      <Frame left={502} top={641} width={107} height={41}>
        <Switch size="lg" isChecked={false} isDisabled={false} />
      </Frame>
    </>
  );
}
export { App };
