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
import Link from "next/link";

export function Nav() {
  return (
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