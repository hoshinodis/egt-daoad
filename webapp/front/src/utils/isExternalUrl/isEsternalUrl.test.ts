import { isExternalUrl } from '@/utils/isExternalUrl';

describe('isEsternalUrl Internal', () => {
  test('common "/"', () => {
    const correct = false;

    const result = isExternalUrl('/');

    expect(result).toBe(correct);
  });

  test('/path/to "/api/hoge/fuga"', () => {
    const correct = false;

    const result = isExternalUrl('/api/hoge/fuga');

    expect(result).toBe(correct);
  });

  test('full url "about:///api"', () => {
    const correct = false;

    const result = isExternalUrl('about:///api');

    expect(result).toBe(correct);
  });
});

describe('isEsternalUrl External', () => {
  test('common "https://example.com/"', () => {
    const correct = true;

    const result = isExternalUrl('https://example.com/');

    expect(result).toBe(correct);
  });

  test('/path/to "https://example.com/api/hoge/fuga"', () => {
    const correct = true;

    const result = isExternalUrl('https://example.com/api/hoge/fuga');

    expect(result).toBe(correct);
  });
});
