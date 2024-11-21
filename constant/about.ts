export interface TimelineItem {
    id: number;
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    icon: 'work' | 'education';
  }
  
  export const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "UI Engineer",
        date: "Jan 2023 - Present",
        description: "React.JS | Javascript | Figma Templates & Pictures to Website",
        icon: "work"
      },
      {
        id: 2,
        title: "Full Stack Developer",
        date: "Jan 2023 - Present",
        description: "React.JS |Typescript | Html | CSS | TailwindCSS | Next.js",
        icon: "work"
      },
      
    {
      id: 3,
      title: "Education",
      description: "ICOM of Computer Applications",
      date: "2021 - 2023",
      icon: "education"
    }
  ];