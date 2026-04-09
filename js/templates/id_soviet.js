// ID Soviet Template
const IdSovietTemplate = {
    id: 'id_soviet',
    name: 'Удостоверение РККА',
    description: 'Удостоверение личности военнослужащего РККА / НКВД. Формат книжки.',
    icon: '📕',
    
    getFields() {
        return [
            { section: 'Обложка', fields: [
                { id: 'coverText', label: 'Текст на обложке', type: 'text', placeholder: 'УДОСТОВЕРЕНИЕ ЛИЧНОСТИ' }
            ]},
            { section: 'Личные данные', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'ИВАНОВ' },
                { id: 'firstName', label: 'Имя / Отчество', type: 'text', placeholder: 'Иван Иванович' },
                { id: 'rank', label: 'Воинское звание', type: 'text', placeholder: 'Гв. Майор' },
                { id: 'position', label: 'Должность', type: 'text', placeholder: 'Ком. батальона' },
                { id: 'signature', label: 'Личная подпись', type: 'signature' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Оформление', fields: [
                { id: 'paperWear', label: 'Износ документа', type: 'checkbox' },
                { id: 'burned', label: 'Опаленные края', type: 'checkbox' },
                { id: 'holes', label: 'Следы от пуль', type: 'checkbox' }
            ]}
        ];
    },

    renderPreview(data) {
        return `
            <div class="id-card-wrapper">
                <div class="id-card id-soviet-card ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                    <div class="id-soviet-cover">
                        <div class="id-sov-crest">☭</div>
                        <div class="id-sov-cover-text">${data.coverText || 'УДОСТОВЕРЕНИЕ ЛИЧНОСТИ'}</div>
                    </div>
                    <div class="id-soviet-inner">
                        <div class="id-sov-photo-box">
                            ${data.photo ? `<img src="${data.photo}" class="${data.photo_filter || ''}">` : ''}
                            <div class="foto-stamp" style="font-size:6px; bottom:2px; left:2px;">НКВД<br>СССР</div>
                        </div>
                        <div class="id-sov-field">
                            <div class="id-sov-label">Фамилия</div>
                            <div class="id-sov-val">${data.lastName || ''}</div>
                        </div>
                        <div class="id-sov-field">
                            <div class="id-sov-label">Имя Отчество</div>
                            <div class="id-sov-val">${data.firstName || ''}</div>
                        </div>
                        <div class="id-sov-field">
                            <div class="id-sov-label">Звание</div>
                            <div class="id-sov-val">${data.rank || ''}</div>
                        </div>
                        <div class="id-sov-field">
                            <div class="id-sov-label">Должность</div>
                            <div class="id-sov-val">${data.position || ''}</div>
                        </div>
                        <div style="margin-top:10px; font-size:6px; text-align:right;">
                            подпись ${data.signature ? `<img src="${data.signature}" style="height:25px;vertical-align:middle;filter:contrast(1.5);">` : '____________'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
