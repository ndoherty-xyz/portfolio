
import greenwood1 from './images/greenwood-1.png'
import greenwood2 from './images/greenwood-2.png'
import greenwood3 from './images/greenwood-3.png'
import kinnegad1 from './images/kinnegad-1.png'
import kinnegad2 from './images/kinnegad-2.png'
import kinnegad3 from './images/kinnegad-3.png'
import playlist1 from './images/playlist-1.png'
import playlist2 from './images/playlist-2.png'

export interface Project {
    title: string;
    subtitle: string;
    year: number;
    slug: string;
    headerImage: string;
    link?: string;
    content: { src: string; text?: string }[]
}

export const projects: Project[] = [
    {
        title: 'Greenwood Labs',
        subtitle: 'Frontend Engineer & Design',
        year: 2022,
        slug: 'greenwood-labs',
        link: 'https://greenwood.finance',
        headerImage: greenwood1,
        content: [{
            src: greenwood2
        },
        {
            src: greenwood3,
            text: "Mobile responsive"
        }]
    },
    {
        title: 'Kinnegad Play Therapy',
        subtitle: 'Freelance Web Design and Development',
        year: 2022,
        slug: 'kinnegad-play-therapy',
        link: 'https://kinnegadplaytherapy.ie',
        headerImage: kinnegad1,
        content: [{
            src: kinnegad2
        }, {
            src: kinnegad3,
            text: "Mobile responsive"
        }]
    },
    {
        title: 'Playlist Ninja',
        subtitle: 'Web Design and Development',
        year: 2019,
        slug: 'playlist-ninja',
        link: 'https://playlistninja.app',
        headerImage: playlist1,
        content: [{
            src: playlist2
        }]
    }
]