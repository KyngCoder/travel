//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { SiSololearn } from "react-icons/si";

import { RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

import { GiKnifeFork } from "react-icons/gi";

import { MdStar } from "react-icons/md";

import {
  FaMobileAlt,
  FaEthereum,
  FaLaptop,
  FaVest,
  FaShippingFast,
} from "react-icons/fa";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";
import React from "react";

// social
export const social = [
  {
    icon: <RiLinkedinFill />,
    href: "https://www.linkedin.com/in/ricardo-merchant/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/kyngcoder/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/KyngCoder",
  },
  {
    icon: <RiTwitterFill />,
    href: "https://twitter.com/kyngCoder",
  },
  {
    icon: <SiSololearn />,
    href: "https://www.sololearn.com/profile/19109723",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

//destination

export const destinations = [
  {
    name: "Lefkas",
    rating: 5,
    price: 99,
    img: "https://images.unsplash.com/photo-1634060253542-ccfa41801c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    
  },
  {
    name: "Paros",
    rating: 5,
    price: 192.78,
    img: "https://images.unsplash.com/photo-1604005495286-fd5e677dea20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    
  },
  {
    name: "United Kingdom",
    rating: 5,
    price: 129,
    img: "https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    
  },
  {
    name: "British Virgin Island",
    rating: 5,
    price: 50,
    img: "https://images.unsplash.com/photo-1622581646489-6066b5c697e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    
  },
  {
    name: "Norway",
    rating: 5,
    price: 165,
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    
  },
  {
    name: "Bahamas",
    rating: 5,
    price: 75,
    img: "https://images.unsplash.com/photo-1615839901889-c828c4a96c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80",
    
  },

];

export const packages = [
  {country:[
  {
    Greece: [
      {
        name:"Athens",
        img: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 50,
      },
      {
        name:"Cyclades",
        img: "https://images.pexels.com/photos/11566994/pexels-photo-11566994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 50,
      },
      {
        name:"Mykonos",
        img: "https://imgs.search.brave.com/axPuM7GJA_ks-fL7q5XxEjHbaWws-iSZKQnssKK_Z_o/rs:fit:1023:682:1/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vODM3LzQz/MDc3NDA0MDQxX2Ix/ZDU4NTRhODlfYi5q/cGc",
        price: 50,
      },
      {
        name:"Santorini",
        img: "https://images.pexels.com/photos/1010640/pexels-photo-1010640.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 50,
      },
      {
        name:"Dodecanese",
        img: "https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 50,
      },
      {
        name:"Kos",
        img: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 50,
      },
      {
        name:"Rhodes",
        img: "https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 50,
      },
      {
        name:"Samos",
        img: "https://imgs.search.brave.com/EEdeY_LpmJ2UZFIalpM5oetBFo-GKCl2g0SgW9uMpcI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAxOS0wNi8xNTMz/NTUyMzJfZnVsbC5q/cGc_Zml0PWNyb3Am/cT00MCZzaGFycD0x/MCZ2aWI9MjAmYXV0/bz1mb3JtYXQmaXhs/aWI9cmVhY3QtOC42/LjQ",
        price: 50,
      },
      {
        name:"Ionian",
        img: "https://images.pexels.com/photos/13443335/pexels-photo-13443335.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 50,
      },
      {
        name:"Lefkas",
        img: "https://images.pexels.com/photos/6174897/pexels-photo-6174897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 50,
      },
      {
        name:"Sporades",
        img: "https://images.pexels.com/photos/8656374/pexels-photo-8656374.png?auto=compress&cs=tinysrgb&w=600",
        price: 50,
      },
      {
        name:"Volos",
        img: "https://imgs.search.brave.com/Npx72hjIDj03B-9Cg8eLUWgfgKVEqdaqMpUXdqClIM0/rs:fit:360:270:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzE4L1Zv/bG9zX3BvcnQuanBn/LzM2MHB4LVZvbG9z/X3BvcnQuanBn",
        price: 50,
      },
      {
        name:"Skiatos",
        img: "https://imgs.search.brave.com/autaOqbEpPgJERdaNoefV_tPnOG8j8NQMcCcmFMPH0Q/rs:fit:1024:768:1/g:ce/aHR0cDovL2FncmVl/a2FkdmVudHVyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDEvc2tpYXRo/b3MtZ3JlZWNlLTIu/anBn",
        price: 50,
      },
    ],
    Italy:[
      {
        name:"Sicily",
        img:"https://images.pexels.com/photos/3754810/pexels-photo-3754810.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:259,
      },
      {
        name:"Liguria",
        img:"https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:259,
      },
      {
        name:"Sardinia",
        img:"https://images.pexels.com/photos/3944006/pexels-photo-3944006.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:259,
      },
      {
        name:"Tyrrhenian sea",
        img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:259,
      },
    ],
    Caribbean:[
      {
        name:"British Virgin Island",
        img:"https://images.unsplash.com/photo-1624468055971-249e31e54e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
        price:259,
      },
      {
        name:"Bahamas",
        img:"https://images.unsplash.com/photo-1589786161184-6d43d20526e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:259,
      },
      {
        name:"Jamaica",
        img:"https://images.unsplash.com/photo-1542356670-0366c7cd7ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:259,
      }
    ],
    Croatia:[
      {
        name:"Dubrovnik",
        img:"https://images.pexels.com/photos/4353632/pexels-photo-4353632.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:125
      },
      {
        name:"Istra",
        img:"https://images.unsplash.com/photo-1610977695392-8fdd684af1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:125
      },
      {
        name:"Kvarner",
        img:"https://images.unsplash.com/photo-1649522326123-eb7939740c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price:125
      },
      {
        name:"Sibenik",
        img:"https://images.pexels.com/photos/13385470/pexels-photo-13385470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:125
      },
      {
        name:"Split",
        img:"https://images.unsplash.com/photo-1555990538-c48ab0a194b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        price:125
      },
      {
        name:"Zadar",
        img:"https://images.unsplash.com/photo-1504268886417-6e7cd7617cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80",
        price:125
      },
      
    ],
    others:[
      {
        name:"Norway",
        img:"https://images.unsplash.com/photo-1552594270-b95bee9a6a33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80",
        price:"225.33",
      },
      {
        name:"Mauritius",
        img:"https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"225.33",
      },
      {
        name:"British Virgin Island",
        img:"https://images.unsplash.com/photo-1504659728239-b005b35c5d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:"225.33",
      },
      {
        name:"Maldives",
        img:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:"225.33",
      },
      {
        name:"Baleric Island",
        img:"https://images.unsplash.com/photo-1533417457911-4ec911485388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:"225.33",
      },
      
    ]
  },
]},
];

export const catamarans = [
  {

  }
]

// services
export const services = [
  {
    icon: <FaVest />,
    name: "Safety Guide",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro omnis ipsum deleniti iste.",
  },
  {
    icon: <FaShippingFast />,
    name: "Speedy Travel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro omnis ipsum deleniti iste.",
  },
  {
    icon: <GiKnifeFork />,
    name: "Food and Drinks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro omnis ipsum deleniti iste.",
  },
];

// testimonials

export const text = [
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
];

//gallery

export const gallery = [
  {
    id: 1,
    source:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Machu Pichu",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
 
  {
    id: 4,
    source:
      "https://images.unsplash.com/photo-1530225029356-e301a685e6b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Dunns River Falls",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
 
  {
    id: 6,
    source:
      "https://images.unsplash.com/photo-1472431983446-df737cd5b8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Mexico",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    id: 7,
    source:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80",
    title: "Bahamas",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

//blog

export const blogs = [
  {
    title: "",
  },
];

//catamaran


export const catamaran = [
  {
    name: "Blue Lagoon, Beaches and Bays Catamaran Sailing Tour",
    rating: 4,
    price: 50.67,
    img: " https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/22/2c/d6.jpg ",
    time: "5"
  },
  {
    name: "Santorini Luxury Caldera Cruise",
    rating: 4,
    price: 146,
    img: " https://media.tacdn.com/media/attractions-splice-spp-360x240/07/0d/dd/56.jpg",
    time: "5"
  },
  {
    name: "Sunset Jazz Cruise in Barcelona",
    rating: 5,
    price: 25,
    img: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/79/a4/9a.jpg",
    time: "2"
  },
  {
    name: "Exclusive Catamaran Cruise in Santorini",
    rating: 5,
    price: 124.95,
    img: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/b7/20/85.jpg",
    time: "5"
  },
  {
    name: "Private Santorini Catamaran Cruise",
    rating: 5,
    price: 150.95,
    img: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/84/a9/95.jpg",
    time: "5"
  },
];
