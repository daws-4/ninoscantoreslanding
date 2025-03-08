import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
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

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className=' bg-gradient-to-tl from-customSkyBlue to-customSkyCyan dark:bg-gradient-to-tl dark:from-blue-950 dark:to-blue-900 border-customBorder pb-6 border-b-2'>
      <NavbarContent className="basis-1/5 sm:basis-full mt-5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center " href="/">
            <PrincipalLogo className='bg-white-100' width={80} height={80} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} >
              <div className='transition-all duration-200 ease-in-out hover:bg-customDarkBlue dark:hover:bg-customDarkBlue '>

                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium transform text-xl px-5 py-8 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-customBorder"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </div>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 lg:basis-full mt-5"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Ig" href={siteConfig.links.ig}>
            <InstagramIcon className="text-default-500 bg-customSkyBlue dark:bg-blue-900 rounded-lg" />
          </Link>
          <Link isExternal aria-label="tiktok" href={siteConfig.links.tiktok}>
            <TiktokIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.spotify}>
            <SpotifyIcon className="text-default-500 bg-customSkyBlue dark:bg-blue-900 rounded-xl" />
          </Link>
          <Link isExternal aria-label="Apple Music" href={siteConfig.links.applemusic}>
            <AppleMusicIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            // href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4 mt-6" justify="end">
        {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.ig}>
          <InstagramIcon className="text-default-500 bg-customSkyBlue dark:bg-blue-900 rounded-lg" width={34} height={34} />
        </Link> */}
        <Link isExternal aria-label="Tiktok" href={siteConfig.links.tiktok}>
          <TiktokIcon className="text-default-500" width={34} height={34} />
        </Link>
        <Link isExternal aria-label="Spotify" href={siteConfig.links.spotify}>
          <SpotifyIcon className="text-default-500 bg-customSkyBlue dark:bg-blue-900 rounded-xl" width={34} height={34} />
        </Link>
        <Link isExternal aria-label="Apple Music" href={siteConfig.links.applemusic}>
          <AppleMusicIcon className='text-default-500' width={34} height={34} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className=' bg-gradient-to-bl from-customSkyBlue to-customSkyCyan dark:bg-gradient-to-bl dark:from-blue-950 dark:to-blue-900'>
        <div className="mx-4 mt-10 flex flex-col gap-2 ">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className='text-customBorder bg-customDarkBlue p-4 px-10 rounded'
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
