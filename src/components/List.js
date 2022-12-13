import React from 'react';
const List = (props) => {
   //Ініціалізуємо властивість для компонента, який називається repos
  const { repos } = props;
  //Коли довжина отриманого нами запиту = 0, виводимо повідомлення
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  // Співставляємо кожен з репозеторіїв, який буде представлений запитом АРІ, вилучаємо кожне з імен і їх опис, відображаємо їх у списку
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
//Експортуємо компонент List, щоб мати можливість використовувати його десь ще.
export default List;