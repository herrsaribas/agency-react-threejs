import shopify from "../assets/img/shopify.png";
import adobe from "../assets/img/adobe.png";
import wordpress from "../assets/img/wordpress.png";
import meta from "../assets/img/meta.png";
import ghost from "../assets/img/ghost.png";
import webflow from "../assets/img/webflow.png";
import google from "../assets/img/google.png";
import figma from "../assets/img/figma.png";
import project1 from "../assets/img/project1.jpg";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.png";

const partners = [
  {
    title: "Shopify",
    icon: shopify,
  },
  {
    title: "Adobe Creative Suits",
    icon: adobe,
  },
  {
    title: "Wordpress",
    icon: wordpress,
  },
  {
    title: "Meta",
    icon: meta,
  },
  {
    title: "Webflow",
    icon: webflow,
  },
  {
    title: "Ghost",
    icon: ghost,
  },
  {
    title: "Google",
    icon: google,
  },
  {
    title: "Figma",
    icon: figma,
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Pet Store",
    description:
      "Mern Stack E-Commerce aplication that can effectively showcase the products and services offered by a fictional business, while providing a seamless and intuitive shopping experience for the end-users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/herrsaribas/pet-shop",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "#blue",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { partners, projects };
