export type Project = {
  id: string;
  title: string;
  year: number;
  categories: ("Renders" | "Schematics" | "Prototyping" | "Simulation")[];
  tools: string[];
  cover: string;
  images: string[];
  modelUrl?: string;
  videoUrl?: string;
  description?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "turbine-housing",
    title: "Turbine Housing Assembly",
    year: 2025,
    categories: ["Renders", "Schematics"],
    tools: ["Fusion 360", "KeyShot"],
    cover: "/images/turbine-cover.jpg",
    images: ["/images/turbine-1.jpg", "/images/turbine-2.jpg", "/images/turbine-explode.jpg"],
    modelUrl: "/models/turbine.glb",
    videoUrl: "/videos/Piston.mkv",
    description: "Exploded-view studies and physically-based renders for a high-tolerance housing assembly. Features detailed component breakdown and material analysis."
  },
  {
    id: "automotive-suspension",
    title: "Automotive Suspension System",
    year: 2024,
    categories: ["Simulation", "Prototyping"],
    tools: ["SolidWorks", "ANSYS", "Blender"],
    cover: "/images/suspension-cover.jpg",
    images: ["/images/suspension-1.jpg", "/images/suspension-2.jpg", "/images/suspension-analysis.jpg"],
    description: "Complete suspension system design with finite element analysis and stress simulation. Includes kinematic studies and material optimization."
  },
  {
    id: "medical-device",
    title: "Medical Device Prototype",
    year: 2024,
    categories: ["Renders", "Prototyping"],
    tools: ["Rhino", "V-Ray", "3D Printing"],
    cover: "/images/medical-cover.jpg",
    images: ["/images/medical-1.jpg", "/images/medical-2.jpg", "/images/medical-3.jpg"],
    modelUrl: "/models/medical-device.glb",
    description: "Ergonomic medical device design with photorealistic rendering and functional prototyping. Focus on user experience and manufacturability."
  },
  // {
  //   id: "aerospace-component",
  //   title: "Aerospace Component Analysis",
  //   year: 2023,
  //   categories: ["Simulation", "Schematics"],
  //   tools: ["CATIA", "ABAQUS", "MATLAB"],
  //   cover: "/images/aerospace-cover.jpg",
  //   images: ["/images/aerospace-1.jpg", "/images/aerospace-2.jpg", "/images/aerospace-3.jpg"],
  //   description: "High-performance aerospace component with thermal and structural analysis. Includes CFD simulation and material selection studies."
  // },
  // {
  //   id: "industrial-robot",
  //   title: "Industrial Robot Arm",
  //   year: 2023,
  //   categories: ["Renders", "Simulation"],
  //   tools: ["Inventor", "KeyShot", "RobotStudio"],
  //   cover: "/images/robot-cover.jpg",
  //   images: ["/images/robot-1.jpg", "/images/robot-2.jpg", "/images/robot-3.jpg"],
  //   modelUrl: "/models/robot-arm.glb",
  //   description: "6-axis industrial robot arm with motion simulation and collision detection. Features realistic material rendering and workspace analysis."
  // },
  // {
  //   id: "consumer-electronics",
  //   title: "Consumer Electronics Design",
  //   year: 2022,
  //   categories: ["Renders", "Prototyping"],
  //   tools: ["Fusion 360", "Substance Painter", "Marmoset"],
  //   cover: "/images/electronics-cover.jpg",
  //   images: ["/images/electronics-1.jpg", "/images/electronics-2.jpg", "/images/electronics-3.jpg"],
  //   description: "Modern consumer electronics with focus on aesthetics and functionality. Includes material studies and manufacturing considerations."
  // }
];

export const CATEGORIES = ["Renders", "Schematics", "Prototyping", "Simulation"] as const;
