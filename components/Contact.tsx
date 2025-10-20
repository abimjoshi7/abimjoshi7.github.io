'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiTerminal } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTerminalOutput([]);

    // Simulate terminal output
    const outputs = [
      '$ initiating contact protocol...',
      '✓ Validating form data',
      `✓ Name: ${formData.name}`,
      `✓ Email: ${formData.email}`,
      `✓ Subject: ${formData.subject}`,
      '✓ Message content validated',
      '⟳ Encrypting message...',
      '⟳ Establishing secure connection...',
      '✓ Message sent successfully!',
      '✓ You will receive a response within 24-48 hours',
    ];

    for (let i = 0; i < outputs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setTerminalOutput((prev) => [...prev, outputs[i]]);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setTerminalOutput([]), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'abimjoshi7@gmail.com',
      link: 'mailto:abimjoshi7@gmail.com',
      nativeAction: 'email',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+977 9860920006',
      link: 'tel:+9779860920006',
      nativeAction: 'call',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Shankhamul, Kathmandu 44600',
      link: null,
      nativeAction: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/abimjoshi7', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/abimjoshi7', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal-window p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-sm font-mono">
                ~/portfolio/contact
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff]">./send-message.sh --interactive</span>
              </div>
              <div className="pl-4 text-[#00ff41]">
                <div className="flex items-center gap-2">
                  <HiTerminal className="text-[#00d9ff]" />
                  <h2 className="text-3xl sm:text-4xl font-bold terminal-glow">
                    Get In Touch
                  </h2>
                </div>
                <p className="text-[#00d9ff] mt-2 text-sm opacity-80">
                  # Have a question or want to work together? Execute the contact protocol
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={14} />
                <span className="text-[#00d9ff] text-xs font-mono">contact-info.txt</span>
              </div>

              <div className="font-mono text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-[#00d9ff]">cat about.txt</span>
                </div>
                <p className="text-white opacity-90 text-xs leading-relaxed pl-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be
                  part of your vision. Whether you have a question or just want to say hi, I'll do my
                  best to get back to you!
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={14} />
                <span className="text-[#00d9ff] text-xs font-mono">contact-methods.sh</span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    whileHover={{ x: 5 }}
                    className="border border-[#30363d] p-4 hover:border-[#00ff41] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <info.icon className="text-[#00ff41]" size={20} />
                      <span className="text-[#00d9ff] font-bold">{info.title.toUpperCase()}</span>
                    </div>
                    <div className="pl-8">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white opacity-90 hover:text-[#00ff41] transition-colors text-xs"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white opacity-90 text-xs">{info.value}</p>
                      )}
                    </div>
                    {/* Native Mobile Action Buttons */}
                    {info.nativeAction && (
                      <div className="flex gap-2 mt-3 pl-8">
                        {info.nativeAction === 'call' && (
                          <>
                            <motion.a
                              href={info.link || ''}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 bg-[#00ff41] text-[#0d1117] font-bold text-xs hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all flex items-center gap-2"
                            >
                              <HiPhone size={14} />
                              <span>CALL</span>
                            </motion.a>
                            <motion.a
                              href={`sms:${info.value.replace(/\s/g, '')}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 border border-[#00d9ff] text-[#00d9ff] font-bold text-xs hover:bg-[#00d9ff] hover:text-[#0d1117] transition-all flex items-center gap-2"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              <span>TEXT</span>
                            </motion.a>
                          </>
                        )}
                        {info.nativeAction === 'email' && (
                          <motion.a
                            href={info.link || ''}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-1.5 bg-[#b877db] text-[#0d1117] font-bold text-xs hover:shadow-[0_0_15px_rgba(184,119,219,0.5)] transition-all flex items-center gap-2"
                          >
                            <HiMail size={14} />
                            <span>EMAIL</span>
                          </motion.a>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={14} />
                <span className="text-[#00d9ff] text-xs font-mono">social-links.json</span>
              </div>

              <div className="font-mono text-xs space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-[#00d9ff]">cat social-links.json</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#30363d] p-3 hover:border-[#00ff41] transition-all flex items-center gap-2 font-mono text-xs group"
                    aria-label={label}
                  >
                    <Icon className="text-[#00d9ff] group-hover:text-[#00ff41] transition-colors" size={20} />
                    <span className="text-white opacity-80 group-hover:text-[#00ff41] transition-colors">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={14} />
                <span className="text-[#00d9ff] text-xs font-mono">send-message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff41]">$</span>
                    <label htmlFor="name" className="text-[#00d9ff]">
                      export NAME=
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] text-white font-mono text-sm focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] outline-none transition-all"
                    placeholder='"John Doe"'
                  />
                </div>

                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff41]">$</span>
                    <label htmlFor="email" className="text-[#00d9ff]">
                      export EMAIL=
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] text-white font-mono text-sm focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] outline-none transition-all"
                    placeholder='"your.email@example.com"'
                  />
                </div>

                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff41]">$</span>
                    <label htmlFor="subject" className="text-[#00d9ff]">
                      export SUBJECT=
                    </label>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] text-white font-mono text-sm focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] outline-none transition-all"
                    placeholder='"Project Inquiry"'
                  />
                </div>

                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff41]">$</span>
                    <label htmlFor="message" className="text-[#00d9ff]">
                      cat &gt;&gt; message.txt
                    </label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] text-white font-mono text-sm focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] outline-none transition-all resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Terminal Output */}
                {terminalOutput.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-[#0d1117] border border-[#30363d] p-4 font-mono text-xs space-y-1 max-h-48 overflow-y-auto"
                  >
                    {terminalOutput.map((output, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={
                          output.startsWith('✓')
                            ? 'text-[#00ff41]'
                            : output.startsWith('⟳')
                            ? 'text-[#00d9ff]'
                            : 'text-white'
                        }
                      >
                        {output}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#00ff41] text-[#0d1117] px-6 py-3 font-mono font-bold text-sm hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0d1117] border-t-transparent rounded-full animate-spin" />
                      EXECUTING...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane size={16} />
                      ./SEND_MESSAGE.SH
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
