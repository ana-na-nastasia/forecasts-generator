/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const currentForecastContainer = document.querySelector('.current-forecast');
const currentForecast = currentForecastContainer.querySelector('h1');
const currentForecastPercents = currentForecastContainer.querySelector('p');

const forecastButton = document.querySelector('.forecast-btn');
forecastButton.addEventListener('click', generatesTheForecast);

function generatesTheForecast() {
  const variationOfTheForecast = Math.floor(Math.random() * 9) + 1;
    if (variationOfTheForecast === 1) {
      currentForecast.textContent = 'Тебя ждёт переезд в место мечты!';
    } else if (variationOfTheForecast === 2) {
      currentForecast.textContent = 'Новый месяц принесёт новый изученный навык';
    } else if (variationOfTheForecast === 3) {
      currentForecast.textContent = 'Завтрашний день подарит новое радостное событие';
    } else if (variationOfTheForecast === 4) {
      currentForecast.textContent = 'Тебя ждёт грандиозное путешествие!';
    } else if (variationOfTheForecast === 5) {
      currentForecast.textContent = 'Совсем скоро ты достигнешь ещё одной цели!';
    } else if (variationOfTheForecast === 6) {
      currentForecast.textContent = 'Твой труд будет плодотворным!';
    } else if (variationOfTheForecast === 7) {
      currentForecast.textContent = 'Тебе удастся избежать потерь в важном деле';
    } else if (variationOfTheForecast === 8) {
      currentForecast.textContent = 'Совсем скоро ты найдёшь то, что ищешь';
    } else if (variationOfTheForecast === 9) {
      currentForecast.textContent = 'Скоро ты встретишь человека, который благодарен тебе за что-то';
    }

  const numberOfPercents = Math.floor(Math.random() * 101);
  currentForecastPercents.textContent = `Вероятность: ${numberOfPercents}%`;
}

const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

forecastButton.addEventListener('click', function() {
  newForecast = forecastTemplate.content.cloneNode(true);

  const latestForecast = document.createElement('div');
  latestForecast.classList.add('forecast-item');

  newForecast.querySelector('h3').textContent = currentForecast.textContent;
  newForecast.querySelector('p').textContent = currentForecastPercents.textContent;

  forecastsContainer.append(newForecast);
});