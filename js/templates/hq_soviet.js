// HQ Soviet Template
const HqSovietTemplate = {
    id: 'hq_soviet',
    name: 'Спецсообщение',
    description: 'Официальное штабное спецсообщение НКВД / СМЕРШ. Машинописный текст, виза.',
    icon: '📝',
    
    getFields() {
        return [
            { section: 'Шапка документа', fields: [
                { id: 'level', label: 'Уровень секретности', type: 'text', placeholder: 'СОВЕРШЕННО СЕКРЕТНО' },
                { id: 'to', label: 'Кому (Должность, Имя)', type: 'textarea', placeholder: 'Государственный Комитет Обороны\nтоварищу И. В. СТАЛИНУ' },
                { id: 'from', label: 'От кого (Должность, Имя)', type: 'textarea', placeholder: 'Начальник ГУКР "СМЕРШ"\nАбакумов' },
                { id: 'date', label: 'Дата документа', type: 'text', placeholder: '24 июня 1944 г.' }
            ]},
            { section: 'Текст', fields: [
                { id: 'subject', label: 'Заголовок (О чем)', type: 'text', placeholder: 'СПЕЦСООБЩЕНИЕ' },
                { id: 'body', label: 'Текст документа', type: 'textarea', placeholder: 'Докладываю, что в ходе оперативных мероприятий...' }
            ]},
            { section: 'Резолюция (Виза начальника)', fields: [
                { id: 'resolution', label: 'Текст от руки', type: 'textarea', placeholder: 'Ознакомлен.\nПринять к исполнению.' },
                { id: 'resColor', label: 'Цвет чернил резолюции', type: 'select', options: [
                    { value: 'blue', label: 'Синие чернила' },
                    { value: 'red', label: 'Красный карандаш' },
                    { value: 'black', label: 'Черный карандаш' }
                ]}
            ]},
            { section: 'Оформление', fields: [
                { id: 'paperWear', label: 'Эффект старой бумаги', type: 'checkbox' },
                { id: 'dirt', label: 'Следы грязи', type: 'checkbox' },
                { id: 'burned', label: 'Опаленные края', type: 'checkbox' },
                { id: 'holes', label: 'Следы от пуль', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p class="hs-indent">${line}</p>`).join('');
    },
    
    _renderNewlines(text) {
        if (!text) return '';
        return text.split('\n').map(l => l.replace(/ /g, '&nbsp;')).join('<br>');
    },

    renderPreview(data) {
        const resColorClass = data.resColor ? 'hs-res-' + data.resColor : 'hs-res-blue';
        const page1 = `
            <div class="a4-page hq-soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                
                <div class="hs-resolution ${resColorClass}">
                    ${this._renderNewlines(data.resolution)}
                </div>

                <div class="hs-header-grid">
                    <div class="hs-left-col">
                        <!-- Left blank for resolution -->
                    </div>
                    <div class="hs-right-col">
                        <div class="hs-secret-stamp">${data.level || 'СОВЕРШЕННО СЕКРЕТНО'}</div>
                        <div class="hs-to">${this._renderNewlines(data.to)}</div>
                    </div>
                </div>

                <div class="hs-title">${data.subject || 'СПЕЦСООБЩЕНИЕ'}</div>
                
                <div class="hs-body">
                    ${this._renderParagraphs(data.body)}
                </div>

                <div class="hs-footer">
                    <div class="hs-date">${data.date || ''}</div>
                    <div class="hs-from">${this._renderNewlines(data.from)}</div>
                </div>

                ${data.dirt ? '<div class="effect-dirt"></div>' : ''}
            </div>
        `;

        return page1;
    }
};
