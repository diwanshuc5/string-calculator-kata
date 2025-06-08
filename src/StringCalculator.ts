export function add(numbers: string): number {
    if (numbers === "") 
        return 0;

    const nums = numbers.split(",");
    let arr = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        arr.push(parseInt(nums[i]));
        sum += arr[i];
    }
    return sum;
}