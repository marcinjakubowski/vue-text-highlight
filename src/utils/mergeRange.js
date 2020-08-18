export default function mergeRange([...ranges]) {
  if (!ranges.length) return [];

  ranges.sort((fir, sec) => {
    if (fir[0] !== sec[0]) return fir[0] - sec[0];
    return fir[1] - sec[1];
  });

  const merged = [];

  let curStart = ranges[0][0];
  let curEnd = ranges[0][1];
  let ix = ranges[0][2];

  ranges.shift();

  ranges.forEach(([start, end, index]) => {
    if (start >= curEnd) {
      merged.push([curStart, curEnd, ix]);
      curStart = start;
      curEnd = end;
    } else if (end > curEnd) curEnd = end;
    ix = index;
  });

  merged.push([curStart, curEnd, ix]);

  return merged;
}
