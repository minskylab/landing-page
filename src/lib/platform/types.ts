export type Subscriber = {
  id?: string;
  name?: string;
  email: string;
  subject: string;
  message: string;
};

export const NULL_SUBSCRIBER = <Subscriber>{
  id: "",
  name: "",
  email: "",
  subject: "",
  message: "",
};

export type MinskyPlatformTypes = {
  Subscribers: Subscriber;
};
