
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { FaStar, FaUsers, FaClock, FaArrowRight } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  image: string;
  tags: string[];
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(142, 68, 173, 0.2)' 
      : '0 5px 15px rgba(0, 0, 0, 0.1)',
    config: { tension: 300, friction: 20 }
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div 
        style={springProps}
        className="glass-card rounded-2xl overflow-hidden hover-cursor group"
      >
        {/* Course Image */}
        <div className="relative overflow-hidden h-48">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              ${course.price}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-gray-600">by {course.instructor}</p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUsers />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Enroll Button */}
          <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            Enroll Now
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
      </animated.div>
    </motion.div>
  );
};

export default CourseCard;
