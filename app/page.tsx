import { AboutMe, ExperienceCard, Header, NavBar } from "@/components";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-900 h-screen w-full">
      <NavBar />
      <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
        <Header />
        <AboutMe />
        <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">Work Experience</h3>
          <div className="flex flex-col items-start dark:border-gray-800 rounded lg:p-4 relative">
            <ExperienceCard duration="November 2024 - Present" designation="NextJS Developer" company="Saral Stratup School, Banglore" bio="At Saral Startup School, I work on Next.js, developing and refining the platform’s user experience. My contributions include:" listItems={['Building and fixing UI components to enhance the website&apos;s design and functionality.', 'Developing and optimizing backend APIs to efficiently fetch relevant data.', 'Improving web vitals, significantly boosting website performance.', 'Ensuring SEO best practices while working on the frontend to maintain strong search visibility.']} skills={['NextJS', 'React', 'SEO', 'Web Vitals', 'TailwindCSS', 'Strapi']} />
            <ExperienceCard duration="August 2024 - October 2024" designation="Full Stack Trainee" company="SmartBridge, Hyderabad" bio="At SmartBridge, I trained in full-stack development, specializing in the MERN stack. My key contributions and learnings include:" listItems={['Completed a full MongoDB course, deepening my database expertise.', 'Developing a real-time video conferencing application using WebRTC and Socket.io.']} skills={['MongoDB', 'React', 'Socket.io', 'WebRTC', 'JWT', 'Express', 'Node']} />
          </div>
        </div>
      </main>
    </div>
  );
}
