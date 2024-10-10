
export default function QueryProcessor(query: string): string {
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
    
  }

  return "";
}
