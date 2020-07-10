function twoSum(nums, target) {
  // 基础方法，两次循环遍历
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }


  // 先存储到哈希表，再遍历寻找答案
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    let elem = target - nums[i];
    console.log(elem);
    if (map[elem] && map[elem] !== i) {
      return [i, map[elem]];
    }
  }
}