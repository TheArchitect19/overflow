import { ProfileCard } from "@/components/mock-interview/card";
import { Hero } from "@/components/mock-interview/hero-section";

const mockProfiles = [
    { id: 1, name: "John Doe", title: "Software Engineer" },
    { id: 2, name: "Jane Smith", title: "Product Manager" },
    { id: 3, name: "Alice Johnson", title: "Data Scientist" },
    { id: 4, name: "Bob Brown", title: "UI/UX Designer" },
    { id: 5, name: "Charlie Davis", title: "DevOps Engineer" },
    { id: 6, name: "Emily Clark", title: "Frontend Developer" },
    { id: 7, name: "David Wilson", title: "Backend Developer" },
    { id: 8, name: "Sophia Lee", title: "AI Researcher" },
    { id: 9, name: "Michael King", title: "Cloud Architect" },
    { id: 10, name: "Sarah Turner", title: "Cybersecurity Specialist" },
    { id: 11, name: "Ryan Harris", title: "Mobile App Developer" },
    { id: 12, name: "Olivia Evans", title: "Business Analyst" },
    { id: 13, name: "Ethan Martinez", title: "System Administrator" },
    { id: 14, name: "Chloe White", title: "Machine Learning Engineer" },
    { id: 15, name: "Daniel Scott", title: "Full Stack Developer" },
    { id: 16, name: "Lily Adams", title: "Blockchain Developer" },
  ];
  

export default function MockInterview() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-4 gap-4 p-4">
        {mockProfiles.map((profile) => (
          <ProfileCard key={profile.id} />
        ))}
      </div>
    </>
  );
}
