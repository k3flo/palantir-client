# Palantir Client

* [Что это такое?](#what-is-it)
* [MVP](#mvp)
* [Тех. стек](#tech-stack)
* [Как запустить и дебажить](#how-to-run-and-debug)
* [Заметки](#notes)

## <a name="what-is-it"></a> Что это такое?

Это мобильное приложение которое поможет скоординироваться группе людей, находящихся в пределах одного города или местности. Для этого будет доступен чат и карта с актуальным местонахождением каждого участника.

## <a name="mvp"></a> MVP

Предварительный список фич на `08.03.2018`

1.  Авторизация по Google API. После авторизации будет предложено ввести никнейм, который будет использоваться по дефолту.
2.  Создание/выбор/поиск чат-комнат. Пользователь, создавший комнату, становится в ней администратором. В mvp-версии администратор будет один и сможет удалять пользователей из комнаты.
3.  Генерация текстового и QR кода комнаты, по которому ее можно найти либо расшарить.
4.  Выбор псевдонима при первом заходе в комнату. Изначально будет предлагаться дефолтный никнейм. Пока что пользователь одновременно сможет находиться только в одной комнате.
5.  Чат, изначально на 20 человек (предварительно). Цвет никнейма каждого пользователя будет уникальным в пределах сервера. Будет сделана поддержка emoji, но, скорее всего, не в mvp-версии.
6.  Отображение карты над чатом. Маркерами будет обозначено текущее местоположение пользователя и всех остальных участников. Цвет каждого маркера будет соответствовать цвету никнейма пользователя в чате.
7.  Отображение истории в 20 сообщений при первом подключении к комнате.

## <a name="tech-stack"></a> Тех. стек

На клиенте:

* Typescript
* React Native
* Redux
* Styled components
* Antd-mobile

На сервере (предварительно):

* NodeJS
* Express
* Socket.io
* MongoDB

## <a name="how-to-run-and-debug"></a> Как запустить и дебажить

`Note: Все действия, приведенные ниже, выполнялись на Windows 10`

1.  Клонируем репозиторий.
2.  Внутри проекта делаем `npm i`.
3.  Далее устанавливаем [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) на свой телефон.
4.  Запускаем проект c помощью `npm start`.
5.  Далее нам высвечивается QR код, сканируем его с помощью Expo и ждем пока сбилдится бандл. Если QR код не высветился, можем вручную ввести в Expo предложенный в консоли ip.

Чтобы нормально дебажить приложение под Android, потребуется сделать такие шаги:

1.  Устанавливаем [Genymotion](https://www.genymotion.com/download/).
2.  Создаем новое виртуальное устройство (рекомендуемо Google Pixel), настройки оставляем дефолтными.
3.  Запускаем эмуляцию. Когда все прогрузится, в правом верхнем углу эмулятора включаем `GApps`, ждем их установки.
4.  Теперь нам доступен Play Market, заходим под своим профилем, скачиваем [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent).
5.  Запускаем проект c помощью `npm start`, после запуска находим наше приложение в Expo по предложенному в консоли ip'шнику, скорее всего `exp://192.168.56.1:19000`, открываем.
6.  Когда пройдет билд, нажимаем `ctrl + m`, включаем в эмуляторе `Debug JS Remotely` и `Toggle inspector`, нам откроется новая вкладка в браузере c адресом `http://localhost:19001/debugger-ui/`, закрываем ее.
7.  Скачиваем и распаковываем на своем компьютере [react-native-debugger](https://github.com/jhen0409/react-native-debugger/releases), запускаем.
8.  В `React Native Debugger` в меню выбираем `Debugger -> New Window`, вводим порт `19001`.
9.  Пару раз сохраняем какой-нибудь файл в проекте, должен заработать инспектор react-компонентов. В консоли будет отображаться все что мы выведем туда из нашего приложения.

## <a name="notes"></a> Заметки

Предполагаемые сущности на беке:

* `user` - информация о пользователе: местоположение, доступные комнаты, дефолтный никнейм.
* `room` - информация о чат-комнате: id пользователей, их роли и ники, id сообщений. Из пользователей будет браться их местоположение и отображаться на карте.
* `message` - хранит в себе текст сообщения, id пользователя и комнаты.