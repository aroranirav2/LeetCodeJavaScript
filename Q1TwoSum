var twoSum = (nums, target) => {
    let map = new Map();
    let complement;

    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
    throw Error("combination not found.");
}

console.log(twoSum([2, 7, 11, 15], 9));