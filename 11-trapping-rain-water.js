const getTrappedRainwater = function (heights) {
  //11
  let totalWater = 0; //0
  for (let p = 0; p < heights.length; p++) {
    //0
    let leftP = p, //0
      rightP = p, //1
      maxLeft = 0, //0
      maxRight = 0; //3
    while (leftP >= 0) {
      //T
      maxLeft = Math.max(maxLeft, heights[leftP]); //0
      leftP--; //0
    }
    while (rightP < heights.length) {
      //
      maxRight = Math.max(maxRight, heights[rightP]); //3
      rightP++; //11
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[p]; //0
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
//  0  1  2  3  4  5  6  7  8  9  10
// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

//optimized approach

const getTrappedRainwaterOptimized = function (heights) {
  // 1 Identify pointer with lesser value
  // 2 Is this pointer value lesser than or equal to max on that side
  // yes -> update max on that side
  //no -> get water for pointer value, add to total
  // 3 move pointer inwards
  // 4 repeat for other pointer

  let left = 0,
    right = heights.length - 1,
    leftMax = 0,
    rightMax = 0,
    total = 0;

  while (left < right) {}
};

console.log(getTrappedRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
