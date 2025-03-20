'use client'
import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import {
    InstagramIcon,
    TiktokIcon,
    SpotifyIcon,
    AppleMusicIcon
} from "@/components/icons";
import { ThemeSwitch } from "./theme-switch";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function Footer() {
    console.log(process.env.GOOGLE_MAPS_API_KEY);
    return (
        <section className="flex flex-col sm:flex-row justify-between bg-customCream dark:bg-gradient-to-tl dark:from-blue-950 dark:to-blue-900 w-full mt-10">

            {/* Links*/}
            <div className=" flex flex-col gap-5 pt-24 p-10">
                <Link isExternal aria-label="Ig" href={siteConfig.links.ig}>
                    <InstagramIcon width={60} height={60} className="text-default-500 bg-custombCream dark:bg-blue-900 rounded-lg" />
                    <p className='pl-2 font-bold text-2xl dark:text-customCream text-customDarkBlue'>INSTAGRAM</p>
                </Link>
                <Link isExternal aria-label="tiktok" href={siteConfig.links.tiktok}>
                    <TiktokIcon width={60} height={60} className="text-default-500" />
                    <p className='pl-2 font-bold text-2xl dark:text-customCream text-customDarkBlue'>TIKTOK</p>
                </Link>
                <Link isExternal aria-label="Spotify" href={siteConfig.links.spotify}>
                    <SpotifyIcon width={60} height={60} className="text-default-500 bg-customCream dark:bg-blue-900 rounded-3xl" />
                    <p className='pl-2 font-bold text-2xl dark:text-customCream text-customDarkBlue'>SPOTIFY</p>
                </Link>
                <Link isExternal aria-label="Apple Music" href={siteConfig.links.applemusic}>
                    <AppleMusicIcon width={60} height={60} className='text-default-500' />
                    <p className='pl-2 font-bold text-2xl dark:text-customCream text-customDarkBlue'>APPLE MUSIC</p>
                </Link>
            </div>
            <div className="flex items-center justify-center sm:justify-end mt-10 sm:mt-0">
                {process.env.GOOGLE_MAPS_API_KEY ? (
                    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
                        <Map style={{ width: '100vw', height: '100vh' }}
                            defaultCenter={{ lat: 22.54992, lng: 0 }}
                            defaultZoom={3}
                            gestureHandling={'greedy'}
                            disableDefaultUI={true} />
                    </APIProvider>
                ) : (
                    <div>Map API Key Missing</div> // Or some other fallback
                )}
            </div>
        </section>
    );
}
