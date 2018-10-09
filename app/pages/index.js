import alpha from '@goldenshun/lerna-test-alpha';
// import beta from '@goldenshun/lerna-test-beta';

console.log('alpha', alpha);
const Index = () => (
  <>
    <div>
      Alpha:
      {alpha()}
    </div>
    <div>
      Beta:
      {/* {beta()} */}
    </div>
  </>
);

export default Index;
