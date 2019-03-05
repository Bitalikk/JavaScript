'use strict';
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];

  const getTags = arr => arr.reduce(
    (acc, x) => x.tags ? acc.concat(x.tags) : acc,
    []
  );

  const tags = getTags(tweets);

  // Вынесем callback-функцию отдельно,
  // а в reducе передадим ссылку на нее.
  // Это стандартная практика если callback-функция
  // довольно большая.

  // Если в объекте-аккумуляторе acc нету своего
  // свойства с ключем tag, то создаем его и
  // записывает ему значение 0.
  // В противном случае увеличиваем значение на 1.
  const getTagStats = (acc, tag) => {
    if(!acc.hasOwnProperty(tag)) {
      acc[tag] = 0;
    }

    acc[tag] += 1;

    return acc;
  };

  // Начальное значение аккумулятора это пустой объект {}
  const countTags = arr => arr.reduce(getTagStats, {});

  const tagCount = countTags(tags);
  console.log(tagCount);