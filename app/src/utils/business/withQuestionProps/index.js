import getDisplayName from "../../generic/getDisplayName";

const withQuestionProps = ({ number }, Component) => {
  const WrappedComponent = props => <Component number={number} {...props} />;

  WrappedComponent.displayName = `withQuestionProps(${getDisplayName(Component)})`;

  WrappedComponent.number = number;

  return WrappedComponent;
};

export default withQuestionProps;
