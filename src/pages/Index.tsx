import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IndustryCard } from "@/components/IndustryCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, Heart, ShoppingCart, DollarSign, Truck, Zap,
  TrendingUp, Users, Target, BarChart2, FileSearch, PieChart,
  MessageSquare, CheckCircle2, FileText, Sparkles,
  Award, Globe, Shield, Lightbulb, Quote
} from "lucide-react";

const Index = () => {
  const industries = [
    { icon: Cpu, title: "Technology", description: "AI, SaaS, and digital transformation insights for tech companies." },
    { icon: Heart, title: "Healthcare & Pharma", description: "Patient insights, drug market analysis, and healthcare trends." },
    { icon: ShoppingCart, title: "Retail & FMCG", description: "Consumer behavior, brand performance, and market share analysis." },
    { icon: DollarSign, title: "Finance", description: "Investment trends, customer satisfaction, and competitive positioning." },
    { icon: Truck, title: "Logistics", description: "Supply chain optimization and logistics market intelligence." },
    { icon: Zap, title: "Energy & Utilities", description: "Renewable energy trends and utility market dynamics." },
  ];

  const services = [
    { icon: TrendingUp, title: "Market Research", description: "Comprehensive market analysis and trend identification." },
    { icon: Users, title: "Customer Behavior Analysis", description: "Deep dive into customer preferences and behaviors." },
    { icon: Target, title: "Competitive Intelligence", description: "Strategic insights about competitors and market positioning." },
    { icon: BarChart2, title: "Data Insights", description: "Transform raw data into actionable business intelligence." },
    { icon: FileSearch, title: "Product Feedback Research", description: "Understand product reception and improvement opportunities." },
    { icon: PieChart, title: "Analytics & Visualization", description: "Interactive dashboards and custom reporting solutions." },
  ];

  const whyChoose = [
    { icon: Award, title: "Expert Analysts", description: "Seasoned professionals with deep industry knowledge" },
    { icon: Globe, title: "Global Coverage", description: "Insights from markets across 50+ countries" },
    { icon: Shield, title: "Data-Driven", description: "Rigorous methodology backed by robust analytics" },
    { icon: Lightbulb, title: "Industry-Specific", description: "Tailored solutions for your unique sector needs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-data-blue to-secondary bg-clip-text text-transparent">
            Transform Data Into Strategic Decisions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            NovaMetrics delivers world-class market intelligence, customer insights, and competitive analysis to drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-lg">
              <Link to="/contact">Request Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg">Delivering specialized insights across multiple sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <IndustryCard {...industry} link="/industries" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive solutions for data-driven growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} link="/services" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NovaMetrics */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">Why Choose NovaMetrics</h2>
            <p className="text-muted-foreground text-lg">Excellence backed by experience and innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">A proven methodology for delivering actionable insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep icon={MessageSquare} title="Consultation" description="Understanding your unique needs and objectives" stepNumber={1} />
            <ProcessStep icon={FileSearch} title="Research" description="Comprehensive data collection and analysis" stepNumber={2} />
            <ProcessStep icon={BarChart2} title="Analysis" description="Transform data into strategic insights" stepNumber={3} />
            <ProcessStep icon={FileText} title="Reporting" description="Clear, actionable recommendations delivered" stepNumber={4} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground text-lg">Trusted by industry leaders worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Johnson", role: "CEO, TechVision", quote: "NovaMetrics' insights transformed our go-to-market strategy. Their data-driven approach helped us identify untapped opportunities." },
              { name: "Michael Chen", role: "VP Marketing, HealthPlus", quote: "The competitive intelligence we received was game-changing. We now make decisions with confidence backed by solid data." },
              { name: "Emily Rodriguez", role: "Director, RetailCorp", quote: "Outstanding customer analytics that revealed patterns we never knew existed. Our conversion rates improved by 35%." },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                  <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-primary via-data-blue to-secondary p-12 rounded-3xl shadow-glow">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="font-display font-bold text-4xl text-white mb-4">Ready to Make Smarter Decisions?</h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how NovaMetrics can empower your business with actionable insights and strategic intelligence.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg">
              <Link to="/contact">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
