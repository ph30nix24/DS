// NavBar Assests
import NavIcon from '/assets/Navbar/light.png';
import NavMenuBar from '/assets/Navbar/menuBar.svg';
import NavMenuCross from '/assets/Navbar/menuCross.svg';

export const Icon = NavIcon;
export const MenuBar = NavMenuBar;
export const MenuCross = NavMenuCross;

import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbListSearch } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";

const links = [
    { label : "Home",
      icons : IoIosHome
    },
    { label : "About",
      icons : IoPersonSharp
    },
    { label : "Contact",
      icons : TfiHeadphoneAlt
    },
    { label : "Services",
      icons : TbListSearch
    },
    { label : "Blogs",
      icons : GrArticle
    },

]
export const NavLinks = links

// Home page
// --> HeroSection

import hero from "/assets/Home/Hero/heroImage.png"
import heroI from "/assets/Home/Hero/homeInvite.svg"

export const HeroImage = hero
export const HeroIllustration = heroI

// --> About Section
import Hai1 from "/assets/Home/HAbout/HeroAbout.png"
import Hai2 from "/assets/Home/HAbout/About2.png"

export const HomeAboutImage1 = Hai1
export const HomeAboutImage2 = Hai2

// --> Services Section

import { GoSearch } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import SEO from "/assets/Home/ServicesImg/SEO.svg"
import WEB from "/assets/Home/ServicesImg/webDev.svg"
import CW from "/assets/Home/ServicesImg/ContentWriting.svg"
import SerIllus from "/assets/Home/ServicesImg/ServicesIllus.svg"
const workData = [
    {
        image : SEO,
        title : 'SEO Optimization',
        description : 'SEO is a vital tool for enhancing your website’s visibility and driving organic traffic. By optimizing your site for search engines, we can significantly improve your search rankings, attract more visitors, and increase conversions. Our comprehensive SEO strategies include thorough keyword research, on-page optimization, ensuring your site stands out in search results. Partnering with us means you’ll benefit from a tailored approach that aligns with your business goals, helping you reach your target audience more effectively. Let’s work together to elevate your online presence, boost your brand’s visibility, and achieve your digital marketing objectives. With our expertise, your website will not only rank higher but also engage and convert more visitors.',
        logo: GoSearch
    },
    {
        image : WEB,
        title : 'Website Development',
        description : 'Website development is the backbone of your online presence. Our team specializes in creating robust, scalable, and visually appealing websites tailored to your business needs. We focus on delivering a seamless user experience, ensuring your site is not only functional but also engaging. By leveraging the latest technologies and best practices, we build websites that perform well across all devices and platforms. Partnering with us means you’ll benefit from a customized approach that aligns with your goals, helping you reach your target audience effectively. Let’s work together to develop a website that not only attracts visitors but also converts them into loyal customers, driving your business growth and success.',
        logo: IoCodeSlash
    },
    {
        image : CW,
        title : 'Content Writing',
        description : 'Content writing is crucial for building a strong online presence and engaging your audience. Our team specializes in creating high-quality, relevant content that resonates with your target market. By focusing on thorough research, strategic keyword integration, and compelling storytelling, we ensure your content not only attracts visitors but also converts them into loyal customers. Our approach is tailored to your business goals, helping you stand out in a crowded digital landscape. Partner with us to enhance your brand’s visibility, drive organic traffic, and achieve your marketing objectives. Let’s work together to create content that informs, entertains, and persuades, ultimately boosting your online success.',
        logo: FaFileAlt
    }
]

export const WorkData = workData;
export const ServicesIllust = SerIllus;

// --> Work Section
import Under from "/assets/Home/Work/Understanding.svg";
import Planning from "/assets/Home/Work/planning.svg";
import WebImg from "/assets/Home/Work/web.svg";
import Socialimg from "/assets/Home/Work/social.svg";
const data = [
    {
      img: Under,
      title: 'Understanding the Client',
      Count: '01',
      Description: 'Discuss goals and target audience with the client and Set clear objectives for both digital marketing and website development.',
    },
    {
      img: Planning,
      title: 'Conduct Research and Planning',
      Count: '02',
      Description: 'Analyze competitors and market trends and Create a strategy that includes both marketing and web development plans.',
    },
    {
      img: WebImg,
      title: 'Develop and Design the Website',
      Count: '03',
      Description: 'Design a user-friendly, responsive website using tools like React and Tailwind CSS. Optimize for SEO to ensure the site ranks well on search engines.',
    },
    {
      img: Socialimg,
      title: 'Launch Marketing Campaigns',
      Count: '04',
      Description: 'Implement digital marketing strategies across chosen channels (SEO, social media, email, etc.). Create and publish content that drives traffic and engagement.',
    },
]
export const HomeWorkData = data;

