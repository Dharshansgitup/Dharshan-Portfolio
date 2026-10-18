/*
  EASY CONTENT UPDATES
  Add projects to `projects` and credentials / training / awards to `credentials`.
  Each project uses a local `image` so the art area stays photographic and never
  falls back to overlapping mock-dashboard text. For new cards, place the image
  under assets/projects/ and set its path in this file.
*/
window.PORTFOLIO_DATA = {
  projects: [
    {
      slug: "transma",
      title: "TRANSMA — Transport Management System",
      type: "WEB APPLICATION · TEAM LEAD",
      date: "May 2025",
      description: "A transport-management project focused on vehicle scheduling, trip management, and the day-to-day flow of transport operations.",
      image: "assets/projects/transma-truck.webp",
      imageAlt: "AI-generated illustrative photo of a freight truck representing the TRANSMA transport-management project; not a screenshot of the application.",
      artClass: "project-art-route",
      overline: "TRANSMA · TRANSPORT MANAGEMENT",
      bottomline: "SCHEDULING · TRIPS · OPERATIONS",
      featured: true,
      url: "https://github.com/Dharshansgitup/TRANSMA-Transport-Management",
      linkLabel: "View repository"
    },
    {
      slug: "student-management",
      title: "Student Management System",
      type: "FULL-STACK WEB APP · TEAM LEAD",
      date: "June 2025",
      description: "A web app for registering and signing in users, adding and viewing student records, searching, editing, deleting, and managing student data with MongoDB integration.",
      image: "assets/projects/student-collaboration.webp",
      imageAlt: "AI-generated illustrative photo of students collaborating on a laptop, representing the student-management project; not a screenshot of the application.",
      artClass: "project-art-records",
      overline: "STUDENT MANAGEMENT",
      bottomline: "REGISTER · SEARCH · UPDATE",
      url: "https://github.com/Dharshansgitup/Student-management-System",
      linkLabel: "View repository"
    },
    {
      slug: "vivamind",
      title: "VivaMind — AI-Powered Smart Interview",
      type: "FULL-STACK PLATFORM · AI INTEGRATION",
      date: "Project repository",
      description: "An interview-practice platform described in the repository as combining technical and HR interview flows with coding assessments, speech analysis, and performance analytics.",
      image: "assets/projects/vivamind-interview.webp",
      imageAlt: "AI-generated illustrative image of a candidate in a remote interview with an analytics screen; not a screenshot of the VivaMind platform.",
      artClass: "project-art-vivamind",
      overline: "VIVAMIND · INTERVIEW FLOW",
      bottomline: "TECHNICAL · HR · CODING",
      url: "https://github.com/Dharshansgitup/VivaMind-AI-Powered-Smart-Interview",
      linkLabel: "View repository"
    },
    {
      slug: "car-showroom",
      title: "Car Showroom Website",
      type: "WEB DESIGN · MULTI-PAGE SITE",
      date: "Project repository",
      description: "A multi-page showroom website with pages for exploring vehicles and models, browsing buying and pricing information, and contacting the showroom.",
      image: "assets/projects/car-showroom.webp",
      imageAlt: "AI-generated illustrative premium car-showroom photo representing the car-showroom website; not a screenshot of the site.",
      artClass: "project-art-showroom",
      overline: "CAR SHOWROOM · WEB EXPERIENCE",
      bottomline: "MODELS · PRICING · EXPLORE",
      url: "https://github.com/Dharshansgitup/car-showroom",
      linkLabel: "View repository"
    },
    {
      slug: "smart-irrigation",
      title: "Smart Irrigation System for Precision Farming",
      type: "IEEE CONFERENCE PUBLICATION · PRECISION AGRICULTURE",
      date: "Published 2025",
      description: "Research work on smart irrigation for precision farming, published at the 10th International Conference on Smart Structures and Systems (ICSSS), 2025, and indexed on IEEE Xplore.",
      image: "assets/projects/smart-irrigation.webp",
      imageAlt: "AI-generated illustrative precision-farming scene with crop rows and irrigation equipment, representing the IEEE smart-irrigation research.",
      artClass: "project-art-image",
      overline: "SMART IRRIGATION · IEEE",
      bottomline: "PRECISION FARMING · ICSSS 2025",
      url: "https://doi.org/10.1109/ICSSS66939.2025.11346365",
      linkLabel: "Read IEEE paper"
    },
    {
      slug: "medical-image-enhancement",
      title: "Medical Image Enhancement Using MATLAB",
      type: "MATLAB · IMAGE PROCESSING · TEAM LEAD",
      date: "April 2026",
      description: "Applied filtering and contrast-enhancement techniques to improve medical-image clarity and support visual interpretation for analysis.",
      image: "assets/projects/medical-imaging.webp",
      imageAlt: "AI-generated illustrative clinical scene of medical professionals reviewing diagnostic scans; not a MATLAB screenshot.",
      artClass: "project-art-image",
      overline: "MEDICAL IMAGE STUDY · MATLAB",
      bottomline: "FILTERING · CONTRAST · CLARITY",
      wide: true,
      url: "",
      linkLabel: ""
    }
  ],
  credentials: [
    {
      id: "java",
      indexLabel: "PROGRAMMING",
      kicker: "PROGRAMMING",
      title: "Java Programming Certification",
      description: "Java programming and language fundamentals, as listed on my résumé.",
  
      artLine: "JAVA PROGRAMMING",
      artHeadline: "Certification",
      artFooter: "PROGRAMMING · CERTIFICATION",
      artImage: "assets/story/coding-workspace.webp",
      visualType: "java",
      preview: "assets/certificates/java-programming-preview.jpg",
      document: "assets/certificates/java-programming.pdf",
      documentLabel: "Open certificate"
    },
    {
      id: "vlsi",
      indexLabel: "INTERNSHIP",
      kicker: "INTERNSHIP · TESSOLVE",
      title: "VLSI Design Internship Certification",
      description: "Six-month online internship involving digital design and verification activities using Verilog HDL.",
      mark: "V",
      artLine: "TESSOLVE · VLSI DESIGN",
      artHeadline: "Internship",
      artFooter: "DESIGN · VERIFICATION · LEARNING",
      artImage: "assets/certificates/vlsi-chip.webp",
      visualType: "vlsi",
      preview: "assets/certificates/vlsi-design-internship-preview.jpg",
      document: "assets/certificates/vlsi-design-internship.pdf",
      documentLabel: "Open certificate"
    },
    {
  id: "NPTEL - Security",
  indexLabel: "NETWORK SECURITY",
  kicker: "NPTEL · COURSE COMPLETION",
  title: "Cryptography and Network Security",
  description: "An NPTEL online course completion shared in my public LinkedIn activity. Add the original PDF locally if you want a direct certificate link here.",
  artLine: "NPTEL",
  artHeadline: "Network security",
  artFooter: "CRYPTOGRAPHY · SECURE COMMUNICATION",
  artImage: "assets/certificates/network-security.png",
  preview: "assets/certificates/nptel.certify.png",
  document: "assets/certificates/nptel.certify.png",
  documentLabel: "View certificate"
},
    {
      id: "ieee",
      publication: true,
      indexLabel: "IEEE PUBLICATION",
      kicker: "IEEE CONFERENCE PUBLICATION",
      title: "Smart Irrigation System for Precision Farming",
      description: "Published at the 10th International Conference on Smart Structures and Systems (ICSSS), 2025, and indexed on IEEE Xplore.",
      artLine: "SMART IRRIGATION",
      artHeadline: "Precision Farming",
      artFooter: "ICSSS · 2025",
      image: "assets/projects/smart-irrigation.webp",
      externalUrl: "https://doi.org/10.1109/ICSSS66939.2025.11346365",
      externalLabel: "Read publication",
      document: "assets/certificates/smart-irrigation-paper.pdf",
      documentLabel: "Local paper PDF"
    },
    

{
  id: "sastra-metasurface-workshop",
  indexLabel: "RF WORKSHOP",
  kicker: "SASTRA · IIT TIRUPATI I-HUB FOUNDATION",
  title: "Design of Metasurface and Metalens Antennas for GNSS Applications",
  description: "Certificate of participation in the one-day workshop jointly organized by SASTRA–Keysight Centre of Excellence in RF System Engineering and IIT Tirupati Navavishkar I-Hub Foundation, held at SASTRA Deemed University, Thanjavur, on 27 June 2025.",

  artLine: "METASURFACE & METALENS ANTENNAS",
  artHeadline: "Workshop participation",
  artFooter: "GNSS APPLICATIONS · 27 JUNE 2025",
  artImage: "assets/certificates/metamaterial-lab.webp",
  preview: "assets/certificates/sastra-metasurface-metalens-workshop.png",
  document: "assets/certificates/sastra-metasurface-metalens-workshop.png",
  documentLabel: "View certificate"
},
{
  id: "codemy-campus-ambassador",
  indexLabel: "LEADERSHIP RECOGNITION",
  kicker: "CODEEMY TECHNOLOGIES · CAMPUS AMBASSADOR",
  title: "CodeEmy Campus Ambassador — July 2026",
  description: "Certificate of recognition for serving as a CodeEmy Campus Ambassador during July 2026. Certificate ID: ACTCAC2025/14888. Issued on: 9/3/2026, as printed on the certificate.",
  
  artLine: "CODEEMY CAMPUS AMBASSADOR",
  artHeadline: "Certificate of recognition",
  artFooter: "LEADERSHIP · OUTREACH · JULY 2026",
  artImage: "assets/certificates/enterprise-workflow.webp",
  preview: "assets/certificates/codemy-campus-ambassador.png",
  document: "assets/certificates/codemy-campus-ambassador.png",
  documentLabel: "View certificate"
}

  ]
};
