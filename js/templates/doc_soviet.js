// Soviet Military Doctor Dossier Template
const DocSovietTemplate = {
    id: 'doc_soviet',
    name: 'Личное дело врача',
    description: 'Личное дело военного врача РККА. Медицинская специальность, госпитальные назначения.',
    icon: '🩺',
    
    getFields() {
        return [
            { section: 'Общие сведения', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'Бурденко' },
                { id: 'firstName', label: 'Имя, Отчество', type: 'text', placeholder: 'Николай Нилович' },
                { id: 'rank', label: 'Воинское звание', type: 'select', options: [
                    'Военврач 3-го ранга', 'Военврач 2-го ранга', 'Военврач 1-го ранга',
                    'Бригврач', 'Дивврач', 'Корврач', 'Армврач'
                ]},
                { id: 'rankCustom', label: 'Звание (вручную, если нет в списке)', type: 'text', placeholder: 'Генерал-полковник мед. сл.' },
                { id: 'birthInfo', label: 'Год и место рождения', type: 'text', placeholder: '1898 г., г. Харьков' },
                { id: 'nationality', label: 'Национальность', type: 'text', placeholder: 'Русский' },
                { id: 'party', label: 'Парт. принадлежность', type: 'text', placeholder: 'Член ВКП(б) с 1929 г.' },
                { id: 'personalNumber', label: 'Личный номер / ВУС', type: 'text', placeholder: 'ВУС № 1-МЕД' },
                { id: 'dossierDate', label: 'Дата составления дела', type: 'text', placeholder: '10 марта 1943 г.' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Медицинская специализация', fields: [
                { id: 'medSpecialty', label: 'Медицинская специальность', type: 'select', options: [
                    'Хирургия полевая', 'Терапия', 'Эпидемиология', 'Санитария',
                    'Нейрохирургия', 'Офтальмология', 'Стоматология', 'Токсикология'
                ]},
                { id: 'medEducation', label: 'Медицинское образование (учебные заведения)', type: 'textarea', placeholder: '1-й Московский мед. институт, 1924 г.\nВоенно-медицинская академия, ординатура, 1927 г.' },
                { id: 'medDegree', label: 'Учёная степень', type: 'select', options: [
                    'Без степени', 'Кандидат мед. наук', 'Доктор мед. наук'
                ]},
            ]},
            { section: 'Госпитальные назначения', fields: [
                { id: 'hospitalAssignments', label: 'Назначения в госпитали (Период - Госпиталь / Должность)', type: 'textarea', placeholder: '1941-1942 - ЭГ-290, хирург\n1942-1943 - ППГ-1, нач. хирургич. отделения\n1943 - ФЭП-12, гл. хирург фронта' },
                { id: 'surgicalStats', label: 'Хирургическая статистика (количество операций)', type: 'textarea', placeholder: 'Всего операций: 1240\nПолостные: 320\nАмпутации: 85\nНейрохирургические: 56\nСмертность: 4.2%' },
            ]},
            { section: 'Квалификация и опыт', fields: [
                { id: 'medEquipment', label: 'Владение спец. оборудованием', type: 'textarea', placeholder: 'Рентгенаппаратура полевая\nАппарат Илизарова\nНаркозный аппарат' },
                { id: 'fieldExperience', label: 'Опыт полевой медицины', type: 'textarea', placeholder: 'Организация МСБ в полевых условиях\nМедицинская сортировка раненых\nБорьба с газовой гангреной' },
                { id: 'medPublications', label: 'Научные публикации / труды', type: 'textarea', placeholder: '«Лечение огнестрельных ран», 1942\n«Организация хирургической помощи на фронте», 1943' },
            ]},
            { section: 'Награды', fields: [
                { id: 'awards', label: 'Правительственные награды', type: 'textarea', placeholder: 'Орден Красного Знамени (1942)\nОрден Ленина (1943)\nМедаль «За боевые заслуги» (1941)' },
            ]},
            { section: 'Аттестация', fields: [
                { id: 'attestation', label: 'Текст аттестации (Характеристика)', type: 'textarea', placeholder: 'Делу партии Ленина-Сталина и Социалистической Родине предан. Хирург высшей квалификации. Проявляет выдающуюся самоотверженность при оказании помощи раненым...' },
                { id: 'conclusion', label: 'Вывод командования', type: 'textarea', placeholder: 'Должности главного хирурга фронта вполне соответствует. Рекомендуется к присвоению звания Дивврач.' },
                { id: 'commanderSignature', label: 'Подпись начальника ГВСУ', type: 'signature' },
            ]},
            { section: 'Исход / Статус', fields: [
                { id: 'outcome', label: 'Статус / Исход дела', type: 'select', options: [
                    '— (активен)', 'Погиб в бою', 'Умер от ран', 'Пропал без вести',
                    'Ранен (в госпитале)', 'Демобилизован', 'Дезертировал', 'Попал в плен', 'Переведён', 'Арестован (НКВД)'
                ]},
                { id: 'outcomeDate', label: 'Дата исхода', type: 'text', placeholder: '9 мая 1945 г.' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Штамп «СОВЕРШЕННО СЕКРЕТНО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кружки', type: 'checkbox' },
                { id: 'burned', label: 'Опаленные края', type: 'checkbox' },
            ]},
            { section: 'Дополнительно', fields: [
                { id: 'extraNotes', label: 'Дополнительные записи (Новый лист)', type: 'textarea', placeholder: 'Любая информация...' }
            ]}
        ];
    },

    _renderTableRows(text) {
        if (!text) return '<tr><td>—</td><td>—</td></tr>';
        return text.split('\n').filter(l => l.trim()).map(line => {
            const parts = line.split(/-(.+)/).map(s => s.trim());
            if (parts.length < 2) {
                const emParts = line.split(/—(.+)/).map(s => s.trim());
                if (emParts.length >= 2) {
                    return `<tr><td style="width:140px">${emParts[0]}</td><td>${emParts[1] || ''}${emParts[2] || ''}</td></tr>`;
                }
                return `<tr><td colspan="2">${line}</td></tr>`;
            }
            return `<tr><td style="width:140px">${parts[0]}</td><td>${parts[1] || ''}${parts[2] || ''}</td></tr>`;
        }).join('');
    },

    _renderList(text) {
        if (!text) return '—';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>- ${line.trim()}</p>`).join('');
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    _getOutcomeStamp(outcome) {
        if (!outcome || outcome === '— (активен)') return '';
        const map = {
            'Погиб в бою':      { text: 'ПОГИБ', color: '#8b0000' },
            'Умер от ран':      { text: 'УМ. ОТ РАН', color: '#8b0000' },
            'Пропал без вести': { text: 'ПБВ', color: '#5a4a00' },
            'Ранен (в госпитале)': { text: 'РАНЕН', color: '#7a3a00' },
            'Демобилизован':    { text: 'ДЕМОБИЛ.', color: '#1a4a1a' },
            'Дезертировал':     { text: 'ДЕЗЕРТИР', color: '#660000' },
            'Попал в плен':     { text: 'В ПЛЕНУ', color: '#4a3a00' },
            'Переведён':        { text: 'ПЕРЕВЕДЁН', color: '#1a2a4a' },
            'Арестован (НКВД)': { text: 'АРЕСТОВАН', color: '#3a0060' },
        };
        const s = map[outcome] || { text: outcome.toUpperCase(), color: '#8b0000' };
        return `<div class="soviet-outcome-stamp" style="border-color:${s.color};color:${s.color};">${s.text}</div>`;
    },

    renderPreview(data) {
        const rank = data.rankCustom || data.rank || '';
        const outcomeStamp = this._getOutcomeStamp(data.outcome);

        const page1 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.stampSecret ? '<div class="stamp-secret">СОВЕРШЕННО СЕКРЕТНО</div>' : ''}
                ${outcomeStamp}
                
                <div class="header-block">
                    <div class="header-title">ЛИЧНОЕ ДЕЛО · Военный врач</div>
                    <div class="header-subtitle">Народный Комиссариат Обороны СССР<br>Главное Военно-Санитарное Управление РККА</div>
                </div>
                
                <div class="file-info">
                    <span>Инв. № ${Math.floor(Math.random()*9000)+1000}/МД</span>
                    <span>Дата: ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</span>
                    <span>Экз. № 1</span>
                </div>
                
                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : 'МЕСТО ДЛЯ ФОТОКАРТОЧКИ'}
                        </div>
                        <div class="foto-stamp">ГВСУ<br>НКО</div>
                    </div>
                    
                    <div class="personal-data">
                        <div class="p-row"><span class="p-label">Фамилия</span><span class="p-val"><strong>${data.lastName || ''}</strong></span></div>
                        <div class="p-row"><span class="p-label">Имя, Отчество</span><span class="p-val">${data.firstName || ''}</span></div>
                        <div class="p-row"><span class="p-label">Воинское звание</span><span class="p-val">${rank}</span></div>
                        <div class="p-row"><span class="p-label">Год и место рожд.</span><span class="p-val">${data.birthInfo || ''}</span></div>
                        <div class="p-row"><span class="p-label">Национальность</span><span class="p-val">${data.nationality || ''}</span></div>
                        <div class="p-row"><span class="p-label">Парт. принадлеж.</span><span class="p-val">${data.party || ''}</span></div>
                        <div class="p-row"><span class="p-label">ВУС / Личный №</span><span class="p-val">${data.personalNumber || ''}</span></div>
                    </div>
                </div>
                
                <div class="section-title">I. МЕДИЦИНСКАЯ СПЕЦИАЛИЗАЦИЯ</div>
                <div class="text-block">
                    <div class="p-row"><span class="p-label" style="width:200px;">Специальность</span><span class="p-val"><strong>${data.medSpecialty || ''}</strong></span></div>
                    <div class="p-row"><span class="p-label" style="width:200px;">Учёная степень</span><span class="p-val">${data.medDegree || ''}</span></div>
                </div>

                <div class="section-title">II. МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.medEducation) || '<p>—</p>'}
                </div>
                
                <div class="section-title" style="margin-top:auto;">III. ГОСПИТАЛЬНЫЕ НАЗНАЧЕНИЯ</div>
                <table class="data-table" style="margin-bottom:0;">
                    <thead><tr><th>Период (с - по)</th><th>Госпиталь / Должность</th></tr></thead>
                    <tbody>${this._renderTableRows(data.hospitalAssignments)}</tbody>
                </table>
                
                <div class="page-num">Лист 1 · ХРАНИТЬ ВЕЧНО</div>
                ${data.coffeeStain ? '<div class="effect-coffee"></div>' : ''}
            </div>
        `;

        const page2 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.coffeeStain ? '<div class="effect-coffee" style="top:55%;left:72%;"></div>' : ''}
                
                <div class="section-title" style="margin-top:0;">IV. ХИРУРГИЧЕСКАЯ СТАТИСТИКА</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.surgicalStats) || '<p>—</p>'}
                </div>
                
                <div class="section-title">V. ВЛАДЕНИЕ СПЕЦ. ОБОРУДОВАНИЕМ</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.medEquipment) || '<p>—</p>'}
                </div>

                <div class="section-title">VI. ОПЫТ ПОЛЕВОЙ МЕДИЦИНЫ</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.fieldExperience) || '<p>—</p>'}
                </div>

                <div class="section-title">VII. НАУЧНЫЕ ПУБЛИКАЦИИ И ТРУДЫ</div>
                <div class="text-block">
                    ${this._renderList(data.medPublications)}
                </div>
                
                <div class="section-title">VIII. ПРАВИТЕЛЬСТВЕННЫЕ НАГРАДЫ</div>
                <div class="text-block">
                    ${this._renderList(data.awards)}
                </div>
                
                <div class="section-title" style="margin-top:auto;">IX. ИТОГОВАЯ АТТЕСТАЦИЯ</div>
                <div class="text-block" style="min-height: 120px;">
                    ${this._renderParagraphs(data.attestation)}
                </div>
                
                <div class="page-num" style="margin-top:auto;">Лист 2 · ХРАНИТЬ ВЕЧНО</div>
            </div>
        `;

        const page3 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${outcomeStamp}
                
                <strong>ВЫВОД:</strong>
                <div class="text-block" style="font-weight: bold;">
                    ${this._renderParagraphs(data.conclusion)}
                </div>
                
                <div class="signatures">
                    <div class="sig-block">
                        <span>Начальник ГВСУ РККА</span><br>
                        <span>Генерал-полковник мед. сл.</span>
                        <div class="sig-line">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                            <div class="sig-stamp">ГВСУ<br>НКО<br>СССР<br>✦</div>
                        </div>
                        <span>/ _______________ /</span>
                    </div>
                    <div class="sig-block">
                        <br>
                        <br>
                        <div class="sig-line" style="margin-top:20px;"></div>
                        <span>${data.dossierDate || new Date().toLocaleDateString('ru-RU')} г.</span>
                    </div>
                </div>

                ${data.outcome && data.outcome !== '— (активен)' ? `
                <div class="section-title">X. ИСХОД ДЕЛА / СТАТУС</div>
                <div class="text-block" style="font-size:13px; line-height:1.8;">
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Статус</span><span class="p-val"><strong>${data.outcome}</strong></span></div>
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Дата исхода</span><span class="p-val">${data.outcomeDate || '—'}</span></div>
                </div>` : ''}
                
                <div class="page-num" style="margin-top:auto;">Лист 3 · ХРАНИТЬ ВЕЧНО</div>
            </div>
        `;

        let result = page1 + page2 + page3;
        if (data.extraNotes && data.extraNotes.trim()) {
            result += `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.stampSecret ? '<div class="stamp-secret" style="top:20px;">СОВЕРШЕННО СЕКРЕТНО</div>' : ''}
                <div class="section-title" style="margin-top:40px;">ПРИЛОЖЕНИЕ. ДОПОЛНИТЕЛЬНЫЕ СВЕДЕНИЯ</div>
                <div class="text-block" style="flex:1;">
                    ${this._renderParagraphs(data.extraNotes)}
                </div>
            </div>`;
        }

        return result;
    }
};