// --> Client Section
import Spicy from "/assets/Home/Clients/spice-buscket.webp";
import Peter from "/assets/Home/Clients/Header-1536x597-1.webp";
import Omega from "/assets/Home/Clients/omega.webp";
import Kojo from "/assets/Home/Clients/Kojo-06_180x.webp";
import Derma from "/assets/Home/Clients/derma.webp";
import Bad from "/assets/Home/Clients/Boys.png";
import Simply from "/assets/Home/Clients/simply.webp";
import Triplets from "/assets/Home/Clients/Triplets.png";
import Sun from "/assets/Home/Clients/Sunrise.png";

const companies = [
  { company: "Spicy Bucket", logo: Spicy },
  { company: "Peter'Sit", logo: Peter },
  { company: "Omega", logo: Omega },
  { company: "Kojo", logo: Kojo },
  { company: "Derma", logo: Derma },
  { company: "Bad Boys", logo: Bad },
  { company: "SBS", logo: Simply },
  { company: "The TRiPlets", logo: Triplets },
  { company: "Sunrise", logo: Sun },
];
export const Companies = companies;

import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoHappyOutline, IoCheckmarkDoneCircle } from "react-icons/io5";

const experience = [
  {
    Numbers : '5+',
    Comment : "Years of Experience",
    icon: GiSandsOfTime
  },
  {
    Numbers : "100+",
    Comment : "Solution Delivered",
    icon: FaRegLightbulb
  },
  {
    Numbers : "200+",
    Comment : "Happy Customers",
    icon : IoHappyOutline
  },
  {
    Numbers : "200+",
    Comment : "Project Done",
    icon : IoCheckmarkDoneCircle
  }
];
export const Experience = experience;

import TopIllus from '/assets/Home/Clients/TopHeading.svg';
export const ClientHeading = TopIllus;

import BottomIllus from '/assets/Home/Clients/smile.svg';
export const ClientSmile = BottomIllus;

// --> Blog Section

import Delhi86 from "/assets/Home/News/delhi-86.png";
import SEOinfo from "/assets/Home/News/SEO-advantages.webp";
import ECom from "/assets/Home/News/e-commerce.jpg";
import Game from "/assets/Home/News/gaming.webp";

const blog = [
  {
    type: "Bussiness",
    title : "Best Digital Marketing Agency in Delhi-86",
    content : "According to Neil Patel, A agency is a company that specialize in providing a various types of services for online business growth and their presence. Digital marketing agency is a firm or company where we provide services to our customer's.",
    imgSrc : Delhi86,
    date : "September 25, 2024",
  },
  {   
    type: "Blog",
    title: "Best SEO Information and Advantages in 2025",
    content: "The best SEO information and advantages in 2025. SEO it is known as “Search Engine Optimization”. It means you improving the quantity and quality of traffic to your website through organic search result is called search engine optimization.",
    imgSrc: SEOinfo,
    date: "October 2, 2024",
  },
  {
    type: "Blog",
    title: "E-commerce",
    content: "E-commerce business we know about a strategies for e-commerce business. E-commerce is known as Electronic Commerce in this business you buying and selling of goods and service online.  It can involve exchange the products or services between consumers and business both.",
    imgSrc: ECom,
    date: "August 19, 2024",
  },
  {
    type: "Blog",
    title: "Best 5 Gaming Phones of All time You Should Buy",
    content: "Gaming is those part in our life where we release our everything like stress, anxiety, depression, tension, while we play game we don’t think about these because we focus on our game and sometimes once in a rare moment when you play game with your friends you laugh continuously because they making laugh every one of us.",
    imgSrc: Game,
    date: "November 5, 2024",
  },
]
export const Blog = blog;

import Btop from '/assets/Home/News/readingTop.svg';
import Bbottom from '/assets/Home/News/readingBottom.svg';

export const BlogTop = Btop;
export const BlogBottom = Bbottom;


// Home footer 
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const social = [MdOutlineFacebook, BsInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube]

export const Social = social;

import FPhone from '/assets/Home/Footer/FooterIllus.svg';

export const FooterIllus = FPhone;