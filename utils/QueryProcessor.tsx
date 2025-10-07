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
    const idx = query.toLowerCase().indexOf("plus");
    const list = query.split(" ");
    const num1 = Number(list[idx - 1]);
    const num2 = Number(list[idx + 1]);
    if (!isNaN(num1) && !isNaN(num2)) {
      return String(Number(num1) + Number(num2));
    }
  }

  return "";
}
