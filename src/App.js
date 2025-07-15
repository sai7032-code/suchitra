import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "./suchithra_profile.jpg"; // Add profile image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Suchithra Chauhan" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Suchithra Chauhan</h1>
        <p className="text-xl font-medium">DevOps Engineer | AWS | Docker | Kubernetes | Terraform | Codefresh | Bash</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["summary", "skills", "experience", "projects", "education", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize"
            >
              {section.replace("-", " ")}
            </a>
          ))}
          {/* 📄 Download Resume Button */}
          <a
            href="/suchithra_resume.pdf"
            download
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">🧾 Professional Summary</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          DevOps Engineer with 3 years of hands-on experience in automating CI/CD pipelines, managing cloud infrastructure on AWS, deploying containerized applications, and implementing Infrastructure as Code using Terraform. Proficient in tools like Docker, Kubernetes, Jenkins, Codefresh, and Bash scripting. Adept at delivering scalable, secure, and efficient DevOps solutions in agile environments.
        </p>
      </section>

      
      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        {[
          { title: "B.E in Electrical & Electronics Engineering", desc: "STJ Institute of Technology, Ranebennur – 7.0 CGPA", color: "from-indigo-100 via-white to-indigo-50" },
          { title: "PUC – 80%", desc: "SAGB PU College, Davanagere, Karnataka", color: "from-blue-100 via-white to-blue-50" },
          { title: "SSLC – 88%", desc: "Mahila Seva Samaja High School, Davanagere, Karnataka", color: "from-green-100 via-white to-green-50" },
        ].map((edu, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-br ${edu.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>

        {[
          { title: "☁️ Cloud Platforms", items: ["AWS (Lambda, S3, DynamoDB, EC2)"], color: "from-blue-100 via-white to-blue-50", textColor: "text-blue-800" },
          { title: "🔧 Infrastructure as Code", items: ["Terraform"], color: "from-indigo-100 via-white to-indigo-50", textColor: "text-indigo-800" },
          { title: "⚙️ CI/CD Tools", items: ["Jenkins", "Codefresh"], color: "from-pink-100 via-white to-rose-100", textColor: "text-pink-800" },
          { title: "📦 Containers & Orchestration", items: ["Docker", "Kubernetes (EKS)", "Docker Hub", "Dockerfile"], color: "from-yellow-100 via-white to-orange-100", textColor: "text-yellow-800" },
          { title: "📊 Monitoring Tools", items: ["Grafana", "Prometheus", "AWS CloudWatch"], color: "from-teal-100 via-white to-green-100", textColor: "text-green-800" },
          { title: "💻 Scripting", items: ["Bash"], color: "from-purple-100 via-white to-purple-50", textColor: "text-purple-800" },
          { title: "🖥️ Operating Systems", items: ["Linux", "Windows"], color: "from-red-100 via-white to-yellow-50", textColor: "text-red-800" },
          { title: "🔃 Version Control", items: ["Git", "GitHub"], color: "from-gray-100 via-white to-gray-50", textColor: "text-gray-800" },
        ].map((skill, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-r ${skill.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className={`text-xl font-semibold ${skill.textColor} mb-2`}>{skill.title}</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12 border-b-4 border-indigo-400 pb-2">💼 Experience</h2>
        <div data-aos="fade-up" className="bg-gradient-to-br from-indigo-100 via-white to-indigo-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Software Engineer – DevOps | HCL Technologies Ltd | Bangalore, India</h3>
          <p className="text-gray-700 italic mb-2">Client: ANZ Bank (Jan 2022 – Present)</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Built and managed CI/CD pipelines using Codefresh to automate serverless application deployments.</li>
            <li>Provisioned AWS resources (Lambda, S3, IAM, DynamoDB) using Terraform.</li>
            <li>Configured custom Docker images using Dockerfile and managed images in Docker Hub.</li>
            <li>Used Kubernetes EKS for container orchestration with StatefulSets for Redis management.</li>
            <li>Configured AWS CloudWatch for monitoring and alerts.</li>
            <li>Integrated security tools like BlackDuck and Checkmarx in CI pipelines.</li>
            <li>Participated in Agile/Scrum sprint planning and DevOps ceremonies.</li>
            <li>Managed version control using Git on Linux and Windows platforms.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>

        <div data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-8 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 Real-Time Voting App with EKS & GitHub Actions</h3>
          <a href="https://github.com/suchithra05/vote-app" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 text-blue-600 underline hover:text-blue-800 font-medium">
            🔗 View on GitHub
          </a>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Developed a Flask-based voting web application with Redis as the backend to store vote counts in real-time.</li>
            <li>Created and containerized the app using Docker, pushing images to Docker Hub for version control and deployment.</li>
            <li>Deployed the application on AWS EKS (Elastic Kubernetes Service) with NodePort service and managed Redis using StatefulSet with persistent storage.</li>
            <li>Automated CI/CD using GitHub Actions to rebuild Docker images and update live pods on EKS when code changes are pushed.</li>
          </ul>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:suchithraee1999@gmail.com" className="hover:underline text-blue-300">suchithraee1999@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919743409692" className="hover:underline text-blue-300">+91 97434 09692</a></p>
        <p>📍 Bangalore, Karnataka, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:suchithraee1999@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:+919743409692" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
