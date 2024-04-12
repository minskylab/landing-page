export type MinskyArtType = "illustration" | "video" | "organism" | "system";
export type MinskySectionType = "about-us" | "our-work" | "our-team" | "contact-us";

export type MinskyLabelLink = {
  link: string;
  label: string;
};

export type MinskyHeaderTopic = {
  link: string;
  label: string;
  links?: MinskyLabelLink[];
};

export type MinskyLandingSection = {
  type: MinskySectionType;
  title: string;
  description: string | string[];
  art?: string;
  artType?: MinskyArtType;
};

export type MinskyServices = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export type LandingPageDifferences = {
  icon: string;
  title: string;
  description: string;
};

export type LandingPageFAQ = {
  title: string;
  description: string[];
};

export type LandingPagePlans = {
  id: string;
  name: string;
  price: string;
  monthlyPrice: string;
  button: string;
};

export type LandingPagePlansFeatures = {
  name: string;
  basic: string[];
  professional: string[];
  premium: string[];
};

export type PlansDetailFeatures = {
  name: string;
  list: string[];
};

export type PlansDetailProps = {
  id: string;
  name: string;
  price: string;
  monthlyPrice: string;
  button: string;
  features: PlansDetailFeatures[];
};

export type MinskyFAQ = {
  question: string;
  answer: string;
};

export type MinskyContactInformation = {
  email: string;
  phone: string;
  address: string;
  workingHours: string;
};

export type MinskyFooterSection = {
  title: string;
  links?: MinskyLabelLink[];
};

export type MinskySocialNetworkKind = "github" | "twitter" | "instagram" | "youtube";

export type MinskySocialNetwork = {
  kind: MinskySocialNetworkKind;
  link: string;
};

export type MinskyFooterInformation = {
  tagline: string;
  sections: MinskyFooterSection[];
  brandTrademark: string;
};

export type MinskyLandingData = {
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
