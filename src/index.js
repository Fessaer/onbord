
widgetFunction = (indexOnbord, fn) => {
$(function () {
    var arr = [
        widget0,
        widget1,
        widget2,
        widget3,
        widget4,
        widget5,
    ];
    $('body').append(arr[indexOnbord]);
    var atr = $('.hiden-onbord').attr('data-active-onboard');
    $('body').on('click', '.footer-link-widget', function (e) {
        e.preventDefault();
        $('.hiden-onbord').remove();
        fn(atr);
    });
    $('body').on('click', '.btn-onbord', function () {
        var changeOnbord = (atr) => {
            fn(atr)
            var atrIsNumber = Number(atr)
            arr.forEach((item, index) => {
                if (atrIsNumber === index && index + 1 <= arr.length) {
                    $('.hiden-onbord').remove();
                    var newIten = arr[index + 1];
                    $('body').append(newIten);
                }
            })
        }
        var atr = $('.hiden-onbord').attr('data-active-onboard');
        changeOnbord(atr);
    });
});

var widget0 = `
    <div class="widget-1 hiden-onbord" data-active-onboard='0'>
        <div class="widget-1_text-cantainer">
            <p class="text-title-large">
                Добро пожаловать в портал <br>
                Видеонаблюдения Дом.ru Бизнес!
            </p>
            <p class="text-content-normal-onbord">
                С момента подключения прошло несколько <br>
                дней, возможно, вы уже успели ознакомиться <br>
                с порталом, тем не менее, мы предлагаем <br>
                <span>узнать больше о его возможностях.</span>
            </p>
            <p class="text-content-normal-onbord">
                За пару минут мы расскажем о <span>самых <br>
                полезных функциях</span>.
            </p>
        <div>
            <div class="logo-4172">
                <img src="../src/image/Group4172.png">
            </div>
            <p class="text-content-normal-onbord">
                Если сейчас у вас нет времени или вы <br>
                что-то забудете, то всегда сможете <br>
                обратиться к подсказке <span>в правом <br>
                верхнем углу</span>.
            </p>
        </div>
        <div class="footer-Group4105">
            <p><a class="footer-link-widget" href="">Вернуться позже</a></p>
            <button class="btn-onbord"><span>НАЧАТЬ</span></button>
        </div>
    </div>
        <div class="widget-1_logo">
            <img src="../src/image/Group4105.png">
        </div>
    </div>`;

var widget1 = `<div class="container-widget-2 hiden-onbord" data-active-onboard='1'>
    <div class="rectangle-widget-2">
    </div>
        <div class="widget-2">
            <div>
                <img src="../src/image/Group4129.png">
                <p class="text-content-small-onbord">
                    Нажмите на ячейку с нужной<br>
                    камерой для перехода в <br> <span>полноэкранный режим<br>
                    просмотра.</span> Там вы сможете<br> 
                    быстро перемещаться между<br> 
                    событиями и скачивать<br> 
                    видеоролики 
                    из архива.
            </p>
        </div>
        <div>
            <div>
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-55-35-648.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
            </div>
        <div>
            <p><a class="footer-link-widget" href="">Не сейчас</a></p>
            <button class="btn-onbord widget-small-button"><span>Далее</span></button>
        </div>
        </div>
    </div>
    </div>
    <div class="container-widget-9 hiden-onbord" data-active-onboard='8'>
        <div class="rectangle-widget-9">
        </div>
        <div class="widget-9">
            <div>
            <p class="text-content-small-onbord">
                Выбор сетки камер позволяет<br>
                изменить <span>отображение всех<br>
                камер</span> на одном экране.
            </p>
        </div>
        <div class="class-widget-9">
            <img src="../src/image/image-2021-07-23-11-59-01-801.png">
        </div>
        </div>
    </div>`;

var widget2 = `
    <div class="container-widget-4 hiden-onbord" data-active-onboard='2'>
        <div class="rectangle-widget-4">
        </div>
        <div class="widget-4">
            <div>
                <p class="text-content-small-onbord">
                    При помощи данной кнопки вывсегда сможете <br>
                    <span>скачивать видеоролики</span> с важными моментами<br>
                    на свой компьютер.
                </p>
            </div>
        <div>
            <img src="../src/image/Group4171.png">
            <p class="text-content-small-onbord">
                <nobr>Напоминаем что у Вас <span>нет ограничений</span></nobr>
                на количество и длительность скачиваемых записей. Срок хранения
                архива задан тарифным планом и может
                быть увеличен в <a href="">Личном кабинете</a>.
            </p>
        </div>
        <div>
            <div>
                <img src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-55-35-648.png">
            </div>
            <div>
                <p><a class="footer-link-widget" href="">Не сейчас</a></p>
                <button class="btn-onbord widget-small-button"><span>Далее</span></button>
            </div>
        </div>
    </div>
    </div>`;

var widget3 = `
    <div class="container-widget-5 hiden-onbord" data-active-onboard='3'>
    <div class="rectangle-widget-5">
    </div>
        <div class="widget-5">
        <div>
            <p class="text-content-small-onbord">
                Таймлайн камеры позволяет быстро<br>
                перемещаться по архиву и имеет цветовое<br>
                обозначение <span>для удобной навигации.</span> 
            </p>
        </div>
        <div>
            <img src="../src/image/Group4171.png">
            <p class="text-content-small-onbord">
                Базовым тарифом предусмотрена<br>
                запись архива при движении и<br>
                обозначается зеленым цветом.
            </p>
        </div>
        <div class="class-widget-5">
            <img src="../src/image/image-2021-07-23-12-00-26-095.png">
        </div>
        <div>
            <div>
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-55-35-648.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
            </div>
            <div>
                <p><a class="footer-link-widget" href="">Не сейчас</a></p>
            <button class="btn-onbord widget-small-button"><span>Далее</span></button>
            </div>
            </div>
        </div>
    </div>`;

var widget4 = `
    <div class="container-widget-6 hiden-onbord" data-active-onboard='4'>
        <div class="rectangle-widget-6">
        </div>
        <div class="widget-6">
            <div>
                <img src="../src/image/image-2021-07-23-12-01-34-153.png">
                <p class="text-content-small-onbord">
                    Ускоренная перемотка поможет <br>
                    <span>попасть на нужный момент</span> в<br>
                    архиве.
                </p>
            </div>
            <div>
                <img src="../src/image/image-2021-07-23-12-01-34-324.png">
                <p class="text-content-small-onbord">
                    Легко переходите к нужному<br>
                    отрывку при помощи указания<br>
                    <span>даты и времени</span> момента.
                </p>
            </div>
            <div>
                <div>
                    <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                    <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                    <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-55-35-648.png">
                    <img class="widget-circle-onboard" src="../src/image/image-2021-07-23-11-56-00-136.png">
                </div>
                <div>
                <p><a class="footer-link-widget" href="">Не сейчас</a></p>
                <button class="btn-onbord widget-small-button"><span>Далее</span></button>
                </div>
            </div>
        </div>
    </div>
    <div class="container-widget-7 hiden-onbord">
        <div class="rectangle-widget-7">
        </div>
            <div class="widget-7">
            <div>
                <p class="text-content-small-onbord">
                    В этой вкладке вы сможете просмотреть<br>
                    <span>журнал событий,</span> зафиксированных<br>
                    системой при:<br>
                </p>
                <ul>
                    <li><p class="text-content-small-onbord">движении в кадре</p></li>
                    <li><p class="text-content-small-onbord">недоступности камеры</p></li>
                    <li><p class="text-content-small-onbord">срабатывании видеоаналитики</p></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-widget-8 hiden-onbord">
        <div class="rectangle-widget-8">
        </div>
        <div class="widget-8">
            <div>
                <p class="text-content-small-onbord">
                    Быстро перемещайтесь между фрагментами,<br>
                    <span>кликая по таймлайну,</span> изменяйте его масштаб<br>
                    при помощий <span>колёсика мыши</span>.
                </p>
            </div>
        </div>
    </div> `;
var widget5 = `
    <div class="widget-3 hiden-onbord" data-active-onboard='5'>
        <p class="text-title-large2">
            Ура! Теперь Вы знаете всё необходимое!
        </p>
    <div>
        <img src="../src/image/Group4172.png">
        <div>
            <p class="text-content-normal-onbord">
                Воспользуйтесь справкой для более подробной<br>
                информации о возможностях и настройках услуги.
            </p>
            <p class="text-content-normal-onbord">
                Вы всегда можете направить нам сообщение в разделе<br>
                "<span>Обратная связь</span>".
            </p>
        </div>
    </div>
        <div>
            <img src="../src/image/image-2021-07-23-12-02-24-644.png">
            <div>
                <div>
                    <p class="text-title-mid">
                        Видеонаблюдение Дом.ru
                    </p>
                    <div class="loga-stars-2021-07-23-12-02-24-644">
                        <p class="text-title-mid">Бизнес</p>
                        <img src="../src/image/stars-1.png">
                    </div>
                    <p>
                        Не забудьте скачать приложение,<br>
                        чтобы просматривать камеры в <br>
                        любое время со всех своих<br>
                        устройств.
                    </p>
                </div>
            </div>
        <div>
            <img src="../src/image/image-2021-07-23-12-02-43-692.png">
        </div>
    </div>
        <div>
            <button class="btn-onbord">
                <span>
                    Готово
                </span>
            </button>
        </div>
    </div>`;
}

var callback = (arg) => console.log(arg)
widgetFunction(0, callback);
