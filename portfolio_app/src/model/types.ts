export type Props = {
  title: string;
  contents?: string;
  carear?: CarearProps[];
  projects?: ProjectProps[];
}

export type CarearProps = {
  company: string;
  duration: string;
  description: string;
}

export type ProjectProps = {
  description: string;
  skill: string;
  implement: string;
  github: string;
}