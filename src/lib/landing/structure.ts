export type MinskyArtType = "illustration" | "video" | "organism" | "system"; // Settings y Content Listo
export type MinskySectionType = "about-us" | "our-work" | "our-team" | "contact-us"; // Settings y Content Listo

export type MinskyLabelLink = { // Settings y Content Listo
  link: string;
  label: string;
};

export type MinskyHeaderTopic = { // Settings y Content Listo
  link: string;
  label: string;
  links?: MinskyLabelLink[];
};

export type MinskyLandingSection = { // Settings y Content Listo
  type: MinskySectionType;
  title: string;
  description: string | string[];
  art?: string;
  artType?: MinskyArtType;
};

export type MinskyFAQ = { // Settings y Content Listo
  question: string;
  answer: string;
};

export type MinskyContactInformation = { // Settings y Content Listo
  email: string;
  phone: string;
  address: string;
  workingHours: string;
};

export type MinskyFooterSection = { // Settings y Content Listo
  title: string;
  links?: MinskyLabelLink[];
};

export type MinskySocialNetworkKind = "github" | "twitter" | "instagram" | "youtube"; // Settings y Content Listo

export type MinskySocialNetwork = { // Settings y Content Listo
  kind: MinskySocialNetworkKind;
  link: string;
};

export type MinskyFooterInformation = { // Settings y Content Listo
  tagline: string;
  sections: MinskyFooterSection[];
  brandTrademark: string;
};

export type MinskyLandingData = { // Settings y Content Listo
  headerTopics: MinskyHeaderTopic[];
  headline: string;
  headlineHighlight: string | string[];
  minimalDescription: string;

  sections: MinskyLandingSection[];
  faqs: MinskyFAQ[];
  contactInformation: MinskyContactInformation;
  socialNetworks: MinskySocialNetwork[];
  footerInformation: MinskyFooterInformation;
};
