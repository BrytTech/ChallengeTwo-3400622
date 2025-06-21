class SearchSuggestionSystem {
    constructor(products) {
      // Sort the products lexicographically
      this.products = products.sort();
    }
  
    getSuggestions(searchWord) {
      const suggestions = [];
      let prefix = "";
  
      for (let char of searchWord) {
        prefix += char;
        const matches = [];
  
        for (let product of this.products) {
          if (product.startsWith(prefix)) {
            matches.push(product);
          }
          if (matches.length === 3) break;
        }
  
        suggestions.push(matches);
      }
  
      return suggestions;
    }
  }
  
  // Example usage:
  const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
  const searchWord = "mouse";
  
  const system = new SearchSuggestionSystem(products);
  const result = system.getSuggestions(searchWord);
  
  console.log(result);
  