import { mergeRange } from 'vue-text-highlighter/utils';

describe('mergeRange', () => {
  it('should merge common range', () => {
    const rangeOne = [0, 4, 0];
    const rangeTwo = [2, 6, 0];

    let merged = mergeRange([rangeOne, rangeTwo]);
    expect(merged).toEqual([[0, 6, 0]]);

    merged = mergeRange([rangeTwo, rangeOne]);
    expect(merged).toEqual([[0, 6, 0]]);
  });

  it('should not merge adjacent', () => {
    const rangeOne = [0, 3, 0];
    const rangeTwo = [3, 6, 0];

    const merged = mergeRange([rangeOne, rangeTwo]);

    expect(merged).toEqual([[0, 3, 0], [3, 6, 0]]);
  });

  it('should consume subrange', () => {
    const rangeOne = [0, 6, 0];
    const rangeTwo = [2, 4, 0];

    const merged = mergeRange([rangeOne, rangeTwo]);

    expect(merged).toEqual([[0, 6, 0]]);
  });

  it('should consume subrange with adjacent', () => {
    const rangeOne = [1, 6, 0];
    const rangeTwo = [1, 4, 0];

    let merged = mergeRange([rangeOne, rangeTwo]);
    expect(merged).toEqual([[1, 6, 0]]);

    merged = mergeRange([rangeTwo, rangeOne]);
    expect(merged).toEqual([[1, 6, 0]]);
  });

  it('should return empty if no ranges', () => {
    const merged = mergeRange([]);

    expect(merged).toEqual([]);
  });
});
