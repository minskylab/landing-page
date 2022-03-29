import { MinskyLandingData } from "./structure";

export const defaultMinskyLanding = <MinskyLandingData>{
  headerTopics: [
    // { label: "Welcome", link: "home" },
    { label: "Platform", link: "platform" },
    { label: "Partners", link: "partners" },
    { label: "Academy", link: "academy" },
    { label: "Developers", link: "developers" },
  ],
  headline: "A new technological perspective for your ideas.",
  headlineHighlight: "technological perspective",
  // minimalDescription: "We are a team of creative and talented people who are passionate about creating digital products.",
  minimalDescription:
    "We design and build digital solutions to generate value in our clients and society.",
  sections: [
    {
      type: "about-us",
      title: "Who we are?",
      description: [
        "We are an organization that seeks to offer high-quality technology to society. We design and implement technological solutions to Academy and Companies, supported by Open Source on the shoulders of giants.",
        "We are a team of people who are passionate about software development in particular, and technology in general.",
      ],
      artType: "illustration",
      art: "symbols",
    },
    {
      type: "our-work",
      title: "What do we do?",
      description: [
        "We are working with partners and the academy to develop and launch software products, taking into consideration a holistic path and a comprehensive vision. Further, we have job opportunities for local developers (Peru), improving their experience and pleasure of crafting software.",
        "We love to create pieces of software that are useful for all of us. All our exploration and proposals are open to the public in our repositories.",
      ],
      artType: "illustration",
      art: "system-illustration",
    },
  ],
  socialNetworks: [
    { kind: "github", link: "https://github.com/minskylab" },
    { kind: "twitter", link: "https://twitter.com/minskylab" },
    { kind: "instagram", link: "https://www.instagram.com/minskylab" },
    { kind: "youtube", link: "https://www.youtube.com/channel/UCKJaMhGpxh_ffzZY7iXYiJw" },
  ],
  contactInformation: {
    email: "hello@minsky.cc",
    address: "Barranco, Lima",
    phone: "+51 924 122 969",
    workingHours: "Mon-Fri 9am-5pm",
  },
  faqs: [
    {
      question: "Where are your pricing system?",
      answer: "We're currently working on a new FAQ page. Stay tuned!",
    },
    {
      question: "Can you develop my web/mobile app?",
      answer: "We're currently working on a new FAQ page. Stay tuned!",
    },
    {
      question: "What's the experience of your team?",
      answer: "We're currently working on a new FAQ page. Stay tuned!",
    },
    {
      question: "Do you have any kind of quality certification?",
      answer: "We're currently working on a new FAQ page. Stay tuned!",
    },
    {
      question: "I'm a developer, how can I work at Minsky?",
      answer: "We're currently working on a new FAQ page. Stay tuned!",
    },
  ],
  footerInformation: {
    brandTrademark: "🇵🇪 2022 Minsky S.A.C.",
    tagline: "We are a company, a community, and a living system too.",
    sections: [
      {
        title: "Minsky",
        links: [
          { label: "About", link: "about" },
          { label: "Careers", link: "careers" },
          { label: "Team", link: "team" },
          { label: "Contact", link: "contact" },
        ],
      },
      {
        title: "Vision",
        links: [
          { label: "Philosophy", link: "philosophy" },
          { label: "Technology", link: "technology" },
          { label: "Community", link: "future" },
          { label: "Future", link: "future" },
        ],
      },
    ],
  },
};
