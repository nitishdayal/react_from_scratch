declare type HelloProps = {
  compiler: string;
  framework: string;
  bundler: string;
}

declare type RootContainerProps = {
  children: (false | JSX.Element)[]
}
