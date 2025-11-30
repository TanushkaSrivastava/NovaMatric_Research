import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Trophy, Compass, Eye, Lightbulb, MessageSquare, Zap } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Trophy,
      title: "Brand Performance Insights",
      description: "Track brand health, awareness, perception, and competitive positioning with comprehensive brand tracking solutions."
    },
    {
      icon: Compass,
      title: "Market Assessment",
      description: "Evaluate market opportunities, size addressable markets, and identify high-potential segments for expansion."
    },
    {
      icon: Eye,
      title: "Customer Tracking",
      description: "Continuous monitoring of customer satisfaction, loyalty trends, and experience metrics across touchpoints."
    },
    {
      icon: Lightbulb,
      title: "Business Strategy Insights",
      description: "Strategic research supporting key business decisions from M&A due diligence to market entry strategies."
    },
    {
      icon: MessageSquare,
      title: "Product Feedback Analysis",
      description: "Systematic collection and analysis of product feedback to guide roadmap prioritization and enhancements."
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "Live dashboards and automated reporting systems delivering insights as events unfold in your market."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-accent/5 via-background to-data-cyan/5">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Strategic Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrated research solutions designed to solve complex business challenges and drive strategic decision-making with confidence.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl mb-4">End-to-End Solutions</h2>
            <p className="text-muted-foreground text-lg">Comprehensive frameworks for sustained competitive advantage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...solution} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Why Our Solutions Work</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-2">Holistic Perspective</h3>
                <p className="text-muted-foreground">We integrate multiple data sources and research methodologies for a complete view of your challenge.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-2">Actionable Recommendations</h3>
                <p className="text-muted-foreground">Every solution includes clear, prioritized actions you can implement immediately.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-2">Continuous Support</h3>
                <p className="text-muted-foreground">We partner with you beyond delivery to ensure successful implementation and impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
