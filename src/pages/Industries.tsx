import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IndustryCard } from "@/components/IndustryCard";
import { 
  Cpu, Heart, ShoppingCart, DollarSign, Truck, Zap, Building2, Factory, Plane, GraduationCap, Home, Smartphone
} from "lucide-react";

const Industries = () => {
  const industries = [
    { 
      icon: Cpu, 
      title: "Technology & Software", 
      description: "AI adoption trends, SaaS market dynamics, digital transformation insights, and tech product positioning." 
    },
    { 
      icon: Heart, 
      title: "Healthcare & Pharma", 
      description: "Patient experience analysis, drug market assessments, healthcare provider research, and medical device insights." 
    },
    { 
      icon: ShoppingCart, 
      title: "Retail & FMCG", 
      description: "Consumer shopping behavior, brand health tracking, market share analysis, and retail channel insights." 
    },
    { 
      icon: DollarSign, 
      title: "Financial Services", 
      description: "Investment trends, customer satisfaction studies, fintech disruption analysis, and wealth management insights." 
    },
    { 
      icon: Truck, 
      title: "Logistics & Supply Chain", 
      description: "Supply chain optimization, freight market intelligence, last-mile delivery trends, and warehouse efficiency." 
    },
    { 
      icon: Zap, 
      title: "Energy & Utilities", 
      description: "Renewable energy adoption, utility customer sentiment, energy market dynamics, and sustainability trends." 
    },
    { 
      icon: Building2, 
      title: "Real Estate & Construction", 
      description: "Property market analysis, construction trends, urban development insights, and commercial real estate dynamics." 
    },
    { 
      icon: Factory, 
      title: "Manufacturing & Industrial", 
      description: "Production efficiency benchmarks, industrial automation trends, supply chain resilience, and equipment insights." 
    },
    { 
      icon: Plane, 
      title: "Travel & Hospitality", 
      description: "Travel behavior patterns, hotel guest experience, tourism trends, and airline customer satisfaction." 
    },
    { 
      icon: GraduationCap, 
      title: "Education & EdTech", 
      description: "Student engagement studies, online learning trends, curriculum effectiveness, and EdTech adoption analysis." 
    },
    { 
      icon: Home, 
      title: "Consumer Products", 
      description: "Product launch feedback, brand perception studies, packaging research, and consumer purchase drivers." 
    },
    { 
      icon: Smartphone, 
      title: "Telecommunications", 
      description: "Network satisfaction studies, 5G adoption trends, subscriber behavior analysis, and telecom market intelligence." 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NovaMetrics brings deep expertise and tailored research methodologies to deliver insights that matter across diverse sectors. Our industry-specific approach ensures relevant, actionable intelligence for your unique business challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We serve businesses across all sectors. Contact us to discuss your specific industry needs and how our research expertise can help you gain competitive advantage.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
