// Soviet Medical Template
const MedSovietTemplate = {
    id: 'med_soviet',
    name: 'Карточка раненого',
    description: 'Медицинская карточка передового района РККА. Диагнозы, перевязки.',
    icon: '🏥',
    
    getFields() {
        return [
            { section: 'Паспортные данные', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'Петров' },
                { id: 'firstName', label: 'Имя, Отчество', type: 'text', placeholder: 'Василий Иванович' },
                { id: 'rank', label: 'Воинское звание', type: 'text', placeholder: 'Рядовой' },
                { id: 'unit', label: 'Наименование части', type: 'text', placeholder: '154-я стрелковая дивизия' },
                { id: 'dateWounded', label: 'Дата и время ранения', type: 'text', placeholder: '14.05.1943, 16:30' },
                { id: 'photo', label: 'Фотография (если есть)', type: 'photo' }
            ]},
            { section: 'Характер ранения', fields: [
                { id: 'diagnosis', label: 'Первичный диагноз', type: 'textarea', placeholder: 'Осколочное слепое ранение мягких тканей левого бедра.' },
                { id: 'woundLoc', label: 'Локализация (голова, грудь, конечности)', type: 'text', placeholder: 'Левое бедро' },
                { id: 'bleeding', label: 'Кровотечение (Да/Нет)', type: 'text', placeholder: 'Остановлено' }
            ]},
            { section: 'Оказанная помощь', fields: [
                { id: 'firstAid', label: 'Первая помощь (Жгут, повязка)', type: 'textarea', placeholder: 'Наложена асептическая повязка. Жгут не накладывался.' },
                { id: 'meds', label: 'Введенные лекарства (Тип, доза)', type: 'text', placeholder: 'Промедол 2% - 1 мл' },
                { id: 'tetanus', label: 'Противостолбнячная сыворотка (АЕ)', type: 'text', placeholder: 'ПСС 3000 АЕ введено' }
            ]},
            { section: 'Эвакуация', fields: [
                { id: 'evacMethod', label: 'Способ эвакуации', type: 'text', placeholder: 'Санитарный транспорт (лежа)' },
                { id: 'evacDest', label: 'Куда направлен', type: 'text', placeholder: 'МСБ (Медсанбат)' }
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'bloodStain', label: 'Пятна крови', type: 'checkbox' },
                { id: 'paperWear', label: 'Помятая старая бумага', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    renderPreview(data) {
        const page1 = `
            <div class="a4-page med-soviet-page ${data.paperWear ? 'ms-effect-wear' : ''}">
                ${data.bloodStain ? '<div class="ms-effect-blood"></div>' : ''}
                
                <div class="ms-cross-bg"></div>

                <div class="ms-header">
                    <div class="ms-form-number">Форма №43</div>
                    <div class="ms-title">ПЕРВИЧНАЯ МЕДИЦИНСКАЯ КАРТОЧКА</div>
                    <div class="ms-subtitle">Действующая Армия (РККА)</div>
                </div>

                <div class="ms-main-content">
                    <div class="ms-photo-area">
                        ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : 'Место<br>для фото'}
                    </div>

                    <div class="ms-col-right">
                        <div class="ms-row"><span class="ms-label">1. Фамилия, имя, отчество:</span><span class="ms-val">${data.lastName || ''} ${data.firstName || ''}</span></div>
                        <div class="ms-row"><span class="ms-label">2. Воинское звание:</span><span class="ms-val">${data.rank || ''}</span></div>
                        <div class="ms-row"><span class="ms-label">3. Наименование части:</span><span class="ms-val">${data.unit || ''}</span></div>
                        <div class="ms-row"><span class="ms-label">4. Время ранения:</span><span class="ms-val">${data.dateWounded || ''}</span></div>
                    </div>
                </div>

                <div class="ms-section-title">ДИАГНОЗ И ОБЪЕКТИВНЫЙ СТАТУС</div>
                <div class="ms-textarea-val">
                    ${this._renderParagraphs(data.diagnosis)}
                </div>

                <div class="ms-grid">
                    <div class="ms-row-vertical">
                        <span class="ms-label">Локализация:</span>
                        <span class="ms-val">${data.woundLoc || ''}</span>
                    </div>
                    <div class="ms-row-vertical">
                        <span class="ms-label">Кровотечение:</span>
                        <span class="ms-val">${data.bleeding || ''}</span>
                    </div>
                </div>

                <div class="ms-section-title">ОКАЗАННАЯ МЕДИЦИНСКАЯ ПОМОЩЬ</div>
                <div class="ms-textarea-val">
                    ${this._renderParagraphs(data.firstAid)}
                </div>

                <div class="ms-grid">
                    <div class="ms-row-vertical" style="flex:1.5;">
                        <span class="ms-label">Медикаменты:</span>
                        <span class="ms-val">${data.meds || ''}</span>
                    </div>
                    <div class="ms-row-vertical" style="flex:1;">
                        <span class="ms-label">Введение ПСС:</span>
                        <span class="ms-val">${data.tetanus || ''}</span>
                    </div>
                </div>

                <div class="ms-section-title">ЭВАКУАЦИОННОЕ НАЗНАЧЕНИЕ</div>
                <div class="ms-grid" style="border-bottom: 2px solid #500;">
                    <div class="ms-row-vertical">
                        <span class="ms-label">Транспорт:</span>
                        <span class="ms-val">${data.evacMethod || ''}</span>
                    </div>
                    <div class="ms-row-vertical">
                        <span class="ms-label">Направлен:</span>
                        <span class="ms-val">${data.evacDest || ''}</span>
                    </div>
                </div>

                <div class="ms-footer">
                    <div class="ms-doctor-sig">
                        <span>Подпись врача:</span>
                        <div class="ms-sig-line">
                            <div class="ms-stamp">МЕДСАНБАТ<br>РККА<br>№102</div>
                        </div>
                    </div>
                    <div>${new Date().toLocaleDateString('ru-RU')} г.</div>
                </div>
            </div>
        `;

        return page1;
    }
};
