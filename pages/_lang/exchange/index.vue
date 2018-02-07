<template>
  <div>
    <div class="main-container">

      <div class="container check-order-content">
        <div class="rows">
          <h1>Единный обмен валют</h1>

          <div class="Content-mt">
            <div class="Exchange">

              <div class="Calculator">
                <div class="Left">
                  <h1>Отдаете</h1>
                  <div class="Input">
                    <input type="number" value="500" min="500">
                    <div class="Money modal__trigger" aria-hidden="true" data-modal="#sys-modal">
                      <span>Я. Деньги</span>
                      <img src="~static/img/yandex.png"></div>
                  </div>
                  <h2>
                    Минимальная сумма
                    <label id="GetMinimal">500</label>
                    RUB
                  </h2>
                </div>
                <div class="Midle">
                  <img src="~static/img/load.png"></div>

                <div class="Left show-mobile">
                  <h1>
                    Получаете
                    <a href=""> <i class="icon i-balance"></i>
                      <span class="res">Резервы</span>
                    </a>
                  </h1>
                  <div class="Input">
                    <input type="number" id="SetMoney" min="500">
                    <div class="Money modal__trigger" id="SetExchange" aria-hidden="true" data-modal="#sys-modal2">
                      <span>Я. Деньги</span>
                      <img src="~static/img/yandex.png"></div>
                  </div>
                  <h2>
                    Обмен по курсу: 1 руб. =
                    <label>0.954</label>
                    руб.
                  </h2>
                </div>

                <div class="Right hidden-mobile">
                  <h1>
                    Получаете
                    <a href=""> <i class="icon i-balance"></i>
                      <span class="res">Резервы</span>
                    </a>
                  </h1>
                  <div class="Input">
                    <div class="Money modal__trigger" id="SetExchange" aria-hidden="true" data-modal="#sys-modal3">
                      <img src="~static/img/yandex.png">Я. Деньги
                    </div>
                    <div class="jq-number" id="SwMoney-styler">
                      <div class="jq-number__field"><input type="number" id="SwMoney" min="500" value="2340"
                                                           placeholder=""></div>
                      <div class="jq-number__spin minus"></div>
                      <div class="jq-number__spin plus"></div>
                    </div>


                  </div>
                  <h2>
                    Обмен по курсу: 1 руб. =
                    <label>0.954</label>
                    руб.
                  </h2>
                </div>
              </div>
              <div class="Data">
                <h2>Введите данные для завершения обмена</h2>
                <div class="IconInputs">
                  <input type="email" placeholder="Ваш e-mail">
                  <input type="text" placeholder="Кошелек Я.Денеги">
                  <input type="text" placeholder="Кошелек Я.Денеги"></div>

              </div>
            </div>

          </div>

          <div class="checkbox">
            <label>
              <input type="checkbox" value="" checked>
              Я согласен
              <a href="#">с условиями и правилами сервиса</a>
            </label>
          </div>

          <button class="main-btn main-button-bg">Обменять сейчас</button>

        </div>

      </div>

    </div>

    <div class="block-reserv">
      <div class="container">
        <div class="left-title">
          <h2>Резервы Валют</h2>
        </div>
        <div class="right-title">
          <a href="" class="modal__trigger" data-modal="#reserv-modal">
            <i class="icon i-balance"></i>
            <span class="res">Заказать резерв</span>
          </a>
        </div>

        <div class="res-blks">
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>

          <div class="no-show-rez">
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/qw.png" alt="">Qiwi</p>
              <span>4751.23</span>
            </div>
            <div class="res-block-area">
              <p>
                <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
              <span>4751.23</span>
            </div>
          </div>

        </div>

        <div class="arrow-trigger-show">
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

      </div>
    </div>

    <div class="block-slider">
      <div class="container">

        <div class="row">

          <div class="slider-sl">
            <div>
              <div class="PageCaption">
                <h2>Новости</h2>
                <span>/</span>
                <a href="">
                  все новости
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </div>

            </div>

            <div class="news-clx">
              <div class="news-blk">
                <a href="#">
                  <p>Мы запустили Обмен Яндекс Деньги</p>
                  <span>14 нояб. 2017 г.</span>
                </a>
              </div>
              <div class="news-blk">
                <a href="#">
                  <p>Мы запустили Обмен Яндекс Деньги</p>
                  <span>14 нояб. 2017 г.</span>
                </a>
              </div>
              <div class="news-blk">
                <a href="#">
                  <p>Мы запустили Обмен Яндекс Деньги</p>
                  <span>14 нояб. 2017 г.</span>
                </a>
              </div>
            </div>

          </div>

          <div class="slider-sl">

            <div>
              <div class="PageCaption">
                <h2>отзывы</h2>
                <span>/</span>
                <a href="">
                  все отзывы
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </div>

            </div>

            <div class="slider-str">
              <div>
                <div class="content-in-slider">
                  <div class="fll">Дмитрий</div>
                  <div class="flr">3 дня назад</div>
                  <div class="clear-blk-slider">
                    Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный
                    обменник!
                  </div>
                </div>
              </div>
              <div>
                <div class="content-in-slider">
                  <div class="fll">Дмитрий</div>
                  <div class="flr">3 дня назад</div>
                  <div class="clear-blk-slider">
                    Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный
                    обменник!
                  </div>
                </div>
              </div>
              <div>
                <div class="content-in-slider">
                  <div class="fll">Дмитрий</div>
                  <div class="flr">3 дня назад</div>
                  <div class="clear-blk-slider">
                    Молодцы, перевод с карты Приват на ADVCash за считанные секунды и курс понравился. Отличный
                    обменник!
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="slider-sl">
            <div>
              <div class="PageCaption">
                <h2>Курс валют цб РФ</h2>

              </div>

            </div>

            <div class="table-area-slider">
              <table>
                <thead>
                <tr>
                  <td>31.01.2018</td>
                  <td class="th2">Покупка</td>
                  <td class="th3">Продажа</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f1.png" alt="">Украинская гривна
                    </div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-up" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f2.png" alt="">Российский рубль
                    </div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-up" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f3.png" alt="">Долар США
                    </div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-down" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </div>

    <div class="stats-block">
      <div class="container">
        <h2>Немного статистики</h2>
        <div class="row">
          <ul>
            <li>
              <div class="li1">
                <p>Сегодня
                  операций</p>
                <span>4875</span>
              </div>
            </li>
            <li>
              <div class="li2">
                <p>Сегодня
                  обменяли</p>
                <span>124k$</span>
              </div>
            </li>
            <li>
              <div class="li3">
                <p>Резервы
                  сервиса</p>
                <span>16M $</span>
              </div>
            </li>
            <li>
              <div class="li4">
                <p>Пользователи
                  системы</p>
                <span>48 750</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="block-obm">
      <div class="container">
        <div class="left-sl">
          <h4>ОБМЕН ETHEREUM ETH НА СБЕРБАНК RUB</h4>
          <p>Для обмена Вам необходимо выполнить несколько шагов:</p>
          <ul>
            <li class="bf1">
              Заполните все поля представленной формы. Нажмите кнопку «Обменять».
            </li>
            <li class="bf2">
              Ознакомьтесь с условиями договора на оказание услуг обмена, если вы принимаете их, поставьте галочку в
              соответствующем поле и нажмите кнопку «Создать заявку».
            </li>
            <li class="bf3">
              Оплатите заявку. Для этого следует совершить перевод необходимой суммы, следуя инструкциям на нашем сайте.
            </li>
            <li class="bf4">
              После выполнения указанных действий, система переместит Вас на страницу «Состояние заявки», где будет
              указан
              статус вашего перевода.
            </li>
          </ul>

          <p>
            Внимание: для выполнения данной операции потребуется участие оператора (см. статус оператора).
          </p>
        </div>

        <div class="cns-2 flr">
          <h2>Оператор онлайн</h2>

          <div class="emz">
            <div class="rx-block">
              <div class="flrx1">
                <p>Эл.почта</p>
                <a href="mailto:support@proexchcanger.net">support@proexchcanger.net</a>
              </div>
              <div class="flrx2">
                <p>Телефон:</p>
                <a href="tel:+123456789922">+123456789922</a>
              </div>
              <div class="flrx3">
                <p>Telegram</p>
                <a href="#">@proexchanger_test</a>
              </div>
              <div class="flrx4">
                <p> Рeжим работы:</p>
                <a>пн-пт c 9:00 до 19:00</a>
              </div>
            </div>

            <div class="chat-area">
              <button class="fll">Начать чат</button>
              <p>обмен производить только на сайте</p>
            </div>

          </div>

        </div>

      </div>
    </div>
    <div class="glv">
      <div class="container">
        <h2>Наши партнеры</h2>
        <div class="slick-slt">
          <div>
            <a href="#"><img src="~static/img/sl1.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl2.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl3.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl1.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl2.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl3.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl1.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl2.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl3.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl1.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl2.png" alt=""></a>
          </div>
          <div>
            <a href="#"><img src="~static/img/sl3.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Обмен'
      }
    }
  }
</script>
