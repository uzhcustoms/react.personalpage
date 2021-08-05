import './App.css';
import { Clock } from '../../personal-page/src/Components/clock';
import { Movie } from '../../personal-page/src/Components/movie';
import { PersonalPage } from '../../personal-page/src/Components/personalPage';
import { MyFavoriteDog } from '../../personal-page/src/Components/favoritDog';
import React from 'react';



function App() {
  let movie = { qtitle: "Побег из Шоушенка", qImgUrl: "https://upload.wikimedia.org/wikipedia/ru/d/de/Movie_poster_the_shawshank_redemption.jpg", qdirector: "Фрэнк Дарабонт", qyear: 1994, qstudio: "	Castle Rock Entertainment", qdescription: `«Побе́г из Шоуше́нка» (англ. The Shawshank Redemption) — американский художественный фильм-драма 1994 года, снятый режиссёром Фрэнком Дарабонтом по его же сценарию, и рассказывающий историю Энди Дюфрейна, незаслуженно приговорённого к пожизненному заключению и пробывшего в заключении почти 20 лет. Основой сюжета послужила повесть Стивена Кинга «Рита Хейуорт и спасение из Шоушенка». Главные роли сыграли Тим Роббинс и Морган Фримен.` };
  let { qtitle, qImgUrl, qdirector, qyear, qstudio, qdescription } = movie;

  return (
    <div className="App">
      <Clock />
      <Movie title={qtitle} imgUrl={qImgUrl} director={qdirector} year={qyear} studio={qstudio} description={qdescription} />
      <PersonalPage />
      <MyFavoriteDog />
    </div>
  );
}

export default App;