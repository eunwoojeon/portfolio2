export type Props = {
  title: string;
  contents: string;
  project?: ProjectProps;
}

export type ProjectProps = {
  intro: string;
  skill: string;
  implement: string;
  github: string;
}