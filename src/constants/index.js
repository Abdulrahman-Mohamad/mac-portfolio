const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Abdulrahman-Mohamad",
  },
  {
    id: 2,
    text: "WhatsApp",
    icon: "/icons/whatsapp.svg",
    bg: "#4bcb63",
    link: "https://wa.me/201013977924",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AbdulRahma97784",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/abdulrahman-mohamad-0578bb192/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/abdelrahman.jpg",
  },
  {
    id: 2,
    img: "/images/gal1.jpg",
  },
  {
    id: 3,
    img: "/images/gal2.jpg",
  },
  {
    id: 4,
    img: "/images/gal3.jpg",
  },
  {
    id: 5,
    img: "/images/gal4.jpg",
  },
  {
    id: 6,
    img: "/images/gal5.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [


    // ▶ Project 1 (AI Resume Analyzer)
    {
      id: 5,
      name: "3D Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[4vh] left-16",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed using React 19 and Vite, ensuring a high-performance, modern single-page application experience with smooth client-side routing via React Router v7.",
            "It features immersive 3D elements and animations powered by Three.js (@react-three/fiber, @react-three/drei) and GSAP, creating a dynamic and memorable user interface.",
            "The design is fully responsive and styled with Tailwind CSS v4, incorporating custom animations and a polished aesthetic that adapts seamlessly to all device sizes.",
            "Includes dedicated sections for showcasing a diverse project portfolio, professional testimonials, and a detailed career timeline, all managed through a centralized data structure for easy updates."
          ],
        },
        {
          id: 2,
          name: "3D Portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://portfolio-zeta-three.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "3D Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/3dportfolio.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/JAXge1fx5UInSUp7n8dtil/Untitled?node-id=0-1&t=FhMoTjA7tG2NYMvf-1",
          position: "top-60 left-5",
        },
      ],
    },
    // ▶ Project 2 (AI Resume Analyzer)
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-10",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-resume-analyzer-one-gold.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/1ORO8ueSeJM8nyOUNDWHbf/AI-Resume-Analyzer?node-id=0-1&t=JPP4G0qP8QEcO0x7-1",
          position: "top-60 left-5",
        },
      ],
    },
    // ▶ Project 3 (SPORTS HUB)
    {
      id: 7,
      name: "SPORTS HUB",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[36vh] left-15",
      children: [
        {
          id: 1,
          name: "SPORTS HUB.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The project is an interactive sports gaming platform that allows users to participate in prediction games, trivia challenges, and win prizes.",
            "Built with Next.js 15, TypeScript, and Tailwind CSS, it fully supports both Arabic and English languages through next-intl for seamless localization.",
            "It relies on an advanced authentication system featuring JWT tokens and OTP verification, with state management handled via React Context.",
            "The application communicates with a backend API using axios with intelligent error handling and automatic retry mechanisms, providing a smooth user experience across all devices.",
          ],
        },
        {
          id: 2,
          name: "sports-hub.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sportshubbh.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "sports hub.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/sportshub.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/rDcvfZxb70w6cisivBoYEc/SPORTS-HUB?node-id=0-1&t=SWNTxkOyp0gKIJHt-1",
          position: "top-60 left-5",
        },
      ],
    },
    // ▶ Project 4 (Movira)
    {
      id: 8,
      name: "Movira",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[49vh] left-16",
      children: [
        {
          id: 1,
          name: "Movira.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built with React Native and Expo to deliver a high-performance, cross-platform mobile experience with a consistent native feel on both iOS and Android.",
            "Integrates the TMDB API for real-time movie data fetching, providing users with up-to-date information, ratings, and high-quality media content.",
            "Utilizes Appwrite as a robust Backend-as-a-Service for secure user authentication, real-time database management, and cloud storage for user profiles.",
            "Implements NativeWind for modern styling and React Native Reanimated for fluid UI transitions, creating a visually stunning and interactive user interface.",
          ],
        },
        {
          id: 2,
          name: "Download App Links",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "download",
          position: "top-20 left-20",
          ios: "https://expo.dev/accounts/abdulrahman-mohamd/projects/movie-app/updates/2f6f3eda-f466-485e-8983-b6d6943779f6",
          android: "https://expo.dev/artifacts/eas/5yCjjv1AUmnwBYwkT7UwEW.apk",
          iosText: "Install Expo Go on your iOS device and use this link within the app to run the application.",
          androidText: "Open this link on your Android device to download and install the app directly",

        },
        {
          id: 4,
          name: "Movira.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/movira.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/H6LFjZRD95lu2okdz1higu/Movira?node-id=4-2&t=fMzvHORyD0BcXY9c-1",
          position: "top-60 left-5",
        },
      ],
    },
    // ▶ Project 5 (Infinity Builder)
    {
      id: 9,
      name: "Infinity Builder",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[64vh] left-14",
      children: [
        {
          id: 1,
          name: "Infinity Builder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a high-performance full-stack application using React 19, Vite, and Tailwind CSS 4, featuring a sleek, responsive UI with smooth animations powered by Framer Motion.",
            "Integrated OpenAI's API to process natural language prompts and generate structured website layouts, content, and components in real-time.",
            "Built a secure and scalable backend with Express, Prisma, and PostgreSQL, incorporating Better Auth for robust user authentication and project management.",
            "Implemented a credit-based system and a streamlined dashboard that allows users to create, preview, and manage multiple AI-generated projects efficiently."
          ],
        },
        {
          id: 2,
          name: "Infinity Builder",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-website-builder-client-xi.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Infinity Builder.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/infinty-builder.webp",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/A0zUMvZNcaLKCq3A0YmCR7/Ai-Website-Builder?node-id=0-1&t=GCmOkeF5piJtF04a-1",
          position: "top-60 left-5",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/abdelrahman.jpg",
    },
    {
      id: 2,
      name: "Casual.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal1.jpg",
    },
    {
      id: 3,
      name: "At Dahab.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal2.jpg",
    },
    {
      id: 4,
      name: "About Me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/abdelrahman.jpg",
      description: [
        "Hey! I’m Abdelrahman 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "3D Rotate.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://3d-rotate-lilac.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 2,
      name: "Animate SVG.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://animate-svg-gamma.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 3,
      name: "Auto Slider.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://auto-slider-fawn.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 4,
      name: "Spider Animation.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://spider-animation.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 5,
      name: "Hong Kong.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://hong-kong-rosy.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 6,
      name: "INK Animation.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://ink-animation.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 7,
      name: "Scroll Animation.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://scroll-animation-navy.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 8,
      name: "Slide Animation.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://slide-animation-gules.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 9,
      name: "Slider 3D.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://slider-3d-gamma.vercel.app/",
      position: "top-40 left-80",
    },
    {
      id: 10,
      name: "Three.js Scroll.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://3js-animation-zeta.vercel.app/",
      position: "top-40 left-80",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  downloadfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };