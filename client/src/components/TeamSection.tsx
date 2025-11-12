import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import founderTJ from "@assets/generated_images/Founder_TJ_headshot_7da732b4.png";
import founderSarah from "@assets/generated_images/Founder_Sarah_headshot_9600ac90.png";

export default function TeamSection() {
  const team = [
    {
      name: "TJ Chen",
      role: "Co-Founder & CEO",
      bio: "Former VP Engineering at Carta. Built portfolio management systems for $100B+ in AUM. Stanford CS.",
      image: founderTJ,
      linkedin: "#",
    },
    {
      name: "Sarah Williams",
      role: "Co-Founder & CTO",
      bio: "Ex-Tech Lead at Palantir. Deep expertise in AI/ML and financial data systems. MIT EECS.",
      image: founderSarah,
      linkedin: "#",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-6 bg-card/30"
      data-testid="section-team"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Industry veterans building the future of VC/PE infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="hover-elevate"
              data-testid={`card-team-${index}`}
            >
              <CardContent className="p-8 text-center space-y-4">
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  data-testid={`link-linkedin-${index}`}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
