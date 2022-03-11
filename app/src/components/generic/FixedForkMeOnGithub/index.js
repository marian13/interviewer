import ForkMeOnGithub from 'fork-me-on-github';

const FixedForkMeOnGithub = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0
    }}
  >
    <ForkMeOnGithub
      repo="https://github.com/marian13/interviewer"
      colorBackground="black"
      colorOctocat="white"
      isDocumentation
    />
  </div>
);

export default FixedForkMeOnGithub;
