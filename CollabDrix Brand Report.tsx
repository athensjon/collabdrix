import { Box, Flex, Text, Heading, Image, Button } from '@chakra-ui/react';

import * as React from 'react';

function Frame(props: React.ComponentProps<typeof Box>) {
  return <Box pos="absolute" {...props} />;
}

function App() {
  return (
    <>
      <Frame width={1280} height={960}>
        <Flex width="1280px" height="960px" className="bg-slate-200" />
      </Frame>
      <Frame left={231} top={679} width={494} height={221}>
        <Flex
          width="494px"
          height="221px"
          className="flex-col bg-emerald-600 p-6 rounded-xl items-start"
        >
          <Text className="text-white" textAlign="left">
            {'Most Popular Content'}
          </Text>
          <Flex className="flex-1">
            <Heading
              flex="1"
              size="md"
              lineHeight="1.3"
              className="mt-1 text-white"
              textAlign="left"
            >
              {
                '"Get Ready with Me to go to Othership" - Instagram Story | 03-04-2023'
              }
            </Heading>
          </Flex>
        </Flex>
      </Frame>
      <Frame left={750} top={679} width={494} height={221}>
        <Flex
          width="494px"
          height="221px"
          className="flex-col bg-orange-300 p-6 rounded-xl items-start"
        >
          <Text textAlign="left">{'Top Feedback'}</Text>
          <Flex className="flex-1">
            <Heading
              flex="1"
              size="md"
              lineHeight="1.3"
              className="mt-1"
              textAlign="left"
            >
              {
                'Taylin seemed to be the most popular instructor for first-timers.'
              }
            </Heading>
          </Flex>
        </Flex>
      </Frame>
      <Frame left={69} top={147} width={138} height={753}>
        <Flex
          width="138px"
          height="753px"
          bg="#eff6ff"
          className="rounded-xl"
        />
      </Frame>
      <Frame left={750} top={147} width={494} height={506}>
        <Flex width="494px" height="506px" className="bg-white rounded-xl" />
      </Frame>
      <Frame left={231} top={147} width={496} height={506}>
        <Image
          src="https://images.unsplash.com/photo-1602742271268-c39e108173f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=506&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5mbHVlbmNlcixidXN0ZXJ8fHx8fHwxNjc3ODEzNDAz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=496"
          fit="cover"
          align="middle"
          w="496px"
          h="506px"
        />
      </Frame>
      <Frame left={801} top={232} width={386} height={166}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {
              'Over 15 stories and posts this month generated a record number of engagement.'
            }
          </Heading>
        </Flex>
      </Frame>
      <Frame left={801} top={413} width={386} height={155}>
        <Text>
          {
            '\n\nThis month has been a success for our Instagram page, with a number of followers engaging with our stories. We have strived to create interesting and creative content that resonates with our audience, which has resulted in great response overall. We look forward to continuing this streak in the future, creating more exciting and engaging stories for our followers.'
          }
        </Text>
      </Frame>
      <Frame left={231} top={56} width={519} height={68}>
        <Flex>
          <Heading
            flex="1"
            size="xl"
            lineHeight="1.3"
            className="font-semibold"
          >
            {'Laura Chelios x Othership'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={94} top={235} width={66} height={46}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {'2.9k'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={94} top={424} width={66} height={46}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {'15%'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={94} top={598} width={66} height={46}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {'$4.5k'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={94} top={281} width={113} height={18}>
        <Text>{'Likes, Comments & Shares'}</Text>
      </Frame>
      <Frame left={94} top={461} width={113} height={18}>
        <Text>{'Increase in Othership Followers'}</Text>
      </Frame>
      <Frame left={94} top={644} width={113} height={18}>
        <Text>{'Potential Revenue Generated'}</Text>
      </Frame>
      <Frame left={87} top={204} width={103} height={28}>
        <Button
          width="103px"
          size="xs"
          backgroundColor="#94a3b8"
          color="#fff"
          isDisabled={false}
        >
          {'Engagement'}
        </Button>
      </Frame>
      <Frame left={87} top={384} width={103} height={28}>
        <Button
          width="103px"
          size="xs"
          backgroundColor="#94a3b8"
          color="#fff"
          isDisabled={false}
        >
          {'Awareness'}
        </Button>
      </Frame>
      <Frame left={87} top={568} width={103} height={28}>
        <Button
          width="103px"
          size="xs"
          backgroundColor="#94a3b8"
          color="#fff"
          isDisabled={false}
        >
          {'EMV'}
        </Button>
      </Frame>
      <Frame left={750} top={56} width={221} height={53}>
        <Button
          width="221px"
          size="lg"
          backgroundColor="#f1f5f9"
          color="#000"
          isDisabled={false}
        >
          {'March 2023'}
        </Button>
      </Frame>
      <Frame left={770} top={804} width={455} height={31}>
        <Flex>
          <Heading flex="1" size="md" lineHeight="1.3">
            {
              '14 customers asked if Othership was planning to introduce an "monthly unlimted" package.'
            }
          </Heading>
        </Flex>
      </Frame>
      <Frame left={252} top={804} width={455} height={31}>
        <Flex>
          <Heading flex="1" size="md" lineHeight="1.3" className="text-white">
            {'"Top 3 tips for first-timers" - Instagram Story 03-12-2023'}
          </Heading>
        </Flex>
      </Frame>
    </>
  );
}
export { App };
