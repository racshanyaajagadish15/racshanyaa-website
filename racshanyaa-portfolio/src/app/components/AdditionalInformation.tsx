import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Folder from "@/components/Folder/Folder";
import AnimatedList from "@/components/AnimatedList/AnimatedList";

const AdditionalInformation: React.FC = () => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [awardsOpen, setAwardsOpen] = useState(false);

  // Sample data - replace with your actual courses and awards
  const courses = [
    "Data Science Skillpath - SQL, ML, Looker Studio and Alteryx (Udemy)",
    "Data Visualization using Python (Udemy)",
    "Ethereum the Solidity Language (Udemy)",
    "A Guide to Modern Programming - PHP, Java, C, C++ (Udemy)"
  ];

  const awards = [
    "Singapore University of Technology and Design (SUTD) SHARP Scholarship",
    "Justice CS Dharmadhikari Award for Co Curricular Excellence",
    "Dr APJ Abdul Kalam Award for Academic Proficiency",
    "Dr Abid Hussain Award for Academic Proficiency",
    "Immerse Education Essay Competition (2nd Runner Up)",
    "GIIS Subject Proficiency Award (10x Winner for different subjects)"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-12 justify-center items-center p-8 w-full">
      {/* Courses Folder */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[200px]">
        <Dialog open={coursesOpen} onOpenChange={setCoursesOpen}>
          <DialogTrigger asChild>
            <div className="w-full flex justify-center">
              <Folder
                size={1.5}
                color="#a3a2a3"
                items={[
                  <div key="1" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      Advanced React
                    </p>
                  </div>,
                  <div key="2" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      AWS Certified
                    </p>
                  </div>,
                  <div key="3" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      Machine Learning
                    </p>
                  </div>,
                ]}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-[#060010] border-[#222]">
            <DialogHeader>
              <DialogTitle className="text-white">Courses & Certifications</DialogTitle>
            </DialogHeader>
            <AnimatedList
              items={courses}
              onItemSelect={(item, index) => console.log(item, index)}
              className="max-h-[500px]"
              itemClassName="hover:bg-[#1e40af] transition-colors"
            />
          </DialogContent>
        </Dialog>
        <Button variant="ghost" className="text-white w-full">
          Courses
        </Button>
      </div>

      {/* Awards Folder */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[200px]">
        <Dialog open={awardsOpen} onOpenChange={setAwardsOpen}>
          <DialogTrigger asChild>
            <div className="w-full flex justify-center">
              <Folder
                size={1.5}
                color="#a3a2a3"
                items={[
                  <div key="1" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      Hackathon Winner
                    </p>
                  </div>,
                  <div key="2" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      Employee of Year
                    </p>
                  </div>,
                  <div key="3" className="p-2">
                    <p className="text-xs font-medium text-white truncate">
                      Gold Medal
                    </p>
                  </div>,
                ]}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-[#060010] border-[#222]">
            <DialogHeader>
              <DialogTitle className="text-white">Awards & Achievements</DialogTitle>
            </DialogHeader>
            <AnimatedList
              items={awards}
              onItemSelect={(item, index) => console.log(item, index)}
              className="max-h-[500px]"
              itemClassName="hover:bg-[#047857] transition-colors"
            />
          </DialogContent>
        </Dialog>
        <Button variant="ghost" className="text-white w-full">
          Awards
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInformation;