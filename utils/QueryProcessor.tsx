
export default function QueryProcessor(query: string): string {
  const powerMatch = query.match(/what is (\d+) to the power of (\d+)/i);
  if (powerMatch) {
    const num1 = parseInt(powerMatch[1]);
    const num2 = parseInt(powerMatch[2]);
    return Math.pow(num1, num2).toString();
  }
  const addMatch2 = query.match(/what is (\d+) plus (\d+) plus (\d+)/i);
  if (addMatch2) {
    const num1 = parseInt(addMatch2[1]);
    const num2 = parseInt(addMatch2[2]);
    const num3 = parseInt(addMatch2[3]);
    return (num1 + num2 + num3).toString();
  }
  const addMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (addMatch) {
    const num1 = parseInt(addMatch[1]);
    const num2 = parseInt(addMatch[2]);
    return (num1 + num2).toString();
  }
  
  const multiplyMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multiplyMatch) {
    const num1 = parseInt(multiplyMatch[1]);
    const num2 = parseInt(multiplyMatch[2]);
    return (num1 * num2).toString();
  }
  const subtractMatch = query.match(/what is (\d+) minus (\d+)/i);
  if (subtractMatch) {
    const num1 = parseInt(subtractMatch[1]);
    const num2 = parseInt(subtractMatch[2]);
    return (num1 - num2).toString();
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is mhli."
    );
  } else if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    query = query.split(":")[1].trim();
  
    const numbers: number[] = query.split(",").map((num) => parseFloat(num.trim()));
    const [num1, num2, num3] = numbers;
    const max = num1 > num2 ? num1 : num2;
    return max > num3 ? max.toString() : num3.toString();
    
  } else if (query.toLowerCase().includes("which of the following numbers are primes")) {
    
    query = query.split(":")[1].trim();
    
    const numbers: number[] = query.split(",").map((num) => parseFloat(num.trim()));
    
    const primes = numbers.filter((num) => {
      if (num === 1 || num === 0) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    return primes.join(", ").toString();

  }

  return "";
}
