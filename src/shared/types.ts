export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon : JSX.Element;
  title: String;
  description: String
}

export interface ImageType {
  name: string;
  description?: string;
  image: string
}