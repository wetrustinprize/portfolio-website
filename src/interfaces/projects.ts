export default interface Project {
  title: string;
  description: string;
  points?: string[];
  image: string;
  tags?: string[];
  buttons?: {
    text: string;
    link: string;
  }[];
}
