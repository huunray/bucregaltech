import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// ... (Your image imports remain the same)
import deepLearningImage from '../assets/ai/download (2).jpg';
import buildProductImage from '../assets/ai/download (4).jpg';
import dev1 from '../assets/cloud,devOps/dev1.jpg';
import dev2 from '../assets/cloud,devOps/dev2.jpg';
import dev3 from '../assets/cloud,devOps/dev3.jpg';
import dev4 from '../assets/cloud,devOps/dev4.jpg';
import dev5 from '../assets/cloud,devOps/dev5.png';
import soft1 from '../assets/software development/soft1.png';
import soft2 from '../assets/software development/soft2.jpg';
import soft3 from '../assets/software development/soft3.svg';
import soft4 from '../assets/software development/soft4.png';
import data1 from '../assets/Data/data1.png';
import data2 from '../assets/Data/data2.png';
import data3 from '../assets/Data/data3.png';
import market2 from '../assets/marketing/market2.jpg';
import market3 from '../assets/marketing/market3.jpg';
import market4 from '../assets/marketing/market4.jpg';
import design1 from '../assets/design/design1.svg';
import design2 from '../assets/design/design2.jpg';
import design3 from '../assets/design/design3.jpg';

// --- Data Structures (Unchanged) ---
// Define the structure for a single course
const courseData = {
    // ... (Your courseData object remains the same)
   
    'Cloud, DevOps and Cybersecurity': [
        { level: 'Introduction', title: 'Introduction to Cybersecurity', description: 'This program serves as an introductory course to the field of cybersecurity. By completing this track, you will acquire a solid understanding cybersecurity.', imageSrc: dev1, route: '/Introduction' },
        { level: 'Introduction', title: 'The DevOps Bootcamp: Kubernetes Certified', description: 'Master the fundamentals of DevOps and cloud-native technologies with our Kubernetes-certified training program.', imageSrc: dev2, route: '/TheDevOps' },
        { level: 'Introduction', title: 'Azure Fundamentals Certification Preparation', description: 'Gain a solid foundation in Microsoft Azure and get ready for your Azure Fundamentals Certification.', imageSrc: dev3, route: '/AzureFundamentals' },
        { level: 'Introduction', title: 'Cybersecurity – CompTIA Security+ Certified', description: 'Enroll in our cybersecurity training to gain in-depth knowledge and prepare for the CompTIA Security+ certification.', imageSrc: dev5, route: '/CybersecurityCompTIA' },
        { level: 'Introduction', title: 'AWS Cloud Practitioner Certification Preparation', description: 'Build a strong foundation in cloud computing and prepare for the AWS Certified Cloud Practitioner certification.', imageSrc: dev4, route: '/AWSCloud' },
    ],
    'Software Development': [
        { level: 'Introduction', title: 'Introduction to Web Programming', description: 'A beginner-friendly training, tailored to help you build your first website with hands-on learning and expert guidance.', imageSrc: soft1,route:'/SoftwareIntroduction' },
        { level: 'Advanced', title: 'Front End Developer – React JS', description: 'Dive into React JS mastery in our advanced course for developers with basic front-end skills.', imageSrc: soft2,route:'/SoftwareFrontEnd' },
        { level: 'Advanced', title: 'Back End Developer – Node-JS', description: 'Master the server-side of web development with our Back Web Development Course. Learn to build robust, scalable, and secure web applications using industry standard technologies.', imageSrc: soft3,route:'/SoftwareBackend' },
        { level: 'Advanced', title: 'Fullstack Developer – MERN', description: 'Learn to build complete web applications from scratch with our Full stack Web Development Course. Master both front-end and back-end development, and become a versatile full-stack developer.', imageSrc: soft4,route: '/SoftwareFullstack' },
    ],
    'Data': [
        { level: 'Introduction', title: 'Data Scientist', description: 'Master essential data skills in our bootcamp for career changers and entry-level analysts. Blend theory and practice for success in the dynamic data world.', imageSrc: data3 ,route: '/DataScientist'},
        { level: 'Introduction', title: 'Introduction to Python', description: 'Start with our beginner-friendly course, where you’ll learn the basics to build your first Python app.', imageSrc: data2,route: '/IntroductionToPython' },
        { level: 'Introduction', title: 'Data Analytics – Microsoft Power BI Certified', description: 'Excel in data analytics with our Power BI Data Analyst training, ideal for professionals seeking Microsoft Power BI certification.', imageSrc: data1 ,route: '/DataAnalytics'},
    ],
    
    'Design': [
        { level: 'Advanced', title: 'UX & UI Design', description: 'Deepen your UX and UI skills with our advanced training. Elevate your proficiency for seamless digital experiences!', imageSrc: design1 ,route: '/UiUx'},
        { level: 'Advanced', title: 'Graphic Design – Adobe Certified', description: 'Elevate your graphic design skills with our specialized training. Become Adobe certified for advanced proficiency.', imageSrc: design2 ,route: '/GraphicDesign'},
        { level: 'Introduction', title: 'Introduction to Graphic Design', description: 'Learn the essentials of graphic design in just 3 months. Develop your skills in creating eye-catching visuals using Adobe Illustrator and boost your creative potential', imageSrc: design3 ,route: '/IntroductionToGraphic'},
    ],
};

