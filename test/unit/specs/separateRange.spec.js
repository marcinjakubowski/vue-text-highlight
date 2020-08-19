import { separateRange } from 'vue-text-highlighter/utils';

describe('separateRange', () => {
  it('should split common range', () => {
    const rangeOne = [0, 4, 0];
    const rangeTwo = [2, 6, 0];

    let merged = separateRange([rangeOne, rangeTwo]);
    expect(merged).toEqual([[0, 4, 0], [4, 6, 0]]);

    merged = separateRange([rangeTwo, rangeOne]);
    expect(merged).toEqual([[0, 4, 0], [4, 6, 0]]);
  });

  it('should split same range', () => {
    const rangeOne = [0, 4, 0];
    const rangeTwo = [0, 6, 0];

    let merged = separateRange([rangeOne, rangeTwo]);
    expect(merged).toEqual([[0, 4, 0], [4, 6, 0]]);

    merged = separateRange([rangeTwo, rangeOne]);
    expect(merged).toEqual([[0, 4, 0], [4, 6, 0]]);
  });

  it('should leave split range', () => {
    const rangeOne = [0, 2, 0];
    const rangeTwo = [2, 6, 0];

    let merged = separateRange([rangeOne, rangeTwo]);
    expect(merged).toEqual([[0, 2, 0], [2, 6, 0]]);

    merged = separateRange([rangeTwo, rangeOne]);
    expect(merged).toEqual([[0, 2, 0], [2, 6, 0]]);
  });

});
