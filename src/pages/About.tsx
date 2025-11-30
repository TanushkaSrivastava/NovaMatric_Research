import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Sparkles, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "We uphold the highest standards of research ethics and data confidentiality." },
    { icon: Target, title: "Excellence", description: "We deliver exceptional quality in every project, large or small." },
    { icon: Sparkles, title: "Innovation", description: "We continuously adopt cutting-edge methodologies and analytical tools." },
    { icon: Heart, title: "Client Success", description: "Your success is our success. We measure our impact by your outcomes." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">About NovaMetrics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses worldwide with data-driven insights since our inception. We transform complex data into strategic intelligence that drives growth and competitive advantage.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-bold text-3xl mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg mb-6">
              NovaMetrics is a leading market research and analytics firm dedicated to helping organizations make smarter, data-backed decisions. We combine deep industry expertise with advanced analytical capabilities to deliver insights that matter.
            </p>
            <p className="text-muted-foreground text-lg">
              Our team of seasoned analysts, researchers, and data scientists brings decades of combined experience across industries. We don't just deliver reports—we partner with you to ensure insights translate into measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To empower organizations with actionable market intelligence and customer insights that drive strategic growth, innovation, and competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the most trusted global partner for businesses seeking to transform data into strategic decisions, recognized for excellence, innovation, and client impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-center">Our Approach</h2>
          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              <strong className="text-foreground">Rigorous Methodology:</strong> Every project follows a proven research framework combining qualitative and quantitative methods tailored to your specific needs.
            </p>
            <p>
              <strong className="text-foreground">Industry Expertise:</strong> Our analysts bring deep domain knowledge in your sector, ensuring context-aware insights that reflect market realities.
            </p>
            <p>
              <strong className="text-foreground">Advanced Analytics:</strong> We leverage cutting-edge statistical techniques, machine learning, and data visualization to uncover patterns and opportunities.
            </p>
            <p>
              <strong className="text-foreground">Client Partnership:</strong> We view ourselves as an extension of your team, collaborating closely from project design through implementation support.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Our Impact by Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">12+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
