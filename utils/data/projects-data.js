import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: '🤖 AI Agent by Sharath Kumar Reddy',
        description: "Developed a personal AI Agent using MCP with OAuth 2.0, integrated LinkedIn/X APIs, and a Node.js backend to automate social media tasks and reduce manual effort.",
        tools: ['MCP','Node.js','CSExpress.js','OAuth 2.0','LinkedIn API', 'X API'],
        role: 'AI Automation',
        code: 'https://github.com/sharath-66b6/AI-Agent-by-Sharath-Kumar-Reddy',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'SmartCode AI',
        description: 'Developed and deployed SmartCode AI, an AI-powered code reviewer using Node.js, Express, and Gemini API, reducing debugging time by 50% and enabling 60% faster feature rollouts through automated Vercel deployments and optimized backend performance.',
        tools: ['Vercel', 'React.js', 'Node.js', 'Express', 'Gemini API', 'CSS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/sharath-66b6/SmartCode-AI__',
        demo: 'https://smartcode-ai.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'CareerCrafter',
        description: 'Designed and developed CareerCrafter, an all-in-one mobile app using Flutter and Figma, combining AI chatbot, job prep tools, and community features—boosting user engagement by 30% and downloads by 50%.',
        tools: ['Flutter,','Dart','Figma', 'Android Studio'],
        role: 'Mobile App Developer',
        code: 'https://github.com/sharath-66b6/CareerCrafter',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'GhostBrowse',
        description: "Designed and pitched GhostBrowse, a secure, disposable cloud-powered browser solution that isolates online sessions to prevent cyber threats, with a freemium model, strategic go-to-market plan, and scalable roadmap for global impact.",
        tools: ['Docker','Cloud services','Virtualization','Node'],
        role: 'Virtual Bowser Developer',
        code: 'https://github.com/sharath-66b6/GhostBrowse2',
        demo: '',
        image: ayla,
        
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },