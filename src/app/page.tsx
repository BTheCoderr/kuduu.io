'use client';

import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  User,
  Settings,
  Clock,
  RefreshCw,
  BarChart3,
  Star,
  Link
} from 'lucide-react';
import Logo from '@/components/Logo';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo size="md" />
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#pilot" className="text-gray-300 hover:text-white transition-colors">Pilot</a>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <div className="w-6 h-0.5 bg-current mb-1"></div>
                <div className="w-6 h-0.5 bg-current mb-1"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(139,92,246,0.15)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI-Powered Healthcare That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 animate-pulse">
                Predicts, Prevents, and Personalizes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform patient care with predictive analytics that catch health issues before they become emergencies.
            </p>
            
            <EmailForm />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transform Patient Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-4">Transform Patient Care</h2>
              <p className="text-gray-300 mb-6">
                Elevate your healthcare delivery with AI-powered insights and predictive analytics that catch health issues before they become emergencies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Early Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Predictive Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Smarter Decisions</span>
                </div>
              </div>
            </motion.div>

            {/* Healthcare Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-4">Healthcare Intelligence</h2>
              <p className="text-gray-300 mb-6">
                Automate everything from patient monitoring to predictive analytics and real-time health risk assessment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Brain className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm">Clinical Decision Support</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <Activity className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm">Patient Monitoring</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <Shield className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm">Risk Assessment</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <BarChart3 className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm">Clinical Analytics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform & Monitoring Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Healthcare Platform */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-4">Healthcare Platform</h2>
              <p className="text-gray-300 mb-6">
                Your AI-powered guide to making informed clinical decisions and improving patient outcomes.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Patient Outcomes</h3>
                  <div className="flex space-x-4 mb-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm">Health Trends</button>
                    <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm">Risk Factors</button>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">See Growth</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Real-time patient monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">AI-powered risk assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Predictive health insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Real-Time Monitoring */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-4">Real-Time Monitoring</h2>
              <p className="text-gray-300 mb-6">
                Track patient vitals, medication adherence, and health trends in real-time with automated alerts and notifications.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <span className="text-sm">Vital Signs</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm">Live Alerts</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <RefreshCw className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-sm">Retention</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm">Health Trends</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <Star className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm">Compliant</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <Link className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <span className="text-sm">Integrations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Kuduu?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI technology designed to transform patient care through personalized intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Personalized Intelligence",
                description: "Each patient gets their own AI model trained on their unique health data, providing insights no generic algorithm can match."
              },
              {
                icon: Activity,
                title: "Continuous Care",
                description: "Monitor patient health 24/7 with AI that learns and adapts to each individual&apos;s patterns and risk factors."
              },
              {
                icon: Settings,
                title: "Zero Disruption",
                description: "Integrates seamlessly with existing EHR systems, requiring no workflow changes while providing powerful AI insights."
              },
              {
                icon: TrendingUp,
                title: "Future-Proof Care",
                description: "Predict health complications weeks before traditional methods, enabling proactive intervention and prevention."
              },
              {
                icon: Shield,
                title: "Evidence-Based AI",
                description: "Clinically validated algorithms with 94% accuracy, built by healthcare professionals for healthcare professionals."
              },
              {
                icon: Users,
                title: "Team Intelligence",
                description: "Enable seamless collaboration between care teams with shared AI insights and coordinated care recommendations."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
              FOUNDER&apos;S NOTE
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              &ldquo;As the Founder of Kuduu, my vision extends beyond building a{' '}
              <span className="text-blue-400">product</span> — it&apos;s about driving a{' '}
              <span className="text-blue-400">mission</span> that reimagines the future of{' '}
              <span className="text-blue-400">healthcare</span> through the power of{' '}
              <span className="text-blue-400">AI</span>. It&apos;s about fostering a culture of{' '}
              <span className="text-blue-400">relentless curiosity</span>,{' '}
              <span className="text-blue-400">shared purpose</span>, and{' '}
              <span className="text-blue-400">meaningful innovation</span>.&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Founder - Dante Cady</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              COMPARISON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Kuduu Stands Out</h2>
            <p className="text-xl text-gray-300">See how we compare against other healthcare AI solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kuduu Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
                             <div className="flex items-center justify-center mb-6">
                 <Logo size="lg" showText={false} />
               </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Patient-specific AI models</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Real-time predictive health analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Seamless EHR integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Healthcare-first design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>User friendly and intuitive design</span>
                </div>
              </div>
            </motion.div>

            {/* Others Limitations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-400" />
                </div>
                <span className="ml-3 text-lg font-semibold">Others</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span>Generic one-size-fits-all algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span>Limited to retrospective analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span>Complex integration requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span>Tech-first, healthcare-second</span>
                </div>
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span>Complex and difficult interfaces</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Behind Kuduu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              AI-DRIVEN PREVENTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Story Behind Kuduu</h2>
            <p className="text-xl text-gray-300">From personal experience to AI innovation in healthcare</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "The Problem",
                description: "In 2024, the American Medical Association reported over 350,000 misdiagnosed cases in the US, leading to death or serious injury. These aren&apos;t just statistics - they&apos;re real people, real families, real tragedies."
              },
              {
                icon: User,
                title: "The Personal Story",
                description: "As the founder of Kuduu, I experienced firsthand how subtle health changes can go unnoticed until it&apos;s too late. That&apos;s when I realized healthcare needed AI that could catch what human eyes might miss."
              },
              {
                icon: Settings,
                title: "The Solution",
                description: "That&apos;s why we built Kuduu - AI that doesn&apos;t just analyze data, but learns each patient&apos;s unique patterns. AI that monitors health continuously and alerts providers to potential issues before they become emergencies."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <story.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                <p className="text-gray-300 leading-relaxed">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-colors mb-8">
              JOIN OUR PILOT WAITLIST
            </button>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Catch What Others Miss</h2>
            <p className="text-xl text-gray-300 mb-8">
              AI that learns each patient&apos;s unique patterns to detect early warning signs before they become problems.
            </p>
            
            <EmailForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
                         <Logo size="sm" />
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="mailto:support@kuduu.io" className="text-gray-300 hover:text-white transition-colors">support@kuduu.io</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 — Kuduu Platforms LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
