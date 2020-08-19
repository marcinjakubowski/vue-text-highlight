export default function separateRange([...ranges]) {
  if (!ranges.length) return [];

  ranges.sort((fir, sec) => {
    if (fir[0] !== sec[0]) return fir[0] - sec[0];
    return fir[1] - sec[1];
  });

  const merged = [];

  let curStart = ranges[0][0]; // 1, 4
  let curEnd = ranges[0][1]; // 5, 8
  let ix = ranges[0][2];

  ranges.shift();

  ranges.forEach(([start, end, index]) => {
    merged.push([curStart, curEnd, ix]);
    curStart = start < curEnd ? curEnd : start;
    curEnd = end;
    ix = index;
  });

  merged.push([curStart, curEnd, ix]);

  return merged;
}
