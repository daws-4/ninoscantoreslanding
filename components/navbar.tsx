import { siteConfig } from "@/config/site";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
<<<<<<< HEAD
import Link from "next/link";
=======
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  PrincipalLogo,
  InstagramIcon,
  TiktokIcon,
  SpotifyIcon,
  AppleMusicIcon
} from "@/components/icons";

export const Navbar = () => {
>>>>>>> 439b134bfeb8981eef11d4b46eb06aba0e2b1601

export function Nav() {
  return (
<<<<<<< HEAD
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <NavbarItem>
            <img src="/favicon.ico" alt="Logo" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          {
            siteConfig.navItems.map((item: { lable: string, href: string }) => (
              <NavbarMenuItem key={crypto.randomUUID()}>
                <Link href={item.href}>
                  {item.lable}
                </Link>
              </NavbarMenuItem>
            ))
          }
        </NavbarMenu>
        <NavbarMenuToggle />
      </NavbarContent>
    </Navbar>
  )
}
=======
    <HeroUINavbar maxWidth="xl" position="sticky" className='border-b-2 bg-gradient-to-tl from-amber-300 to-orange-400 dark:bg-gradient-to-br dark:from-blue-950 dark:to-blue-800 border-slate-800 pb-6'>
      <NavbarContent className="basis-1/5 sm:basis-full mt-5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center " href="/">
            <PrincipalLogo className='bg-white-100' width={80} height={80} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium ",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full mt-5"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <InstagramIcon className="text-default-500 bg-white dark:bg-blue-900 rounded-lg" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <TiktokIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <SpotifyIcon className="text-default-500 bg-white dark:bg-blue-900 rounded-xl" />
          </Link>
          <Link isExternal aria-label="Apple Music" href={siteConfig.links.applemusic}>
              <AppleMusicIcon className='text-default-500'/>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
>>>>>>> 439b134bfeb8981eef11d4b46eb06aba0e2b1601
