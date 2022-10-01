function uvstm_modal() {
    const container = document.querySelector('.uvstm-modal-container');
    const triggers = document.querySelectorAll('.uvstm-modal-trigger_button');
    const modals = document.querySelectorAll('.uvstm-modal-container_modal');

    if (container && triggers && modals) {
        triggers.forEach((el, i) => {
            if (!el.hasAttribute('data-uvstm-modal-customID')) {
                el.setAttribute('id', `uvstm-modal-trigger_buttonID--${i}`);
                el.setAttribute('data-uvstm-modal-trigger_openID', `uvstm-modal-container_modal--${i}`);
            } else {
                let params = el.getAttribute('data-uvstm-modal-customID').split(' ');
                el.setAttribute('id', params[0]);
                el.setAttribute('data-uvstm-modal-trigger_openID', params[1]);
            }
        })

        modals.forEach((el, i) => {
            if (!el.hasAttribute('data-uvstm-modal-customID')) {
                el.setAttribute('id', `uvstm-modal-container_modal--${i}`);
                el.setAttribute('aria-modal', `uvstm-modal-trigger_buttonID--${i}`);
                el.setAttribute('aria-labledby', `uvstm-modal-trigger_buttonID--${i}`);
            } else {
                let params = el.getAttribute('data-uvstm-modal-customID').split(' ');
                el.setAttribute('id', params[1]);
                el.setAttribute('aria-modal', params[0]);
                el.setAttribute('aria-labledby', params[0]);
            }
        })

        triggers.forEach(el => {
            el.addEventListener('click', () => {
                let openID = el.getAttribute('data-uvstm-modal-trigger_openID');
                let position = el.getAttribute('data-uvstm-modal-modalItem-position');

                if (position === null) {position = 'center'}
                
                switch (position) {
                    case 'top': {
                        container.style.display = 'flex';
                        container.style.justifyContent = 'flex-start';
                        container.style.paddingTop = '40px';
                        break;
                    }

                    case 'center': {
                        container.style.display = 'flex';
                        break;
                    }

                    case 'custom': {
                        container.style.display = 'block';
                        container.style.position = 'absolute';
                        break;
                    }
                }

                modals.forEach(el => {
                    if (el.getAttribute('id') === openID) {
                        el.classList.add('uvstm-modal-container_modal--open');
                        el.setAttribute('aria-hidden', false);
                        container.classList.add('uvstm-modal-container--open');
                    }
                })
            })
        })

        window.addEventListener('click', e => {
            if (e.target.hasAttribute('data-uvstm-modal-container_close')) {
                modals.forEach(el => {
                    el.classList.remove('uvstm-modal-container_modal--open');
                    el.setAttribute('aria-hidden', true);
                    container.classList.remove('uvstm-modal-container--open');
                })
            }
        })
    }
}

uvstm_modal();