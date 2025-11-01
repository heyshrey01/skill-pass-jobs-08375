import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Linkedin,
  Github,
  Globe,
  Edit,
  Save,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Aarav Shah",
    email: "aarav.shah@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    university: "Indian Institute of Technology, Delhi",
    degree: "B.Tech in Computer Science",
    graduationYear: "2026",
    bio: "Passionate software engineer with a strong foundation in data structures and algorithms. Looking for opportunities to build impactful products.",
    linkedin: "linkedin.com/in/aaravshah",
    github: "github.com/aaravshah",
    portfolio: "aaravshah.dev",
  });

  const qualifications = [
    {
      title: "Software Engineer",
      status: "Qualified",
      validTill: "June 2026",
      score: 92,
    },
    {
      title: "Full Stack Developer",
      status: "Qualified",
      validTill: "September 2026",
      score: 88,
    },
  ];

  const skills = [
    { name: "DSA", score: 92 },
    { name: "Python", score: 88 },
    { name: "SQL", score: 81 },
    { name: "System Design", score: 74 },
    { name: "React", score: 85 },
    { name: "Node.js", score: 82 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Your Profile</h1>
          </div>
          <Button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="rounded-full"
          >
            {isEditing ? (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src="" alt={profileData.name} />
                    <AvatarFallback className="bg-primary/10 text-2xl">
                      <User className="h-12 w-12 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="flex-1">
                      <Button variant="outline" className="rounded-full">
                        Upload Photo
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({ ...profileData, name: e.target.value })
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-foreground">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({ ...profileData, email: e.target.value })
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-foreground">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({ ...profileData, phone: e.target.value })
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-foreground">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) =>
                          setProfileData({ ...profileData, location: e.target.value })
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      rows={3}
                    />
                  ) : (
                    <p className="text-foreground">{profileData.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    {isEditing ? (
                      <Input
                        id="university"
                        value={profileData.university}
                        onChange={(e) =>
                          setProfileData({ ...profileData, university: e.target.value })
                        }
                      />
                    ) : (
                      <p className="text-foreground">{profileData.university}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree</Label>
                    {isEditing ? (
                      <Input
                        id="degree"
                        value={profileData.degree}
                        onChange={(e) =>
                          setProfileData({ ...profileData, degree: e.target.value })
                        }
                      />
                    ) : (
                      <p className="text-foreground">{profileData.degree}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="graduationYear">Graduation Year</Label>
                  {isEditing ? (
                    <Input
                      id="graduationYear"
                      value={profileData.graduationYear}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          graduationYear: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{profileData.graduationYear}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  {isEditing ? (
                    <Input
                      id="linkedin"
                      value={profileData.linkedin}
                      onChange={(e) =>
                        setProfileData({ ...profileData, linkedin: e.target.value })
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-foreground">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`https://${profileData.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {profileData.linkedin}
                      </a>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  {isEditing ? (
                    <Input
                      id="github"
                      value={profileData.github}
                      onChange={(e) =>
                        setProfileData({ ...profileData, github: e.target.value })
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-foreground">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`https://${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {profileData.github}
                      </a>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio</Label>
                  {isEditing ? (
                    <Input
                      id="portfolio"
                      value={profileData.portfolio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, portfolio: e.target.value })
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-foreground">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`https://${profileData.portfolio}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {profileData.portfolio}
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Qualifications */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-primary" />
                  Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {qualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-500 rounded-2xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-green-900 mb-1">
                          {qual.title}
                        </p>
                        <p className="text-xs text-green-700">
                          Score: {qual.score}%
                        </p>
                        <p className="text-xs text-green-700">
                          Valid till {qual.validTill}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Skills Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <Badge
                      variant={skill.score >= 85 ? "default" : "secondary"}
                      className="rounded-full"
                    >
                      {skill.score}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Profile Completeness */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Profile Completeness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">
                    Almost there! Add your portfolio to complete your profile.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

