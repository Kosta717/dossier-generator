// ID Reich Template
const IdReichTemplate = {
    id: 'id_reich',
    name: 'Kennkarte',
    description: 'Основное удостоверение личности (Kennkarte). Тканевая текстура, отпечатки.',
    icon: '🆔',
    
    getFields() {
        return [
            { section: 'Личные данные', fields: [
                { id: 'kennort', label: 'Kennort (Место выдачи)', type: 'text', placeholder: 'Berlin' },
                { id: 'nummer', label: 'Kennummer (Номер)', type: 'text', placeholder: 'A 12345' },
                { id: 'name', label: 'Name (Фамилия)', type: 'text', placeholder: 'Müller' },
                { id: 'vorname', label: 'Vorname (Имя)', type: 'text', placeholder: 'Hans' },
                { id: 'geburt', label: 'Geburtstag (Дата рожд.)', type: 'text', placeholder: '12.04.1915' },
                { id: 'signature', label: 'Unterschrift (Подпись)', type: 'signature' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Оформление', fields: [
                { id: 'paperWear', label: 'Износ', type: 'checkbox' },
                { id: 'fingerprints', label: 'Отпечатки пальцев', type: 'checkbox' },
                { id: 'burned', label: 'Burned Edges', type: 'checkbox' },
                { id: 'holes', label: 'Bullet Holes', type: 'checkbox' }
            ]}
        ];
    },

    renderPreview(data) {
        return `
            <div class="id-card-wrapper">
                <div class="id-reich-card ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                    <div class="id-reich-header">
                        <div class="id-reich-title">Deutsches Reich — Kennkarte</div>
                    </div>
                    <div class="id-reich-main">
                        <div class="id-reich-left">
                            <div class="id-reich-pic">
                                ${data.photo ? `<img src="${data.photo}" class="${data.photo_filter || ''}">` : ''}
                            </div>
                            <div style="margin-top:5px; text-align:center;">
                                ${data.signature ? `<img src="${data.signature}" style="height:35px;filter:contrast(1.5);">` : ''}
                            </div>
                            ${data.fingerprints ? `
                                <div style="margin-top:10px; display:flex; gap:5px;">
                                    <div style="width:15mm; height:15mm; background:rgba(0,0,0,0.1); border-radius:35%; filter:contrast(2);"></div>
                                    <div style="width:15mm; height:15mm; background:rgba(0,0,0,0.1); border-radius:40%; filter:contrast(2);"></div>
                                </div>
                            ` : ''}
                        </div>
                        <div class="id-reich-right">
                            <div class="id-reich-field">
                                <span class="id-reich-label">Kennort</span>
                                <span class="id-reich-val">${data.kennort || ''}</span>
                            </div>
                            <div class="id-reich-field">
                                <span class="id-reich-label">Kennummer</span>
                                <span class="id-reich-val">${data.nummer || ''}</span>
                            </div>
                            <div class="id-reich-field">
                                <span class="id-reich-label">Name</span>
                                <span class="id-reich-val">${data.name || ''}</span>
                            </div>
                            <div class="id-reich-field">
                                <span class="id-reich-label">Vorname</span>
                                <span class="id-reich-val">${data.vorname || ''}</span>
                            </div>
                            <div class="id-reich-field">
                                <span class="id-reich-label">Geburtstag</span>
                                <span class="id-reich-val">${data.geburt || ''}</span>
                            </div>
                            
                            <div style="margin-top:20px; font-size:9px; text-align:center; position:relative;">
                                <div style="width:70px; height:70px; border:1px solid rgba(130,0,0,0.3); border-radius:50%; margin: 0 auto; display:flex; align-items:center; justify-content:center; color:rgba(130,0,0,0.3); font-weight:900; font-size:10px; transform: rotate(-10deg);">
                                    POLIZEI<br>BERLIN
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
