export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "qge";
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "qge";
  }

  if (query.toLowerCase().includes("plus")) {
    const list = query.toLowerCase().split(" ");
    const plusIndex = list.indexOf("plus");

    const num1 = Number(list[plusIndex - 1]);
    const num2 = Number(list[plusIndex + 1]);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      const res = String(num1 + num2);
      console.log(res);
      return res;
    }
  }

  if (query.toLowerCase().includes("largest")) {
    // Extract all numbers from the query using regex
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      // Convert to numbers and find the largest
      const numValues = numbers.map(num => Number(num));
      const largest = Math.max(...numValues);
      const res = String(largest);
      console.log(res);
      return res;
    }
  }

  return "";
}
