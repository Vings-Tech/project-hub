export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Portfolio' | 'Website' | 'Project' | 'Web App' | 'Game';
  techStack: string[];
  liveLink: string;
  desktopSupport: boolean;
  mobileSupport: boolean;
  fullDescription: string;
}

export const projects: Project[] = [
  // Portfolios (5)
  {
    id: 'port-1',
    title: 'Portfolio 1',
    description: 'A modern interactive portfolio featuring smooth animations, structured layouts, and responsive design optimized for all devices.',
    category: 'Portfolio',
    techStack: ['Typescript', 'Framer Motion', 'Tailwind'],
    liveLink: 'https://portfolio-1-bay-zeta.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed to deliver a seamless user experience with smooth page transitions and well-structured sections. It incorporates animation-driven interactions using Framer Motion, responsive layouts built with Tailwind CSS, and a clean component-based architecture using TypeScript. The design emphasizes readability, performance, and visual hierarchy, ensuring consistent behavior across both desktop and mobile environments.'
  },
  {
    id: 'port-2',
    title: 'Portfolio 2',
    description: 'A visually engaging portfolio with animated sections, interactive UI elements, and a responsive layout for seamless browsing.',
    category: 'Portfolio',
    techStack: ['Typescript', 'Framer Motion', 'Tailwind'],
    liveLink: 'https://portfolio-2-sigma-two.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio emphasizes interactive UI behavior and smooth user flow across sections. It leverages Framer Motion for subtle animations and transitions, creating an engaging browsing experience. Built with TypeScript and Tailwind CSS, the layout is fully responsive and optimized for performance. The structure focuses on modular components, clean navigation, and consistent spacing, making it both visually appealing and easy to explore on any device.'
  },
  {
    id: 'port-3',
    title: 'Portfolio 3',
    description: 'A structured portfolio focused on clear content hierarchy, smooth navigation, and responsive layout consistency across devices.',
    category: 'Portfolio',
    techStack: ['Typescript', 'Framer Motion', 'Tailwind'],
    liveLink: 'https://portfolio-3-wine-one.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed with a strong emphasis on user experience and content organization. It features a well-defined layout structure, intuitive navigation flow, and consistent spacing to improve readability. Built using TypeScript and Tailwind CSS, the interface adapts seamlessly across screen sizes. Framer Motion is used to enhance transitions subtly, ensuring the experience remains smooth without overwhelming the user. The overall design prioritizes clarity, accessibility, and efficient content presentation.'
  },
  {
    id: 'port-4',
    title: 'Portfolio 4',
    description: 'A professional portfolio designed for client-focused presentations with clear sections, smooth navigation, and responsive layouts.',
    category: 'Portfolio',
    techStack: ['Typescript', 'Framer Motion', 'Tailwind'],
    liveLink: 'https://portfolio-4-navy-theta.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is built with a focus on real-world usability and client presentation. It features clearly structured sections such as services, projects, and contact, allowing users to navigate efficiently. The UI is designed to maintain consistency and readability across devices, using Tailwind CSS for responsive layouts and TypeScript for scalable architecture. Subtle animations powered by Framer Motion enhance the experience without distracting from the content, making it suitable for professional and business-oriented use cases.'
  },
  {
    id: 'port-5',
    title: 'Portfolio 5',
    description: 'A visually rich portfolio featuring bold design elements, smooth animations, and an immersive user experience across devices.',
    category: 'Portfolio',
    techStack: ['Typescript', 'Framer Motion', 'Tailwind'],
    liveLink: 'https://portfolio-5-sepia.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed to create a strong visual impact through creative layouts and animation-driven interactions. It utilizes Framer Motion to deliver fluid transitions and engaging effects, while Tailwind CSS ensures responsiveness and design consistency. Built with TypeScript for maintainability, the project explores a more experimental approach to UI design, combining aesthetics with performance. The result is an immersive and memorable experience that highlights creativity without compromising usability.'
  },
  {
    id: 'port-6',
    title: 'Portfolio 6',
    description: 'A clean, neumorphism-based portfolio showcasing AI/ML projects, skills, and real-world problem-solving capabilities with a responsive and professional UI.',
    category: 'Portfolio',
    techStack: ['React', 'Vite', 'CSS', 'Framer Motion'],
    liveLink: 'https://portfolio-6-ecru.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed for a final-year AI & Machine Learning student, focusing on clarity, usability, and recruiter-friendly presentation. It uses a neumorphism-based design system with soft shadows and a dark theme to create a modern and professional interface. The project highlights AI/ML applications, including problem-solving projects, structured case studies, and technical skills. Framer Motion is used for subtle animations to enhance user experience without affecting performance. Built with React and Vite, the application is optimized for responsiveness, fast loading, and seamless deployment on platforms like Vercel. The goal is to present technical expertise and project work in a clean, accessible, and impactful manner.'
  },
  {
    id: 'port-7',
    title: 'Portfolio 7',
    description: 'A premium Glassmorphism-based portfolio crafted for a senior software developer with 10+ years of industry experience, showcasing enterprise projects, technical leadership, and large-scale solution architecture.',
    category: 'Portfolio',
    techStack: ['React', 'Vite', 'CSS', 'Framer Motion'],
    liveLink: 'https://portfolio-7-delta.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed for a highly experienced software developer with over 10 years of professional expertise in building scalable applications, leading engineering teams, and delivering enterprise-grade solutions. The design follows a modern neumorphism-based system with soft shadows, refined spacing, and a sophisticated dark theme to create a premium and executive-level visual experience. The portfolio emphasizes career achievements, complex software architectures, production deployments, leadership roles, system design capabilities, and impactful real-world projects delivered across multiple domains. Dedicated sections highlight technical expertise, system scalability, cloud integrations, performance optimization, and cross-functional collaboration experience. Framer Motion is used to provide subtle and polished animations that enhance professionalism without compromising performance. Built with React and Vite, the application is optimized for responsiveness, fast loading, and seamless deployment on platforms like Vercel. The primary goal is to present years of industry experience, technical depth, leadership capability, and proven business impact in a clean, recruiter-friendly, and client-ready format.'
  },
  {
    id: 'port-8',
    title: 'Portfolio 8',
    description: 'A premium Glassmorphism-based portfolio crafted for a senior software developer with 10+ years of industry experience, showcasing enterprise projects, technical leadership, and large-scale solution architecture.',
    category: 'Portfolio',
    techStack: ['React', 'Vite', 'CSS', 'Framer Motion'],
    liveLink: 'https://portfolio-8-sable.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed for a highly experienced software developer with over 10 years of professional expertise in building scalable applications, leading engineering teams, and delivering enterprise-grade solutions. The design follows a modern neumorphism-based system with soft shadows, refined spacing, and a sophisticated dark theme to create a premium and executive-level visual experience. The portfolio emphasizes career achievements, complex software architectures, production deployments, leadership roles, system design capabilities, and impactful real-world projects delivered across multiple domains. Dedicated sections highlight technical expertise, system scalability, cloud integrations, performance optimization, and cross-functional collaboration experience. Framer Motion is used to provide subtle and polished animations that enhance professionalism without compromising performance. Built with React and Vite, the application is optimized for responsiveness, fast loading, and seamless deployment on platforms like Vercel. The primary goal is to present years of industry experience, technical depth, leadership capability, and proven business impact in a clean, recruiter-friendly, and client-ready format.'
  },
  {
    id: 'port-9',
    title: 'Portfolio 9',
    description: 'A premium hybrid Glassmorphism and soft Neumorphic portfolio crafted for a 3+ year experienced Frontend Developer and React.js Specialist, showcasing production-ready projects, technical expertise, and client-facing engineering experience.',
    category: 'Portfolio',
    techStack: ['React', 'Vite', 'CSS', 'Framer Motion'],
    liveLink: 'https://portfolio-9-xi.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This portfolio is designed for a 3+ year experienced Frontend Developer and React.js Specialist with strong expertise in responsive web application development, production support, and client-facing technical workflows. The design follows a premium hybrid visual system that combines 70% Glassmorphism and 30% soft Neumorphic depth, creating a modern developer-dashboard aesthetic inspired by VS Code and GitHub dark themes. The portfolio highlights professional experience in React.js development, deployment support, debugging, client management, and technical operations. Dedicated sections such as Home, About, Build & Stack, Experience, and Contact are structured to present technical skills, featured projects, workflow strengths, and career growth in a recruiter-friendly and visually stunning format. Framer Motion is used for smooth section reveals, hover animations, and subtle UI transitions to enhance the premium feel. Built with React and Vite, the application is fully responsive, optimized for performance, and deployment-ready for Vercel. The primary goal is to present technical capability, project execution experience, and professional growth in a clean, modern, and highly professional single-page portfolio.'
  },
  // Websites (1)
  {
    id: 'proj-5',
    title: 'Nova Tech Company Website',
    description: 'A modern IT solutions website showcasing services, technologies, and company capabilities with a professional UI.',
    category: 'Website',
    techStack: ['Node.js', 'InfluxDB', 'Grafana'],
    liveLink: 'https://project-5-nt.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'This project represents a professional company website designed to present IT services, technical expertise, and business solutions in a structured and visually appealing manner. It includes sections such as services, technologies, portfolio, and contact, ensuring clear navigation and user engagement. The application focuses on clean design, responsiveness, and performance, providing a seamless experience across devices while maintaining a strong corporate identity.'
  },

  // Projects (4)
  {
    id: 'proj-1',
    title: 'Supply Chain Management System',
    description: 'A full-stack application for managing inventory, tracking orders, and streamlining supply chain operations.',
    category: 'Project',
    techStack: ['Typescript', 'React', 'Browser Based Storage'],
    liveLink: 'https://scm-nexus.vercel.app/',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'This application is designed to simplify supply chain processes by providing tools for inventory management, order tracking, and operational monitoring. It allows users to manage stock levels, oversee product movement, and maintain structured data flow across the system. The platform focuses on improving efficiency and visibility within supply chain operations, offering a clean interface and responsive experience for better control and decision-making.'
  },
  {
    id: 'proj-2',
    title: 'Workflow Management System',
    description: 'A web application for managing tasks, tracking workflows, and improving process efficiency across operations.',
    category: 'Project',
    techStack: ['React', 'MQTT', 'TypeScript'],
    liveLink: 'https://project-2-wf.vercel.app/',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'This application is designed to streamline workflow processes by providing a structured interface for task management and progress tracking. It allows users to create, organize, and monitor tasks across different stages, ensuring better visibility and control over operations. The system focuses on improving productivity through clear workflow visualization and efficient task handling, offering a responsive and user-friendly experience across devices.'
  },
  {
    id: 'proj-3',
    title: 'Healthcare Management System',
    description: 'A web-based system for managing patient records, appointments, and healthcare workflows efficiently.',
    category: 'Project',
    techStack: ['Ethers.js', 'React', 'Alchemy'],
    liveLink: 'https://project-3-hc.vercel.app/',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'This application is designed to streamline healthcare operations by providing tools for managing patient information, scheduling appointments, and tracking medical workflows. It enables efficient handling of records and improves coordination between different processes within the system. The interface focuses on clarity and accessibility, ensuring that users can easily navigate and manage data. The project emphasizes structured data management and operational efficiency in a healthcare environment.'
  },
  {
    id: 'proj-4',
    title: 'Hospital Information System',
    description: 'A centralized system for managing patient data, appointments, and hospital operations efficiently.',
    category: 'Project',
    techStack: ['Next.js', 'PostgreSQL', 'Recharts'],
    liveLink: 'https://project-4-his.vercel.app/login',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'This application is designed to handle core hospital operations by providing a unified platform for patient record management, appointment scheduling, and administrative tasks. It enables efficient data handling and improves coordination between different departments within the hospital. The system includes data visualization features to monitor patient flow and operational metrics, ensuring better decision-making and streamlined healthcare services.'
  },

  // Web Apps (4)
  {
    id: 'app-1',
    title: 'Ethernote',
    description: 'A clean and responsive note-taking application for organizing ideas, tasks, and structured content efficiently.',
    category: 'Web App',
    techStack: ['React', 'TypeScript', 'Browser Based Storage'],
    liveLink: 'https://app-ether-note.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'Ethernote is a lightweight and intuitive note management application designed to help users capture and organize information seamlessly. It allows users to create, edit, and manage notes in a structured format with real-time updates. The application focuses on simplicity, performance, and accessibility, ensuring a smooth experience across devices. With a clean UI and efficient state management, it provides a distraction-free environment for productivity and idea management.'
  },
  {
    id: 'app-2',
    title: 'QR Nest',
    description: 'A fast and user-friendly QR code generator for creating and managing scannable links and data.',
    category: 'Web App',
    techStack: ['link auto save', 'React', 'Tailwind'],
    liveLink: 'https://qr-nest-app-weld.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'QR Nest is a utility-driven web application designed to generate and manage QR codes efficiently. It allows users to create QR codes for URLs, text, and other data formats with instant preview and download options. Built with Next.js and Supabase, the application ensures fast performance and reliable data handling. The interface is clean and responsive, making it easy to use across devices while focusing on simplicity and practical functionality.'
  },
  {
    id: 'app-3',
    title: 'Layout Lab',
    description: 'An interactive layout builder for experimenting with UI structures, spacing systems, and responsive design patterns.',
    category: 'Web App',
    techStack: ['React', 'tailwind', 'css responsiveness'],
    liveLink: 'https://app-layout-lab.vercel.app/',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'Layout Lab is a design-focused web application that allows users to experiment with different layout structures and UI patterns in real time. It provides tools to adjust spacing, alignment, and component positioning, helping developers and designers visualize responsive layouts effectively. The platform emphasizes flexibility and precision, offering a smooth and interactive experience. It is built to support rapid UI prototyping while maintaining clean and scalable design principles.'
  },
  {
    id: 'app-4',
    title: 'Layerly',
    description: 'A design-focused web app for managing layered UI elements and building structured interface components efficiently.',
    category: 'Web App',
    techStack: ['React Native', 'Tailwind', 'UI/UX Design'],
    liveLink: 'https://app-layerly.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'Layerly is a UI-focused application designed to help developers and designers manage layered components and visual hierarchies effectively. It allows users to organize interface elements, control layering order, and experiment with structured designs in a streamlined environment. The application emphasizes clarity, modular design, and smooth interaction, making it useful for building and testing modern UI systems while maintaining a clean and intuitive user experience.'
  },

  // Game (1)
  {
    id: 'game-1',
    title: 'T-Strike',
    description: 'A browser-based shooting game with real-time controls, fast gameplay, and responsive keyboard interactions.',
    category: 'Game',
    techStack: ['Three.js', 'WebAudio API', 'React'],
    liveLink: 'https://game-t-strike.vercel.app/',
    desktopSupport: true,
    mobileSupport: false,
    fullDescription: 'T-Strike is an interactive browser game focused on fast-paced shooting mechanics and responsive controls. Players engage in real-time action using keyboard inputs, with smooth animations and dynamic gameplay elements. Built using modern web technologies, the game emphasizes performance, rendering efficiency, and seamless user interaction. It demonstrates the integration of game logic, event handling, and visual feedback within a web-based environment, providing an engaging experience on desktop platforms.'
  },
  {
    id: 'game-2',
    title: 'Optiqo',
    description: 'A visually immersive design training platform focused on color perception, typography precision, and font recognition.',
    category: 'Game',
    techStack: ['React', 'Vite', 'CSS', 'Canvas API'],
    liveLink: 'https://game-optiqo.vercel.app/',
    desktopSupport: true,
    mobileSupport: true,
    fullDescription: 'Optiqo is a modern, interactive web application designed to train visual intelligence in design. It features three core modules: Chromiq (color perception and theory training), Typiq (typography and kerning precision), and Fontiq (font and weight recognition). The platform combines real-time user interaction, smooth UI animations, and a neumorphic design system to create a tactile and engaging experience. Built using React and optimized for performance, Optiqo demonstrates advanced frontend skills including state management, dynamic rendering, interactive game logic, and responsive design, making it a high-quality portfolio project for UI/UX and frontend development.'
  }
];
