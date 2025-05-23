
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { FaPlayCircle, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <animated.div 
        style={parallaxStyle}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`
          }}
        />
      </animated.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Transform Your
            <span className="block gradient-text text-white">
              Future Today
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            Unlock your potential with our world-class coaching programs. 
            Join thousands of successful students who achieved their dreams.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-accent hover:bg-accent-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 hover-cursor">
              Start Your Journey
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="group glass-card px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-3 hover-cursor">
              <FaPlayCircle className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 pt-12 opacity-80"
          >
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Expert Coaches</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
