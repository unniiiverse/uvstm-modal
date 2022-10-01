## UVSTM-Modal
ARIA-доступный модуль модальных окон (попапов), с поддержкой указания своих ID-шников (например, для открытия одного модального окна двумя кнопками)

**HTML Разметка**
```html
<!-- Триггер -->
<button class="uvstm-modal-trigger_button">
    trigger #1
</button>

<!-- Окно -->
<div class="uvstm-modal-container" data-uvstm-modal-container_close>
    <!-- Модальное окно -->
    <div class="uvstm-modal-container_modal" aria-hidden="true">
        <!-- Кнопка для закрытия модального окна -->
        <button class="uvstm-modal-container_close" data-uvstm-modal-container_close>
            [X]
        </button>
    </div>
</div>

<!-- Аттрибуты -->
<!-- Аттрибут для элемента который закрывает модальное окно. -->
<button data-uvstm-modal-container_close></button>

<!-- 
    Аттрибут в триггере (.uvstm-modal-trigger_button) для указания своих ID-шников.
    (Например для открытия одного модального окна разными кнопками)
-->
<button data-uvstm-modal-customID="[TRIGGER ID] [MODAL ID]"></button>

<!--
    Аттрибут в триггере (.uvstm-modal-trigger_button) для определения положения модального окна. 
    Допустимые значения: top - сверху, center - по центру, custom - позиционирование указывается разработчиком.
-->
<button data-uvstm-modal-modalItem-position="[POSITION]"></button>
```
<br>

**SCSS Конфигурация**
```scss
.uvstm-modal-container--open // Класс фона открытого модального окна.
.uvstm-modal-container_modal--open // Класс открытого модального окна
```

**JS Конфигурация**
```js
uvstm_modal();
```

unniiiverse ©️ 2022