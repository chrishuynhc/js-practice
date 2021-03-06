/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    
    if (nums.includes(target)){
        for (var i = 0; i < nums.length; i++){
            if (nums[i] == target){
                return nums.indexOf(target);
            }
        }
    } else {
        
        if (nums.length == 1){
            if (target < nums[0]){
                return 0;
            } else {
                return 1;
            }
        }
        else if (target > nums[nums.length - 1]){
            return nums.length;
        } 
            
        for (var j = 0; j < nums.length; j++){
            if (nums[j] <= target && nums[j+1] > target){
                return nums.indexOf(nums[j+1]);
            }
            else if (target < nums[j]){
                return nums.indexOf(nums[j]);
            }
        }
    }
};