// List of available course categories
const courseCategories = [
    { name: 'Cloud, DevOps and Cybersecurity', icon: '☁️' },
    { name: 'Software Development', icon: '💻' },
    { name: 'Data', icon: '📊' },
    { name: 'Design', icon: '🎨' }
];


// --- Course Card Component (Unchanged) ---
const CourseCard = ({ course }) => {
    const levelTagClasses = course.level === 'Advanced' 
        ? 'bg-[#2D3353] text-white' 
        : 'bg-[#4F5580] text-white'; 

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl">
            <div className="h-48 w-full overflow-hidden">
                {course.imageSrc ? (
                    <img 
                        src={course.imageSrc}
                        alt={`Image for ${course.title}`} 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <div className={`h-full w-full bg-gray-300 flex items-center justify-center`}>
                        <p className="text-xl font-bold text-black/50">Course Visual</p>
                    </div>
                )}
            </div>

            <div className="p-5 flex-grow">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${levelTagClasses}`}>
                    {course.level}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
            </div>

            <Link 
                // Uses the 'route' field from the course data
                to={course.route || '#'} 
                className="w-full py-4 bg-[#2D3353] text-white text-base font-bold transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 text-center"
            >
                Learn more
            </Link>
        </div>
    );
};


// --- Main Course Section Component (FIXED) ---
const CourseSection = () => {
    // 1. Initialize useSearchParams hook
    const [searchParams, setSearchParams] = useSearchParams();

    // 2. Get the active category from the URL, or default to the first category
    const defaultCategory = courseCategories[0].name;
    const activeCategoryFromUrl = searchParams.get('category');
    
    // 3. Determine the final active category state
    const activeCategory = courseCategories.find(c => c.name === activeCategoryFromUrl)?.name || defaultCategory;

    // 4. Function to change the category and update the URL
    const setActiveCategory = (categoryName) => {
        // This updates the URL search param: ?category=CategoryName
        setSearchParams({ category: categoryName });
    };

    const activeCourses = courseData[activeCategory] || [];

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8" id="courses">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Explore Our Programs</h2>
            
            {/* --- Header/Tab Section --- */}
            <div className="flex flex-wrap justify-center p-2 sm:p-4 mb-12 bg-gray-50 rounded-xl shadow-inner">
                {courseCategories.map((category) => (
                    <button
                        key={category.name}
                        // Use the new setActiveCategory function
                        onClick={() => setActiveCategory(category.name)}
                        className={`
                            px-4 py-2 sm:px-6 sm:py-3 m-1 text-sm font-semibold rounded-full transition duration-300 ease-in-out flex items-center whitespace-nowrap
                            ${activeCategory === category.name
                                // Active state
                                ? 'bg-[#2D3353] text-white shadow-md hover:bg-[#2D3353]'
                                // Inactive state
                                : 'bg-transparent text-gray-700 hover:bg-gray-200'
                            }
                        `}
                    >
                        {/* Icon/Emoji */}
                        <span className="mr-2 text-lg">{category.icon}</span> 
                        {category.name}
                    </button>
                ))}
            </div>

            {/* --- Course Cards Section --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeCourses.length > 0 ? (
                    activeCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))
                ) : (
                    <p className="col-span-full text-center p-10 text-lg text-gray-500">
                        No courses available for **{activeCategory}** yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CourseSection;