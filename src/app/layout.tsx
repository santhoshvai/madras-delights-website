import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import NavBar from "@/components/NavBar";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

const TITLE = "Madras Delights";
const DESCRIPTION =
  "Madras Delights - The authorized distributor of Aswins sweets and snacks in the Netherlands!";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  verification: { google: "GYx6b373x-84gWQvxbZHo6LrVKu2az5Jm9ueRVJIM6k" },
  icons: {
    icon: { url: "/icon.png", sizes: "256x256", type: "image/png" },
    apple: { url: "/icon.png", sizes: "256x256", type: "image/png" },
  },
  openGraph: {
    type: "website",
    url: "https://madrasdelights.com",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://madrasdelights.com/icon.png",
        height: 256,
        width: 256,
        type: "image/png",
        secureUrl: "https://madrasdelights.com/icon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: "https://madrasdelights.com/icon.png",
  },
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />
          {/* <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" noWrap component="div" color="black">
                Next.js App Router
              </Typography>
            </Toolbar>
          </AppBar> */}
          {/* <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider /> */}
          {/* <List>
            {LINKS.map(({ text, href, icon: Icon }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton component={Link} href={href}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          {/* <Divider sx={{ mt: "auto" }} /> */}
          {/* <List>
            {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          {/* </Drawer> */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              // ml: `${DRAWER_WIDTH}px`,
              // mt: ["8px", "12px", "16px"],
              p: 3,
            }}
          >
            {children}
          </Box>
          <WhatsappFloatingButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
