export function add(numbers: string): number {
    if(numbers === "") 
        return 0;

    let nums = splitNumbers(numbers);
    //console.log(nums);
    let arr = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] != ""){
            arr.push(parseInt(nums[i]));
        }
    }
    let negatives = arr.filter(nums => nums < 0);
    if(negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(","));
    }
    arr = arr.filter(nums => nums <= 1000);
    sum = arr.reduce((acc, curr) => acc+curr, 0);
    //console.log(arr);
    return sum;
}

function splitNumbers(numbers: string): string[]{
    if(numbers.startsWith("//")) {
        const delimiter = numbers[2];
        const numString = numbers.slice(3);
        return numString.split(new RegExp(`[${delimiter}\n]`));
    }
    else{
        return numbers.split(/[\n,]/);
    }
}