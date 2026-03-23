import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Rocket,
  Database,
  Globe,
  Server,
  Smartphone,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Target,
  Award,
  Monitor,
  Chrome,
  MousePointer,
  Check,
  Star,
  Users,
  ShoppingCart,
  Play,
  Pause,
  ArrowRight,
  MessageCircle
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [currentWebsiteDemo, setCurrentWebsiteDemo] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const muregiScoreProducts = [
    {
      name: 'EduCore',
      tagline: 'School Management System',
      status: 'BUILT',
      color: '#1E40AF',
      icon: GraduationCap,
      features: ['Student Records', 'Fee Management', 'Timetabling', 'Report Cards'],
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'SaccoCore',
      tagline: 'Sacco & Chama Management',
      status: 'IN DEVELOPMENT - Flagship',
      color: '#15803D',
      icon: TrendingUp,
      features: ['Member Management', 'Loan Processing', 'Savings Tracking', 'M-Pesa Integration'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Daraja API']
    },
    {
      name: 'ClientCore',
      tagline: 'Customer Relationship Management',
      status: 'BUILT',
      color: '#7C3AED',
      icon: Briefcase,
      features: ['Contact Management', 'Sales Pipeline', 'Task Tracking', 'Analytics'],
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'StockCore',
      tagline: 'Inventory & POS System',
      status: 'IN DEVELOPMENT - Flagship',
      color: '#C2410C',
      icon: Database,
      features: ['Inventory Tracking', 'Point of Sale', 'Stock Alerts', 'Reports'],
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'Nuru',
      tagline: 'Mother Tongue Chatbot',
      status: 'IN DEVELOPMENT - Flagship',
      color: '#B45309',
      icon: Sparkles,
      features: ['Kikuyu Support', 'Swahili Support', 'Kamba Support', 'Somali Support', 'luo Support'],
      tech: ['NLP', 'React', 'Node.js']
    }
  ]

  const liveWebsites = [
    {
      name: 'Sawa Solar Solution',
      url: 'https://muregis.github.io/Sawa-solar--solution-website/',
      description: 'Professional solar energy company website with service showcase, project gallery, and customer testimonials',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop&q=80',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Solar panel installation services',
        'Interactive project gallery',
        'Customer testimonials section',
        'Contact form integration',
        'Mobile-responsive design'
      ],
      stats: { deployed: 'Live', type: 'Business', platform: 'GitHub Pages' },
      color: '#ea580c',
      category: 'Live & Running'
    },
    {
      name: 'School Website',
      url: 'https://muregis.github.io/School-Website/',
      description: 'Modern educational institution website with program information, admission details, and campus showcase',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop&q=80',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      features: [
        'Academic programs showcase',
        'Student admission portal',
        'Campus facilities gallery',
        'News & events section',
        'Staff directory'
      ],
      stats: { deployed: 'Live', type: 'Education', platform: 'GitHub Pages' },
      color: '#2563eb',
      category: 'Live & Running'
    },
    {
      name: 'Nuru - Mother Tongue Chatbot',
      url: '#',
      description: 'AI-powered chatbot supporting Kikuyu, Swahili, Kamba, and Dholuo languages - bringing light through language',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop&q=80',
      tech: ['NLP', 'React', 'Node.js', 'AI/ML'],
      features: [
        'Multi-language support (4 languages)',
        'Natural language processing',
        'Context-aware responses',
        'Cultural sensitivity AI',
        'Voice interaction capability'
      ],
      stats: { status: 'In Development', progress: '40%', launch: 'Q2 2025' },
      color: '#B45309',
      category: 'In Development'
    },
    {
      name: 'StockCore - Inventory & POS',
      url: '#',
      description: 'Complete inventory management and point-of-sale system for African retail businesses',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&q=80',
      tech: ['React', 'Node.js', 'PostgreSQL', 'M-Pesa API'],
      features: [
        'Real-time inventory tracking',
        'POS system with receipt printing',
        'Low stock alerts & reordering',
        'Sales analytics dashboard',
        'M-Pesa payment integration'
      ],
      stats: { status: 'In Development', progress: '25%', launch: 'Q3 2025' },
      color: '#C2410C',
      category: 'In Development'
    }
  ]

  const academicProjects = [
    {
      category: 'Web Development',
      icon: Globe,
      projects: [
        { name: 'Responsive Portfolio Website', tech: ['HTML5', 'CSS3', 'JavaScript'], status: 'Completed' },
        { name: 'E-commerce Landing Page', tech: ['React', 'Tailwind'], status: 'Completed' },
        { name: 'Restaurant Menu App', tech: ['HTML', 'CSS', 'JS'], status: 'Completed' }
      ]
    },
    {
      category: 'Programming',
      icon: Code2,
      projects: [
        { name: 'Student Grade Calculator', tech: ['Python'], status: 'Completed' },
        { name: 'Library Management System', tech: ['Java'], status: 'Completed' },
        { name: 'Sorting Algorithm Visualizer', tech: ['C#'], status: 'Completed' }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      projects: [
        { name: 'University Database Schema', tech: ['SQL', 'MySQL'], status: 'Completed' },
        { name: 'Inventory Management DB', tech: ['PostgreSQL'], status: 'Completed' },
        { name: 'Library System DB', tech: ['SQL'], status: 'Completed' }
      ]
    },
    {
      category: 'Networking',
      icon: Server,
      projects: [
        { name: 'LAN Configuration Lab', tech: ['Cisco Packet Tracer'], status: 'Completed' },
        { name: 'Network Protocol Analysis', tech: ['Wireshark'], status: 'Completed' },
        { name: 'Firewall Configuration', tech: ['Linux', 'iptables'], status: 'Completed' }
      ]
    }
  ]

  const skills = {
    'Programming Languages': ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
    'Frontend': ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'JWT Authentication'],
    'Systems': ['Linux Administration', 'Windows Server', 'Git', 'Shell Scripting'],
    'Integration': ['M-Pesa Daraja API', 'Paystack', 'Africa\'s Talking', 'REST APIs']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-slate-200 animate-slideDown">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-float">
                <span className="text-white font-bold text-xl">VM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Victor Muregi</h1>
                <p className="text-xs text-slate-600">Full-Stack Developer & Student</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                <a href="https://github.com/Muregis" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/victor-muregi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6" id="hero" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 animate-bounce-slow">
                <Sparkles className="w-3 h-3 mr-1" />
                Building Solutions for Africa
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Scoring Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  For Africa
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Computer Science student at Kiambu National Polytechnic, founder of <strong>MuregiScore Technologies</strong>, 
                building practical software solutions while mastering full-stack development.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View Projects
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-all">
                  <Award className="w-5 h-5 mr-2" />
                  Academic Work
                </Button>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Products Built', value: '2', icon: Zap, delay: '0s' },
                  { label: 'In Development', value: '1', icon: Code2, delay: '0.1s' },
                  { label: 'Projects Completed', value: '15+', icon: Target, delay: '0.2s' },
                  { label: 'Technologies', value: '20+', icon: Database, delay: '0.3s' }
                ].map((stat, i) => (
                  <Card 
                    key={i} 
                    className="border-2 hover:shadow-2xl transition-all hover:-translate-y-2 animate-scaleIn cursor-pointer"
                    style={{ animationDelay: stat.delay }}
                  >
                    <CardContent className="pt-6">
                      <stat.icon className="w-8 h-8 text-blue-600 mb-3 animate-pulse-slow" />
                      <div className="text-3xl font-bold text-slate-900 animate-countUp">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Websites Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" id="live-websites" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <Badge className="bg-green-500 text-white mb-4 animate-pulse-slow">
              <Globe className="w-3 h-3 mr-1 animate-spin-slow" />
              Live Projects & In Development
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Websites & Active Development
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Production websites live on the web + exciting projects currently under development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12 max-w-4xl mx-auto">
            {liveWebsites.map((website, index) => (
              <Card 
                key={index}
                className="border-2 border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 hover:scale-105 overflow-hidden group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Website Preview Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={website.image} 
                    alt={website.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      filter: website.category === 'Live & Running' && website.name === 'School Website' 
                        ? 'brightness(0.9) blur(0.5px)' 
                        : 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`${
                        website.category === 'Live & Running' 
                          ? 'bg-green-500 text-white animate-pulse' 
                          : 'bg-orange-500 text-white'
                      }`}
                    >
                      {website.category === 'Live & Running' ? (
                        <>
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping" />
                          LIVE
                        </>
                      ) : (
                        <>
                          <Code2 className="w-3 h-3 mr-1" />
                          IN DEV
                        </>
                      )}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold mb-2">{website.name}</h3>
                    <p className="text-sm text-blue-200">{website.description}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {website.features.map((feature, i) => (
                        <li 
                          key={i} 
                          className="text-sm text-slate-300 flex items-start gap-2 animate-slideInLeft"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {Object.entries(website.stats).map(([key, value], i) => (
                      <div key={key} className="text-center animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="text-lg md:text-xl font-bold" style={{ color: website.color }}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {website.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs bg-white/10 hover:bg-white/20 transition-all animate-scaleIn"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  {website.category === 'Live & Running' ? (
                    <Button 
                      className="w-full group hover:scale-105 transition-all" 
                      style={{ backgroundColor: website.color }}
                      asChild
                    >
                      <a href={website.url} target="_blank" rel="noopener noreferrer">
                        <Monitor className="w-4 h-4 mr-2" />
                        Visit Live Site
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="w-full group" 
                      style={{ backgroundColor: website.color, opacity: 0.8 }}
                      disabled
                    >
                      <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                      Coming Soon - {website.stats.launch}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-fadeInUp">
            <p className="text-lg text-blue-200 mb-4">
              2 websites live & serving users | 2 exciting projects in active development
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-green-500 text-green-400 animate-pulse">
                <Shield className="w-3 h-3 mr-1" />
                SSL Secured
              </Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}>
                <Zap className="w-3 h-3 mr-1" />
                Fast Performance
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}>
                <Smartphone className="w-3 h-3 mr-1" />
                Mobile Optimized
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* MuregiScore Technologies */}
      <section className="py-20 px-6 bg-white" id="muregicore" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4 animate-shimmer">
              MuregiScore Technologies
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise Software Suite
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Building scalable, production-ready solutions with modern tech stack: 
              React + Node.js + PostgreSQL + M-Pesa Integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {muregiScoreProducts.map((product, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden animate-fadeInUp cursor-pointer"
                style={{ borderColor: `${product.color}20`, animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="h-2 w-full transition-all duration-500 group-hover:h-3" 
                  style={{ background: product.color }}
                />
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ background: `${product.color}15` }}
                    >
                      <product.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: product.color }} />
                    </div>
                    <Badge 
                      variant={product.status.includes('BUILT') ? 'default' : product.status.includes('DEVELOPMENT') ? 'secondary' : 'outline'}
                      className="text-xs animate-pulse-slow"
                    >
                      {product.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl transition-colors duration-300 group-hover:scale-105" style={{ color: product.color }}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2 animate-slideInLeft" style={{ animationDelay: `${i * 0.05}s` }}>
                          <ChevronRight className="w-3 h-3 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs hover:scale-110 transition-transform">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100 animate-fadeInUp">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <h4 className="font-semibold text-slate-900 mb-2">Production Ready</h4>
                <p className="text-sm text-slate-600">Enterprise-grade security with JWT authentication and secure payment integration</p>
              </div>
              <div className="text-center group cursor-pointer">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <h4 className="font-semibold text-slate-900 mb-2">M-Pesa Integration</h4>
                <p className="text-sm text-slate-600">Working Daraja STK Push and Paystack payment processing</p>
              </div>
              <div className="text-center group cursor-pointer">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" />
                <h4 className="font-semibold text-slate-900 mb-2">Built for Africa</h4>
                <p className="text-sm text-slate-600">Solving real problems for African businesses and institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Academic Excellence
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              School Projects & Coursework
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Computer Science Diploma (Level 6) at Kiambu National Polytechnic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map((category, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.projects.map((project, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">{project.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              <Code2 className="w-3 h-3 mr-1" />
              Technical Skills
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl mb-8 text-blue-100">
            Looking for opportunities, collaborations, or just want to connect? Reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/254797846126" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:i.am.muregi@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <a href="https://github.com/Muregis" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <a href="https://www.linkedin.com/in/victor-muregi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <a href="https://www.instagram.com/i_am.muregi" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
          <div className="mt-8 text-sm text-blue-100">
            <p>📱 +254 797 846 126 | 📧 i.am.muregi@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2025 Victor Muregi - MuregiScore Technologies</p>
          <p className="text-sm">Built with React, TypeScript, Tailwind CSS & shadcn/ui</p>
          <p className="text-xs mt-4 text-slate-500">
            "Must be Nice" 🚀
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
