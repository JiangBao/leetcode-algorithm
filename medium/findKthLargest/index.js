/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const sortNums = quickSort(nums);
  return sortNums[k-1];
};

function quickSort (nums) {
  if(nums.length <= 1) {
    return nums;
  }

  let left = [];
  let right = [];
  const index = Math.floor(nums.length / 2);
  const pivot = nums.splice(index, 1)[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}