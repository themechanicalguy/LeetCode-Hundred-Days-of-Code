/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //if empty array
  // if (nums === []) return [-1, -1];
  const firstOccurence = (nums, target, occurence) => {
    let s = 0;
    let e = nums.length - 1;
    // let res = [-1,-1];
    let ans = -1;
    while (s <= e) {
      let mid = Math.floor(s + (e - s) / 2);
      console.log(mid, nums[mid]);
      if (nums[mid] === target) {
        ans = mid;
        console.log(ans);
        if (occurence === "first") {
          e = mid - 1;
        } else {
          s = mid + 1;
        }
      } else if (nums[mid] < target) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
    return ans;
  };
  //     const lastOccurence = (nums,target)=>{
  //     let s = 0;
  //     let e = nums.length -1;
  //     // let res = [-1,-1];
  //     let ans=-1;

  //     while(s <=e){
  //         let mid = Math.floor(s + (e-s)/2);
  //         if(nums[mid] === target){
  //             ans = mid;
  //             s = mid+1;
  //         }else if(mid < target){
  //             s = mid+1;
  //         }else{
  //             e = mid-1;
  //         }
  //     }
  //     return ans;
  // }
  const first = firstOccurence(nums, target, "first");
  const last = firstOccurence(nums, target, "last");
  return [first, last];
};

console.log(searchRange([0, 0, 1, 2, 2], 2));
