
import { motion } from 'framer-motion';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { FaFilter, FaSearch } from 'react-icons/fa';

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 1250,
      duration: "12 weeks",
      price: 299,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Dev", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 890,
      duration: "16 weeks",
      price: 399,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Data Science", "Python", "AI"]
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Wilson",
      rating: 4.7,
      students: 2100,
      duration: "8 weeks",
      price: 199,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Marketing", "SEO", "Social Media"]
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Rodriguez",
      rating: 4.9,
      students: 750,
      duration: "10 weeks",
      price: 249,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Design", "Figma", "UX Research"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "James Park",
      rating: 4.8,
      students: 680,
      duration: "14 weeks",
      price: 349,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile", "React Native", "Flutter"]
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      instructor: "Dr. Lisa Zhang",
      rating: 4.9,
      students: 520,
      duration: "12 weeks",
      price: 279,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Security", "Ethical Hacking", "Network"]
    }
  ];

  const filters = ['All', 'Web Dev', 'Data Science', 'Design', 'Marketing', 'Mobile', 'Security'];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => 
        course.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of industry-leading courses 
            designed to accelerate your career growth.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 mb-12 items-center justify-between"
        >
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 items-center">
            <FaFilter className="text-gray-500" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover-cursor ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 hover-cursor">
            Load More Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
