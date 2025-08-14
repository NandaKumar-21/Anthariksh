const eventsData = [
  {
    title: "Debugging",
    category: "technical",
    description: `MAD Ad (Make A Difference Advertisement) is a creative and entertaining event where participants design and present short, impactful advertisements. 

The aim is to showcase innovative thinking, acting skills, and marketing creativity while promoting a product, service, or social cause in a fun and engaging way. The ads can be humorous, satirical, emotional, or thought-provoking, but they must be original and creative. 

This event tests participants' ability to sell an idea within a short time while keeping the audience hooked.`,
    guidelines: [
      "Individual or team participation (TBD)",
      "Programming language will be specified",
      "Duration: 1.5 hours"
    ],
    link: "https://forms.gle/rqgEuu5pMPcjwhvB8"
  },
  {
    title: "Ideathon",
    category: "technical",
    description: `Brainstorm and present innovative solutions to real-world problems.`,
    guidelines: [
      "Team event (3-4 members)",
      "Problem statements will be given on the spot",
      "Judging is based on creativity and feasibility"
    ],
    link: "https://forms.gle/NcpLHMm62ihpcgMh9"
  },
  {
    title: "Logo Design",
    category: "technical",
    description: `Showcase your creativity by designing a compelling logo based on a theme.`,
    guidelines: [
      "Individual participation",
      "Theme will be announced beforehand",
      "Digital submission required"
    ],
    link: "https://forms.gle/ocG9QE98wad64NKfA"
  },
  {
    title: "Web Designing with AI",
    category: "technical",
    description: `Develop a stunning and functional website incorporating AI-powered features.`,
    guidelines: [
      "Team event (Max 2 members)",
      "Use of any framework is allowed",
      "Duration: 4 hours"
    ],
    link: "https://forms.gle/urDW64TRHMx2SdYe9"
  },
  {
    title: "Paper Presentation",
    category: "technical",
    description: `Present your research papers on cutting-edge topics in technology.`,
    guidelines: [
      "Team size: up to 2 members",
      "Papers must be in IEEE format",
      "Original work is mandatory"
    ],
    link: "https://forms.gle/RsoNkSpyTnCobyvPA"
  },
  {
    title: "Project Expo",
    category: "technical",
    description: `Exhibit your innovative technical projects and working models.`,
    guidelines: [
      "Team size: up to 4 members",
      "Projects from any engineering domain are welcome",
      "A working model or simulation is required"
    ],
    link: "https://forms.gle/c4isYskjKsAGmoKC9"
  },
  {
    title: "Technical Quiz",
    category: "technical",
    description: `Test your knowledge on a wide range of technical and engineering subjects.`,
    guidelines: [
      "Team event (2 members)",
      "Multiple rounds: Prelims and Finals",
      "No electronic devices allowed"
    ],
    link: "https://forms.gle/jXujsJzudet7WznG8"
  },
  {
    title: "Mad - Ad",
    category: "non-technical",
    description: `An 'ad-making' competition to bring out your creative and humorous side.`,
    guidelines: [
      "Team event (3-5 members)",
      "Products/topics will be given on the spot",
      "Time limit: 5 minutes for presentation"
    ],
    link: "https://forms.gle/yqsijTrKNh1yA4eN6"
  },
  {
    title: "e-Sports",
    category: "non-technical",
    description: `Compete in popular e-sports titles and prove your gaming prowess.`,
    guidelines: [
      "Solo or team-based games",
      "List of games will be announced prior to the event",
      "Bring your own peripherals (optional)"
    ],
    link: "https://forms.gle/QfUBsF8N9pCyyRCY9"
  },
  {
    title: "Pot / Picture painting",
    category: "non-technical",
    description: `Unleash your inner artist by painting pots or creating beautiful pictures.`,
    guidelines: [
      "Individual participation",
      "Basic materials will be provided",
      "Theme will be provided on the spot"
    ],
    link: "https://forms.gle/d5GMeKGuvKTKbHeV7"
  },
  {
    title: "Photography",
    category: "non-technical",
    description: `Capture the essence and moments of the symposium through your lens.`,
    guidelines: [
      "Individual participation",
      "Theme: 'Life at Anthariksha 2025'",
      "Mobile and DSLR photography allowed"
    ],
    link: "https://forms.gle/1rCRPjf4SeE4b1J18"
  },
  {
    title: "Non-Tech Quiz",
    category: "non-technical",
    description: `A fun quiz covering topics from pop culture, movies, music, and general knowledge.`,
    guidelines: [
      "Team event (2 members)",
      "Buzzer rounds and rapid-fire questions",
      "The quizmaster's decision is final"
    ],
    link: "https://forms.gle/hE32XB2ZawP72sfG8"
  },
  {
    title: "Memes",
    category: "non-technical",
    description: `The ultimate meme-making challenge. Create the funniest and most relatable memes.`,
    guidelines: [
      "Individual participation",
      "Themes will be given during the event",
      "Submissions will be judged on originality and humor"
    ],
    link: "https://forms.gle/KvPUrvj8pVB5RJM29"
  }
];

localStorage.setItem("eventsData", JSON.stringify(eventsData));

const techEventGrid = document.getElementById("techEventGrid");
const nonTechEventGrid = document.getElementById("nonTechEventGrid");

eventsData.forEach((event, index) => {
  const card = document.createElement("div");
  card.className = "event-card";
  card.textContent = event.title;
  card.onclick = () => {
    window.location.href = `event.html?id=${index}`;
  };

  if (event.category === "technical") {
    techEventGrid.appendChild(card);
  } else {
    nonTechEventGrid.appendChild(card);
  }
});
