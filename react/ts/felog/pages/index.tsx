import { gql, useQuery } from "@apollo/client";
import {
  Card,
  Heading,
  Text,
  Divider,
  EquallyGrid,
  Spinner,
  Center,
  Container,
  Stack,
  Button,
  View,
} from "@co-design/core";
import NextLink from "next/link";
import { NextLinkComposed } from "../components";

export const GET_POSTS = gql`
  query GetPost {
    posts(sort: ["createdAt:desc"]) {
      data {
        id
        attributes {
          title
          body
          createdAt
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;

interface Props {
  token?: string;
}

export default function Home({ token }: Props) {
  const { data, loading, error } = useQuery(GET_POSTS);
  return (
    <Container padding={16} co={{ marginTop: 16 }}>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Stack>
          {token && (
            <View co={{ textAlign: "right" }}>
              <Button component={NextLinkComposed} href="/posts/create">
                글쓰기
              </Button>
            </View>
          )}
          <EquallyGrid cols={4}>
            {data.posts.data.map((post: any) => (
              <Card key={post.id}>
                <NextLink
                  href="/posts/[id]"
                  as={`/posts/${post.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Heading level={4} co={{ cursor: "pointer" }}>
                    {post.attributes.title}
                  </Heading>
                </NextLink>
                <Text lineClamp={3}>{post.attributes.body}</Text>
                <Divider />
                <Text block align="right">
                  {post.attributes.user.data.attributes.username}
                </Text>
              </Card>
            ))}
          </EquallyGrid>
        </Stack>
      )}
    </Container>
  );
}
