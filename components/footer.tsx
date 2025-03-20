'use client'
import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Image } from "@heroui/react";
import {
    InstagramIcon,
    TiktokIcon,
    SpotifyIcon,
    AppleMusicIcon
} from "@/components/icons";
import { ThemeSwitch } from "./theme-switch";
import { APIProvider, Map, AdvancedMarker, useAdvancedMarkerRef, InfoWindow } 
from '@vis.gl/react-google-maps';
import { useCallback, useState } from "react";

export default function Footer() {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infoWindowShown, setInfoWindowShown] = useState(false);


    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
    );

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(true), []);

    const apikey = process.env.GOOGLE_MAPS_API_KEY
    const mapid = process.env.GOOGLE_MAPS_API_MAP
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
            <div className="flex items-center justify-center sm:justify-end mb-10 pt-16 sm:mt-0 sm:pr-12">
                <APIProvider apiKey={'AIzaSyAnMLWq27-NrIZm_Ds3kzUxqnbBRA8yj4s'}>
                    <Map className="sm:w-[600px] sm:h-[350px] w-[300px] h-[350px] "
                        mapId={'37d63c88742114ab'}
                        defaultCenter={{ lat: 7.770295296968615, lng: -72.21896998271451 }}
                    defaultZoom={14}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}>
                        <AdvancedMarker ref={markerRef} onClick={handleMarkerClick} position={{ lat: 7.767320085690569, lng: -72.22404955473118 }} title="Niños Cantores del Táchira" />
                            {infoWindowShown && (
                                <InfoWindow anchor={marker} onClose={handleClose}>
                                    <div className='flex flex-row justify-between items-center'>
                                        <div className='flex flex-col justify-center'>
                                <h1 className='text-xl text-slate-800 font-bold text-center justify-center hover:cursor-text'>Iufront <br /> </h1>
                                        <h2 className='text-md text-slate-800 font-bold justify-center'> Sede de los Niños <br /> Cantores del Táchira</h2>
                                        </div>
                                <div className='mr-6'>
                                    <Image className="object-cover "
                                    height={70}
                                    width={70}
                                    alt="iufront logo"
                                    src='/aliados/iufront_logo.jpg'/>
                                        </div>
                                    </div>
                                <p className='text-md text-black font-thin hover:cursor-text'>No. 16 <br />
                                    Edificio IUFRONT <br />
                                    Carrera 17 esquina calle 9, 78 C. 9 <br />
                                    San Cristóbal 5001, Táchira, Venezuela</p>
                                <Link isExternal href='https://maps.google.com/maps?ll=7.767373,-72.224049&z=21&t=m&hl=es-ES&gl=US&mapclient=apiv3&cid=12060424854631544062' >
                                    <p className='underline'>Abrir enlace en google maps</p>
                                    </Link>
                                </InfoWindow>
                            )}
                    </Map>
                </APIProvider>
            </div>
        </section>
    );
}
