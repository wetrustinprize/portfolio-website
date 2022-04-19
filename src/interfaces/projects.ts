export default interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  buttons?: {
    text: string;
    link: string;
  }[];
}
