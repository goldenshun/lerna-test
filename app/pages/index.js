import alpha from '@goldenshun/lerna-test-alpha';
import beta from '@goldenshun/lerna-test-beta';

const Index = () => (
  <>
    <div>
      Alpha:
      {alpha()}
    </div>
    <div>
      Beta:
      {beta()}
    </div>
  </>
);

export default Index;
