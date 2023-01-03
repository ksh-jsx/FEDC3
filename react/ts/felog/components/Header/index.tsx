import { Group, Heading, Button } from "@co-design/core";
import { useCallback } from "react";
import nookies from "nookies";
import { useRouter } from "next/router";

interface Props {
  token?: string;
}

const Header = ({ token }: Props) => {
  const router = useRouter();
  const handleLogout = useCallback(() => {
    nookies.destroy(null, "token", { path: "/" });
    location.href = "/";
  }, []);

  return (
    <Group position="apart" align="center" co={{ height: 70, padding: 16 }}>
      <Heading level={4} onClick={() => router.push("/")} co={{ cursor: "pointer" }}>
        Felog
      </Heading>
      {token ? (
        <Button size="small" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Group spacing={8}>
          <Button size="small" onClick={() => router.push("/login")}>
            Login
          </Button>
          <Button size="small" onClick={() => router.push("/signup")}>
            sign Up
          </Button>
        </Group>
      )}
    </Group>
  );
};

export default Header;
