import { SafeTrustUrlPipe } from './safe-trust-url.pipe';

describe('SafeTrustUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeTrustUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
