import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const content = (
    <Card className="group h-full hover:shadow-glow transition-all duration-300 cursor-pointer border-border/50">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-data-blue/10 to-data-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-data-blue" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-data-blue transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center text-data-blue text-sm font-medium">
          Explore More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};
