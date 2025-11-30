import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  TrendingUp, Users, Target, BarChart2, FileSearch, PieChart, 
  MessageCircle, Brain, Telescope, Package, Award, LineChart
} from "lucide-react";

const Services = () => {
  const services = [
    { 
      icon: TrendingUp, 
      title: "Market Research", 
      description: "Comprehensive market sizing, segmentation analysis, trend identification, and opportunity assessment across industries." 
    },
    { 
      icon: Users, 
      title: "Customer Behavior Analysis", 
      description: "Deep dive into customer preferences, purchase patterns, decision drivers, and sentiment tracking." 
    },
    { 
      icon: Target, 
      title: "Competitive Intelligence", 
      description: "Strategic insights about competitors, market positioning, pricing analysis, and competitive benchmarking." 
    },
    { 
      icon: BarChart2, 
      title: "Data Insights & Analytics", 
      description: "Transform raw data into actionable business intelligence with advanced statistical analysis and modeling." 
    },
    { 
      icon: FileSearch, 
      title: "Product Feedback Research", 
      description: "Understand product reception, feature prioritization, usability testing, and improvement opportunities." 
    },
    { 
      icon: PieChart, 
      title: "Analytics & Visualization", 
      description: "Interactive dashboards, custom reporting solutions, and data storytelling through compelling visualizations." 
    },
    { 
      icon: MessageCircle, 
      title: "Voice of Customer (VoC)", 
      description: "Capture and analyze customer feedback across touchpoints to drive experience improvements." 
    },
    { 
      icon: Brain, 
      title: "Brand Perception Studies", 
      description: "Measure brand awareness, perception, equity, and positioning relative to competitors." 
    },
    { 
      icon: Telescope, 
      title: "Emerging Trends Analysis", 
      description: "Identify and evaluate emerging market trends, disruptions, and future opportunities." 
    },
    { 
      icon: Package, 
      title: "Product Launch Research", 
      description: "Pre-launch testing, concept validation, pricing research, and go-to-market strategy support." 
    },
    { 
      icon: Award, 
      title: "Customer Satisfaction Studies", 
      description: "Measure and track satisfaction metrics, NPS, loyalty drivers, and experience optimization." 
    },
    { 
      icon: LineChart, 
      title: "Sales & Channel Analytics", 
      description: "Sales performance analysis, channel effectiveness, territory planning, and pipeline optimization." 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-data-blue/5">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From market research to advanced analytics, NovaMetrics offers comprehensive services designed to answer your toughest business questions and unlock growth opportunities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl mb-4">Comprehensive Research Solutions</h2>
            <p className="text-muted-foreground text-lg">Expert methodologies delivering actionable insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Our Approach</h2>
            <p className="text-muted-foreground text-lg">
              Every NovaMetrics engagement combines rigorous research design, advanced analytical techniques, and industry expertise to deliver insights you can act on with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
