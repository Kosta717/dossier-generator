// Soviet VVS RKKA Pilot Dossier Template
const PilotSovietTemplate = {
    id: 'pilot_soviet',
    name: 'Лётная книжка',
    description: 'Личное дело лётчика ВВС РККА. Налёт, типы самолётов, воздушные бои.',
    icon: '✈️',

    getFields() {
        return [
            { section: 'Общие сведения', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'Покрышкин' },
                { id: 'firstName', label: 'Имя, Отчество', type: 'text', placeholder: 'Александр Иванович' },
                { id: 'rank', label: 'Воинское звание', type: 'select', options: [
                    'Мл. лейтенант', 'Лейтенант', 'Ст. лейтенант', 'Капитан',
                    'Майор', 'Подполковник', 'Полковник'
                ]},
                { id: 'rankCustom', label: 'Звание (вручную, если нет в списке)', type: 'text', placeholder: 'Гвардии капитан' },
                { id: 'birthInfo', label: 'Год и место рождения', type: 'text', placeholder: '1913 г., г. Новосибирск' },
                { id: 'nationality', label: 'Национальность', type: 'text', placeholder: 'Русский' },
                { id: 'party', label: 'Парт. принадлежность', type: 'text', placeholder: 'Член ВКП(б) с 1942 г.' },
                { id: 'personalNumber', label: 'Личный номер / ВУС', type: 'text', placeholder: 'ВУС № 25-ЛС' },
                { id: 'dossierDate', label: 'Дата составления дела', type: 'text', placeholder: '15 июня 1943 г.' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Лётная подготовка', fields: [
                { id: 'aircraftTypes', label: 'Типы самолётов (тип — квалификация)', type: 'textarea', placeholder: 'И-16 — пилот\nИл-2 — командир экипажа\nЯк-1 — пилот-истребитель' },
                { id: 'totalFlightHours', label: 'Общий налёт', type: 'text', placeholder: '1240 часов' },
                { id: 'combatFlightHours', label: 'Боевой налёт', type: 'text', placeholder: '680 часов' },
                { id: 'nightFlightHours', label: 'Ночной налёт', type: 'text', placeholder: '120 часов' },
                { id: 'navigatorQualification', label: 'Штурманская квалификация', type: 'select', options: [
                    'Нет', 'Базовая', 'Полная штурманская'
                ]},
                { id: 'parachuteJumps', label: 'Кол-во прыжков с парашютом', type: 'text', placeholder: '12' },
            ]},
            { section: 'Боевая деятельность', fields: [
                { id: 'sortiesFlown', label: 'Всего боевых вылетов', type: 'text', placeholder: '354' },
                { id: 'bombingMissions', label: 'Из них бомбардировочных', type: 'text', placeholder: '45' },
                { id: 'aerialVictories', label: 'Воздушные победы (Дата - Тип сбитого)', type: 'textarea', placeholder: '12.04.1943 - Bf 109 (лично)\n05.07.1943 - Ju 87 (в группе)' },
                { id: 'combatMissions', label: 'Боевые задания (Дата - Описание)', type: 'textarea', placeholder: '22.06.1941 - Штурмовка колонны пр-ка\n05.07.1943 - Прикрытие наземных войск' },
                { id: 'crashLandings', label: 'Вынужденные посадки', type: 'textarea', placeholder: '14.08.1942 - Посадка на фюзеляж, повреждение мотора (район Сталинграда)' },
                { id: 'bailouts', label: 'Покидание самолёта с парашютом (в бою)', type: 'textarea', placeholder: '03.09.1943 - Покинул горящий Як-1 на высоте 3000 м' },
            ]},
            { section: 'Награды и ранения', fields: [
                { id: 'awards', label: 'Правительственные награды', type: 'textarea', placeholder: 'Орден Красного Знамени (1942)\nОрден Отечественной войны I ст. (1943)' },
                { id: 'wounds', label: 'Ранения и контузии', type: 'textarea', placeholder: 'Лёгкое ранение в левое плечо, авг 1942' },
            ]},
            { section: 'Аттестация', fields: [
                { id: 'attestation', label: 'Текст аттестации (Характеристика)', type: 'textarea', placeholder: 'В воздушных боях решителен и инициативен. Лётную технику освоил отлично...' },
                { id: 'conclusion', label: 'Вывод командования', type: 'textarea', placeholder: 'Должности командира эскадрильи вполне соответствует.' },
                { id: 'commanderSignature', label: 'Подпись командира', type: 'signature' },
            ]},
            { section: 'Исход / Статус', fields: [
                { id: 'outcome', label: 'Статус / Исход дела', type: 'select', options: [
                    '— (активен)', 'Погиб в бою', 'Умер от ран', 'Пропал без вести',
                    'Не вернулся с задания', 'Ранен (в госпитале)', 'Демобилизован',
                    'Дезертировал', 'Попал в плен', 'Переведён', 'Арестован (НКВД)'
                ]},
                { id: 'outcomeDate', label: 'Дата исхода', type: 'text', placeholder: '17 августа 1943 г.' },
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
            'Погиб в бою':           { text: 'ПОГИБ', color: '#8b0000' },
            'Умер от ран':           { text: 'УМ. ОТ РАН', color: '#8b0000' },
            'Пропал без вести':      { text: 'ПБВ', color: '#5a4a00' },
            'Не вернулся с задания': { text: 'НЕ ВЕРНУЛСЯ', color: '#660000' },
            'Ранен (в госпитале)':   { text: 'РАНЕН', color: '#7a3a00' },
            'Демобилизован':         { text: 'ДЕМОБИЛ.', color: '#1a4a1a' },
            'Дезертировал':          { text: 'ДЕЗЕРТИР', color: '#660000' },
            'Попал в плен':          { text: 'В ПЛЕНУ', color: '#4a3a00' },
            'Переведён':             { text: 'ПЕРЕВЕДЁН', color: '#1a2a4a' },
            'Арестован (НКВД)':      { text: 'АРЕСТОВАН', color: '#3a0060' },
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
                    <div class="header-title">ЛИЧНОЕ ДЕЛО · ЛЁТНЫЙ СОСТАВ</div>
                    <div class="header-subtitle">ВВС РККА · Народный Комиссариат Обороны СССР</div>
                </div>

                <div class="file-info">
                    <span>Инв. № ${Math.floor(Math.random()*9000)+1000}/ЛК</span>
                    <span>Дата: ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</span>
                    <span>Экз. № 1</span>
                </div>

                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : 'МЕСТО ДЛЯ ФОТОКАРТОЧКИ'}
                        </div>
                        <div class="foto-stamp">ВВС<br>РККА</div>
                    </div>

                    <div class="personal-data">
                        <div class="p-row"><span class="p-label">Фамилия</span><span class="p-val"><strong>${data.lastName || ''}</strong></span></div>
                        <div class="p-row"><span class="p-label">Имя, Отчество</span><span class="p-val">${data.firstName || ''}</span></div>
                        <div class="p-row"><span class="p-label">Воинское звание</span><span class="p-val">${rank}</span></div>
                        <div class="p-row"><span class="p-label">Год и место рожд.</span><span class="p-val">${data.birthInfo || ''}</span></div>
                        <div class="p-row"><span class="p-label">Национальность</span><span class="p-val">${data.nationality || ''}</span></div>
                        <div class="p-row"><span class="p-label">Парт. принадлеж.</span><span class="p-val">${data.party || ''}</span></div>
                        <div class="p-row"><span class="p-label">Личный номер</span><span class="p-val">${data.personalNumber || ''}</span></div>
                    </div>
                </div>

                <div class="section-title">I. ЛЁТНАЯ ПОДГОТОВКА</div>
                <div class="text-block" style="font-size:10px;">
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Общий налёт</span><span class="p-val"><strong>${data.totalFlightHours || '—'}</strong></span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Боевой налёт</span><span class="p-val">${data.combatFlightHours || '—'}</span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Ночной налёт</span><span class="p-val">${data.nightFlightHours || '—'}</span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Штурманская квалиф.</span><span class="p-val">${data.navigatorQualification || '—'}</span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Прыжки с парашютом</span><span class="p-val">${data.parachuteJumps || '—'}</span></div>
                </div>

                <div class="section-title">II. ОСВОЕННАЯ МАТЧАСТЬ</div>
                <table class="data-table">
                    <thead><tr><th>Тип самолёта</th><th>Квалификация</th></tr></thead>
                    <tbody>${this._renderTableRows(data.aircraftTypes)}</tbody>
                </table>

                <div class="section-title" style="margin-top:auto;">III. БОЕВАЯ ДЕЯТЕЛЬНОСТЬ</div>
                <div class="text-block" style="font-size:10px; margin-bottom:0;">
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Всего боевых вылетов</span><span class="p-val"><strong>${data.sortiesFlown || '—'}</strong></span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:180px;">Бомбардировочных</span><span class="p-val">${data.bombingMissions || '—'}</span></div>
                </div>

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
                ${data.coffeeStain ? '<div class="effect-coffee" style="top:55%;left:65%;"></div>' : ''}

                <div class="section-title" style="margin-top:0;">IV. ВОЗДУШНЫЕ ПОБЕДЫ</div>
                <table class="data-table">
                    <thead><tr><th>Дата</th><th>Тип сбитого самолёта</th></tr></thead>
                    <tbody>${this._renderTableRows(data.aerialVictories)}</tbody>
                </table>

                <div class="section-title">V. БОЕВЫЕ ЗАДАНИЯ</div>
                <table class="data-table">
                    <thead><tr><th>Дата</th><th>Описание задания</th></tr></thead>
                    <tbody>${this._renderTableRows(data.combatMissions)}</tbody>
                </table>

                <div class="section-title">VI. ВЫНУЖДЕННЫЕ ПОСАДКИ И ПОКИДАНИЕ САМОЛЁТА</div>
                <div class="text-block" style="font-size:10px;">
                    <strong style="font-size:9px;">Вынужденные посадки:</strong>
                    ${this._renderParagraphs(data.crashLandings) || '<p>—</p>'}
                    <strong style="font-size:9px; margin-top:6px; display:block;">Покидание самолёта с парашютом:</strong>
                    ${this._renderParagraphs(data.bailouts) || '<p>—</p>'}
                </div>

                <div class="section-title">VII. ПРАВИТЕЛЬСТВЕННЫЕ НАГРАДЫ</div>
                <div class="text-block">
                    ${this._renderList(data.awards)}
                </div>

                <div class="section-title">VIII. РАНЕНИЯ И КОНТУЗИИ</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.wounds) || '—'}
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

                <div class="section-title" style="margin-top:0;">IX. ИТОГОВАЯ АТТЕСТАЦИЯ</div>
                <div class="text-block" style="min-height:160px;">
                    ${this._renderParagraphs(data.attestation)}
                </div>

                <strong>ВЫВОД:</strong>
                <div class="text-block" style="font-weight:bold;">
                    ${this._renderParagraphs(data.conclusion)}
                </div>

                ${data.outcome && data.outcome !== '— (активен)' ? `
                <div class="section-title">X. ИСХОД ДЕЛА / СТАТУС</div>
                <div class="text-block" style="font-size:13px; line-height:1.8;">
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Статус</span><span class="p-val"><strong>${data.outcome}</strong></span></div>
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Дата исхода</span><span class="p-val">${data.outcomeDate || '—'}</span></div>
                </div>` : ''}

                <div class="signatures">
                    <div class="sig-block">
                        <span>Командир авиаполка</span><br>
                        <span>Гвардии Полковник</span>
                        <div class="sig-line">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                            <div class="sig-stamp">ШТАБ<br>ВВС<br>РККА</div>
                        </div>
                        <span>/ ____________ /</span>
                    </div>
                    <div class="sig-block">
                        <br>
                        <br>
                        <div class="sig-line" style="margin-top:20px;"></div>
                        <span>${data.dossierDate || new Date().toLocaleDateString('ru-RU')} г.</span>
                    </div>
                </div>
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
