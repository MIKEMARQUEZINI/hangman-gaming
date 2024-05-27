type WordList = {
  [category: string]: string[];
};

const utils = () => {
  const catchWord = (wordlist: WordList) => {
    const categories = Object.keys(wordlist);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomWord =
      wordlist[randomCategory][
        Math.floor(Math.random() * wordlist[randomCategory].length)
      ];

    return { randomWord, randomCategory };
  };
  return { catchWord };
};

export default utils;
