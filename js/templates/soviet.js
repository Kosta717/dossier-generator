// Soviet Soldier Dossier Template
const SovietTemplate = {
    id: 'soviet',
    name: 'Личное дело',
    description: 'Личное дело военнослужащего РККА. Реалистичный дизайн НКО времен ВОВ.',
    icon: '☭',
    
    getFields() {
        return [
            { section: 'Общие сведения', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'Иванов' },
                { id: 'firstName', label: 'Имя, Отчество', type: 'text', placeholder: 'Иван Иванович' },
                { id: 'rank', label: 'Воинское звание', type: 'select', options: [
                    'Красноармеец', 'Ефрейтор', 'Младший сержант', 'Сержант', 'Старший сержант',
                    'Старшина', 'Младший лейтенант', 'Лейтенант', 'Старший лейтенант',
                    'Капитан', 'Майор', 'Подполковник', 'Полковник',
                    'Генерал-майор', 'Генерал-лейтенант', 'Генерал-полковник', 'Генерал армии', 'Маршал СССР'
                ]},
                { id: 'rankCustom', label: 'Звание (вручную, если нет в списке)', type: 'text', placeholder: 'Гвардии капитан' },
                { id: 'birthInfo', label: 'Год и место рождения', type: 'text', placeholder: '1910 г., г. Москва' },
                { id: 'nationality', label: 'Национальность', type: 'text', placeholder: 'Русский' },
                { id: 'socialOrigin', label: 'Социальное происхождение', type: 'select', options: [
                    'Рабочий', 'Крестьянин', 'Служащий', 'Из семьи военнослужащего', 'Из семьи интеллигенции', 'Колхозник'
                ]},
                { id: 'education', label: 'Образование', type: 'select', options: [
                    'Начальное (1–4 кл.)', 'Неполное среднее (5–7 кл.)', 'Среднее (8–10 кл.)',
                    'Среднее специальное', 'Незаконченное высшее', 'Высшее', 'Военная академия'
                ]},
                { id: 'prewarOccupation', label: 'Специальность до призыва', type: 'text', placeholder: 'Слесарь-механик, з-д «Серп и молот»' },
                { id: 'prewarWorkplace', label: 'Место работы до призыва', type: 'text', placeholder: 'г. Москва, Пролетарский р-н' },
                { id: 'party', label: 'Парт. принадлежность', type: 'text', placeholder: 'Член ВКП(б) с 1935 г.' },
                { id: 'personalNumber', label: 'Личный номер / ВУС', type: 'text', placeholder: 'ВУС № 1 ОП' },
                { id: 'unitNumber', label: 'Номер воинской части', type: 'text', placeholder: 'в/ч 208-А, 3-я Ударная армия' },
                { id: 'recruitSource', label: 'Источник пополнения', type: 'select', options: [
                    'Призывник', 'Доброволец', 'Кадровый военный', 'Мобилизованный', 'Из запаса', 'Переведён из другой части'
                ]},
                { id: 'dossierDate', label: 'Дата составления дела', type: 'text', placeholder: '15 июня 1943 г.' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Служба в РККА', fields: [
                { id: 'militaryService', label: 'Прохождение службы (Период - Должность)', type: 'textarea', placeholder: 'Июнь 1941 - Командир роты\n1942 - Командир батальона' },
                { id: 'campaigns', label: 'Участие в походах (Дата - Фронт)', type: 'textarea', placeholder: '1941-1942 - Западный фронт\n1943 - 1-й Белорусский фронт' },
            ]},
            { section: 'Награды и ранения', fields: [
                { id: 'awards', label: 'Правительственные награды', type: 'textarea', placeholder: 'Орден Красного Знамени (1942)\nМедаль «За отвагу» (1941)' },
                { id: 'wounds', label: 'Ранения и контузии', type: 'textarea', placeholder: 'Лёгкое ранение в левое плечо, авг 1941' },
            ]},
            { section: 'Аттестация', fields: [
                { id: 'attestation', label: 'Текст аттестации (Характеристика)', type: 'textarea', placeholder: 'Делу партии Ленина-Сталина и Социалистической Родине предан. Идеологически выдержан. В боях решителен...' },
                { id: 'conclusion', label: 'Вывод командования', type: 'textarea', placeholder: 'Должности командира батальона вполне соответствует.' },
                { id: 'commanderSignature', label: 'Подпись командира', type: 'signature' },
            ]},
            { section: 'Сведения о родственниках', fields: [
                { id: 'maritalStatus', label: 'Семейное положение', type: 'select', options: ['Холост', 'Женат', 'Разведён', 'Вдовец'] },
                { id: 'familyInfo', label: 'Ближайшие родственники (ФИО, адрес)', type: 'textarea', placeholder: 'Жена: Иванова А.П., г. Москва, ул. Горького, д. 5\nМать: Иванова Е.С., там же' },
                { id: 'relativesAbroad', label: 'Родственники за границей', type: 'select', options: ['Нет', 'Имеются (указать в примечании)', 'Неизвестно'] },
                { id: 'disciplinaryRecord', label: 'Судимости / Взыскания', type: 'textarea', placeholder: 'Судимостей нет. Взысканий нет.' },
            ]},
            { section: 'Исход / Статус', fields: [
                { id: 'outcome', label: 'Статус / Исход дела', type: 'select', options: [
                    '— (активен)', 'Погиб в бою', 'Умер от ран', 'Пропал без вести',
                    'Ранен (в госпитале)', 'Демобилизован', 'Дезертировал', 'Попал в плен', 'Переведён', 'Арестован (НКВД)'
                ]},
                { id: 'outcomeDate', label: 'Дата исхода', type: 'text', placeholder: '17 августа 1943 г.' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Штамп «СОВЕРШЕННО СЕКРЕТНО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кружки', type: 'checkbox' },
                { id: 'burned', label: 'Опаленные края', type: 'checkbox' },
                { id: 'holes', label: 'Следы от пуль', type: 'checkbox' }
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
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.stampSecret ? '<div class="stamp-secret">СОВЕРШЕННО СЕКРЕТНО</div>' : ''}
                ${outcomeStamp}
                
                <div class="header-block">
                    <div class="header-title">ЛИЧНОЕ ДЕЛО</div>
                    <div class="header-subtitle">Народный Комиссариат Обороны СССР</div>
                </div>
                
                <div class="file-info">
                    <span>Инв. № ${Math.floor(Math.random()*9000)+1000}/ЛД</span>
                    <span>Дата: ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</span>
                    <span>Экз. № 1</span>
                </div>
                
                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : 'МЕСТО ДЛЯ ФОТОКАРТОЧКИ'}
                        </div>
                        <div class="foto-stamp">МВО<br>НКО</div>
                    </div>
                    
                    <div class="personal-data">
                        <div class="p-row"><span class="p-label">Фамилия</span><span class="p-val"><strong>${data.lastName || ''}</strong></span></div>
                        <div class="p-row"><span class="p-label">Имя, Отчество</span><span class="p-val">${data.firstName || ''}</span></div>
                        <div class="p-row"><span class="p-label">Воинское звание</span><span class="p-val">${rank}</span></div>
                        <div class="p-row"><span class="p-label">Год и место рожд.</span><span class="p-val">${data.birthInfo || ''}</span></div>
                        <div class="p-row"><span class="p-label">Национальность</span><span class="p-val">${data.nationality || ''}</span></div>
                        <div class="p-row"><span class="p-label">Соц. происхождение</span><span class="p-val">${data.socialOrigin || ''}</span></div>
                        <div class="p-row"><span class="p-label">Образование</span><span class="p-val">${data.education || ''}</span></div>
                        <div class="p-row"><span class="p-label">Специальность</span><span class="p-val">${data.prewarOccupation || ''}</span></div>
                        <div class="p-row"><span class="p-label">Парт. принадлеж.</span><span class="p-val">${data.party || ''}</span></div>
                        <div class="p-row"><span class="p-label">ВУС / № дела</span><span class="p-val">${data.personalNumber || ''}</span></div>
                        <div class="p-row"><span class="p-label">Воинская часть</span><span class="p-val">${data.unitNumber || ''}</span></div>
                        <div class="p-row"><span class="p-label">Источник попол.</span><span class="p-val">${data.recruitSource || ''}</span></div>
                    </div>
                </div>
                
                <div class="section-title">I. ПРОХОЖДЕНИЕ СЛУЖБЫ</div>
                <table class="data-table">
                    <thead><tr><th>Период (с - по)</th><th>Наименование должности и части</th></tr></thead>
                    <tbody>${this._renderTableRows(data.militaryService)}</tbody>
                </table>
                
                <div class="section-title" style="margin-top:auto;">II. УЧАСТИЕ В ПОХОДАХ, БОЯХ</div>
                <table class="data-table" style="margin-bottom:0;">
                    <thead><tr><th>Дата</th><th>Фронт, направление</th></tr></thead>
                    <tbody>${this._renderTableRows(data.campaigns)}</tbody>
                </table>
                
                <div class="page-num">Лист 1 · ХРАНИТЬ ВЕЧНО</div>
                ${data.coffeeStain ? '<div class="effect-coffee"></div>' : ''}
            </div>
        `;

    const page2 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.coffeeStain ? '<div class="effect-coffee" style="top:50%;left:70%;"></div>' : ''}
                
                <div class="section-title" style="margin-top:0;">III. ПРАВИТЕЛЬСТВЕННЫЕ НАГРАДЫ</div>
                <div class="text-block">
                    ${this._renderList(data.awards)}
                </div>
                
                <div class="section-title">IV. РАНЕНИЯ И КОНТУЗИИ</div>
                <div class="text-block">
                    ${this._renderParagraphs(data.wounds) || '—'}
                </div>
                
                <div class="section-title">V. СВЕДЕНИЯ О СЕМЬЕ</div>
                <div class="text-block" style="font-size:10px;">
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:160px;">Семейное положение</span><span class="p-val">${data.maritalStatus || ''}</span></div>
                    <div style="margin-top:6px;">${this._renderParagraphs(data.familyInfo)}</div>
                    <div class="p-row" style="font-size:10px;margin-top:4px;"><span class="p-label" style="width:160px;">Родственники за гр.</span><span class="p-val">${data.relativesAbroad || '—'}</span></div>
                    <div class="p-row" style="font-size:10px;"><span class="p-label" style="width:160px;">Судимости / Взыскания</span><span class="p-val"></span></div>
                    <div style="margin-top:2px;">${this._renderParagraphs(data.disciplinaryRecord) || '<p>—</p>'}</div>
                </div>
                
                <div class="section-title">VI. ИТОГОВАЯ АТТЕСТАЦИЯ</div>
                <div class="text-block" style="min-height: 180px;">
                    ${this._renderParagraphs(data.attestation)}
                </div>
                
                <strong>ВЫВОД:</strong>
                <div class="text-block" style="font-weight: bold;">
                    ${this._renderParagraphs(data.conclusion)}
                </div>
                
                <div class="signatures">
                    <div class="sig-block">
                        <span>Начальник отдела кадров фронта</span><br>
                        <span>Гвардии Полковник</span>
                        <div class="sig-line">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                            <div class="sig-stamp">ОТДЕЛ<br>КАДРОВ<br>В.Ч.<br>208/А</div>
                        </div>
                        <span>/ Смирнов /</span>
                    </div>
                    <div class="sig-block">
                        <br>
                        <br>
                        <div class="sig-line" style="margin-top:20px;"></div>
                        <span>${data.dossierDate || new Date().toLocaleDateString('ru-RU')} г.</span>
                    </div>
                </div>
                <div class="page-num" style="margin-top:auto;">Лист 2 · ХРАНИТЬ ВЕЧНО</div>
            </div>
        `;

        // Page 3 — outcome / status page (if outcome set or extra notes)
        let page3 = '';
        if (data.outcome && data.outcome !== '— (активен)') {
            page3 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="paper-holes"><div class="hole"></div><div class="hole"></div></div>
                ${outcomeStamp}
                <div class="section-title" style="margin-top:40px;">VII. ИСХОД ДЕЛА / СТАТУС</div>
                <div class="text-block" style="font-size:13px; line-height:1.8;">
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Статус</span><span class="p-val"><strong>${data.outcome}</strong></span></div>
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Дата исхода</span><span class="p-val">${data.outcomeDate || '—'}</span></div>
                </div>
                <div class="page-num" style="margin-top:auto;">Лист 3 · ХРАНИТЬ ВЕЧНО</div>
            </div>`;
        }

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
