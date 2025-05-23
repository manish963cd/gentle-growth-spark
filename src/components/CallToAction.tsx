
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { FaRocket, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';

const CallToAction = () => {
  const floatingIcons = [
    { Icon: FaRocket, delay: 0, x: 50, y: 30 },
    { Icon: FaGraduationCap, delay: 1000, x: -30, y: 50 },
    { Icon: FaTrophy, delay: 2000, x: 40, y: -20 },
    { Icon: FaUsers, delay: 1500, x: -50, y: -30 },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20 text-4xl"
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${20 + (index * 15)}%`,
          }}
          animate={{
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay / 1000,
            ease: "linear"
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Start Your
            <span className="block text-accent-light animate-pulse-soft">
              Success Story?
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join our community of achievers and unlock your full potential. 
            Start your transformation journey today with personalized coaching.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50K+", label: "Students Transformed" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
              { number: "100+", label: "Expert Mentors" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-light">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="group bg-white text-primary px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover-cursor"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Get Started Free
                <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <motion.button 
              className="group border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover-cursor"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Consultation
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            className="pt-8 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">
              ✨ No credit card required • 30-day money-back guarantee • Trusted by professionals worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
