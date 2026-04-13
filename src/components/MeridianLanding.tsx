import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Check,
  Kanban,
  Layers,
  Shield,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Roadmaps that stay honest",
    description:
      "Connect goals to delivery with rolling timelines, dependency mapping, and clear ownership.",
    icon: Layers,
  },
  {
    title: "Work in your rhythm",
    description:
      "Boards, lists, and calendar views stay in sync so teams can plan in detail and execute without thrash.",
    icon: Kanban,
  },
  {
    title: "Insights without the noise",
    description:
      "Burndowns, throughput, and cycle time surface automatically from real work—not manual spreadsheets.",
    icon: BarChart3,
  },
  {
    title: "Built for accountability",
    description:
      "Roles, approvals, and audit trails keep enterprise-grade programs aligned without slowing builders down.",
    icon: Shield,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    detail: "For small teams proving the workflow",
    perks: ["Up to 5 seats", "2 projects", "Community support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$14",
    detail: "Per seat / month, billed annually",
    perks: [
      "Unlimited projects",
      "Custom fields & automation",
      "SSO-ready security",
      "Priority support",
    ],
    cta: "Start trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Let’s talk",
    detail: "For portfolios across business units",
    perks: [
      "Dedicated success partner",
      "Advanced governance",
      "Data residency options",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export default function MeridianLanding() {
  return (
    <Box as="main">
      <Box
        bg="bg.subtle"
        borderBottomWidth="1px"
        borderColor="border.muted"
        py={{ base: 16, md: 24 }}
      >
        <Container maxW="6xl">
          <Stack align="flex-start" gap={6} maxW="3xl">
            <Badge
              colorPalette="teal"
              rounded="full"
              px={3}
              py={1}
              size="md"
              variant="surface"
            >
              <HStack gap={1}>
                <Sparkles size={14} aria-hidden />
                <Text as="span">New · AI-assisted standup notes</Text>
              </HStack>
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="semibold"
              letterSpacing="-0.04em"
              lineHeight="1.05"
            >
              Project management that respects how teams actually work.
            </Heading>
            <Text
              color="fg.muted"
              fontSize={{ base: "lg", md: "xl" }}
              maxW="2xl"
            >
              Meridian unifies roadmaps, delivery, and reporting so product,
              design, and engineering stay aligned from discovery to
              release—without living inside a spreadsheet.
            </Text>
            <HStack flexWrap="wrap" gap={3}>
              <Button asChild colorPalette="teal" size="lg">
                <a href="#pricing">Start free trial</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">View sample workspace</Link>
              </Button>
            </HStack>
            <HStack
              color="fg.muted"
              flexWrap="wrap"
              fontSize="sm"
              fontWeight="medium"
              gap={{ base: 4, md: 8 }}
              pt={2}
            >
              <HStack gap={2}>
                <Timer size={18} aria-hidden />
                <Text>Ship in under 14 days</Text>
              </HStack>
              <HStack gap={2}>
                <Users size={18} aria-hidden />
                <Text>Trusted by 4,000+ teams</Text>
              </HStack>
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 20 }}>
        <Stack gap={3} mb={10} maxW="2xl">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="semibold"
            letterSpacing="-0.03em"
          >
            Everything you need to steer the portfolio
          </Heading>
          <Text color="fg.muted" fontSize="lg">
            Replace brittle status decks with a living system of record.
            Meridian keeps context, decisions, and progress in one place.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {features.map((item) => (
            <Card.Root
              key={item.title}
              borderWidth="1px"
              borderColor="border.muted"
              rounded="xl"
              shadow="sm"
            >
              <Card.Body gap={4}>
                <Box color="teal.fg">
                  <item.icon aria-hidden size={28} strokeWidth={1.75} />
                </Box>
                <Stack gap={2}>
                  <Card.Title fontSize="xl">{item.title}</Card.Title>
                  <Card.Description color="fg.muted" fontSize="md">
                    {item.description}
                  </Card.Description>
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>

      <Box
        bg="bg.muted"
        borderY="1px"
        borderColor="border.muted"
        py={{ base: 14, md: 18 }}
      >
        <Container maxW="6xl">
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={10}
            textAlign={{ base: "left", md: "center" }}
          >
            <Stack gap={1}>
              <Text
                color="teal.fg"
                fontSize="4xl"
                fontWeight="semibold"
                letterSpacing="-0.04em"
              >
                38%
              </Text>
              <Text color="fg.muted" fontWeight="medium">
                faster cycle time after 90 days
              </Text>
            </Stack>
            <Stack gap={1}>
              <Text
                color="teal.fg"
                fontSize="4xl"
                fontWeight="semibold"
                letterSpacing="-0.04em"
              >
                120+
              </Text>
              <Text color="fg.muted" fontWeight="medium">
                native integrations & webhooks
              </Text>
            </Stack>
            <Stack gap={1}>
              <Text
                color="teal.fg"
                fontSize="4xl"
                fontWeight="semibold"
                letterSpacing="-0.04em"
              >
                99.99%
              </Text>
              <Text color="fg.muted" fontWeight="medium">
                uptime on Meridian Cloud
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Container
        id="pricing"
        maxW="6xl"
        py={{ base: 14, md: 20 }}
        scrollMarginTop="6rem"
      >
        <Stack align="center" gap={3} mb={12} textAlign="center">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="semibold"
            letterSpacing="-0.03em"
          >
            Plans that scale with your program
          </Heading>
          <Text color="fg.muted" fontSize="lg" maxW="2xl">
            Start where you are. Upgrade when governance, automation, and
            portfolio reporting need to catch up with your ambition.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6}>
          {plans.map((plan) => (
            <Card.Root
              key={plan.name}
              borderWidth="1px"
              borderColor={plan.highlighted ? "teal.muted" : "border.muted"}
              position="relative"
              rounded="xl"
              ring={plan.highlighted ? "2px" : undefined}
              ringColor={plan.highlighted ? "teal.solid" : undefined}
              shadow={plan.highlighted ? "md" : "sm"}
            >
              {plan.highlighted ? (
                <Badge
                  colorPalette="teal"
                  position="absolute"
                  right={4}
                  top={4}
                  variant="solid"
                >
                  Most popular
                </Badge>
              ) : null}
              <Card.Header pt={plan.highlighted ? 10 : undefined}>
                <Stack gap={1}>
                  <Card.Title fontSize="2xl">{plan.name}</Card.Title>
                  <HStack align="baseline" gap={1}>
                    <Text
                      fontSize="3xl"
                      fontWeight="semibold"
                      letterSpacing="-0.03em"
                    >
                      {plan.price}
                    </Text>
                    {plan.price.startsWith("$") && plan.price !== "$0" ? (
                      <Text color="fg.muted" fontSize="sm">
                        / seat
                      </Text>
                    ) : null}
                  </HStack>
                  <Text color="fg.muted" fontSize="sm">
                    {plan.detail}
                  </Text>
                </Stack>
              </Card.Header>
              <Card.Body gap={4}>
                <Separator />
                <Stack as="ul" gap={3} listStyleType="none" m={0} p={0}>
                  {plan.perks.map((perk) => (
                    <HStack align="flex-start" as="li" gap={3} key={perk}>
                      <Box color="teal.fg" flexShrink={0} mt={0.5}>
                        <Check aria-hidden size={18} strokeWidth={2.5} />
                      </Box>
                      <Text>{perk}</Text>
                    </HStack>
                  ))}
                </Stack>
                <Button
                  colorPalette={plan.highlighted ? "teal" : "gray"}
                  size="lg"
                  variant={plan.highlighted ? "solid" : "outline"}
                  width="full"
                >
                  {plan.cta}
                </Button>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="bg.inverted" color="fg.inverted" py={{ base: 14, md: 18 }}>
        <Container maxW="4xl" textAlign="center">
          <Stack gap={6}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="semibold"
            >
              Ready to run your next program on Meridian?
            </Heading>
            <Text color="whiteAlpha.800" fontSize="lg">
              Spin up a workspace in minutes. Invite your team, import Jira or
              Linear, and keep leadership informed without another status
              meeting.
            </Text>
            <HStack flexWrap="wrap" gap={3} justify="center">
              <Button asChild colorPalette="teal" size="lg" variant="solid">
                <a href="#pricing">Get started</a>
              </Button>
              <Button
                asChild
                _hover={{ bg: "whiteAlpha.200" }}
                borderColor="border.inverted"
                color="fg.inverted"
                size="lg"
                variant="outline"
              >
                <a
                  href="https://tanstack.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read launch story
                </a>
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
