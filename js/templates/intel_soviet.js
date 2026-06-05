// Soviet Intelligence Operative Dossier Template (NKVD/SMERSH)
const IntelSovietTemplate = {
    id: 'intel_soviet',
    name: 'Дело оперативника',
    description: 'Личное дело оперативника НКВД/СМЕРШ. Агентурная работа, операции.',
    icon: '🕵️',
    
    getFields() {
        return [
            { section: 'Общие сведения', fields: [
                { id: 'lastName', label: 'Фамилия', type: 'text', placeholder: 'Петров' },
                { id: 'firstName', label: 'Имя, Отчество', type: 'text', placeholder: 'Алексей Николаевич' },
                { id: 'codeName', label: 'Оперативный псевдоним', type: 'text', placeholder: '«СОКОЛ»' },
                { id: 'rank', label: 'Звание', type: 'select', options: [
                    'Мл. лейтенант ГБ', 'Лейтенант ГБ', 'Ст. лейтенант ГБ',
                    'Капитан ГБ', 'Майор ГБ', 'Полковник ГБ', 'Комиссар ГБ'
                ]},
                { id: 'rankCustom', label: 'Звание (вручную, если нет в списке)', type: 'text', placeholder: 'Капитан ГБ / Старший оперуполномоченный' },
                { id: 'birthInfo', label: 'Год и место рождения', type: 'text', placeholder: '1912 г., г. Ленинград' },
                { id: 'nationality', label: 'Национальность', type: 'text', placeholder: 'Русский' },
                { id: 'party', label: 'Парт. принадлежность', type: 'text', placeholder: 'Член ВКП(б) с 1934 г., п/б № 1847290' },
                { id: 'personalNumber', label: 'Личный номер / № дела', type: 'text', placeholder: 'Д-0417/ОС' },
                { id: 'dossierDate', label: 'Дата составления дела', type: 'text', placeholder: '8 марта 1943 г.' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Легенда прикрытия', fields: [
                { id: 'coverIdentity', label: 'Легенда прикрытия (основная)', type: 'textarea', placeholder: 'Инженер-механик завода «Красный Октябрь», г. Сталинград.\nДокументы на имя Сидоров А.П., 1914 г.р.' },
                { id: 'coverDocuments', label: 'Выданные документы прикрытия', type: 'textarea', placeholder: 'Паспорт гражданский № ЛК-482917\nУдостоверение завода «Красный Октябрь» № 0341\nПродовольственная карточка' },
            ]},
            { section: 'Владение языками', fields: [
                { id: 'languages', label: 'Языки (Язык - Уровень)', type: 'textarea', placeholder: 'Немецкий - Свободно\nПольский - Базовый\nФинский - Разговорный' },
            ]},
            { section: 'Специальная подготовка', fields: [
                { id: 'specialTraining', label: 'Курсы и подготовка', type: 'textarea', placeholder: 'Школа особого назначения НКВД (1939)\nДиверсионная подготовка\nРадиодело и шифрование\nПарашютная подготовка\nМетоды допроса и вербовки' },
                { id: 'weaponsQualification', label: 'Оружейная квалификация', type: 'textarea', placeholder: 'ТТ — отлично\nНаган — отлично\nМП-40 (трофейный) — хорошо\nНож — рукопашный бой, отлично' },
            ]},
            { section: 'Оперативная деятельность', fields: [
                { id: 'operationsRecord', label: 'Операции / Задания (Дата - Операция)', type: 'textarea', placeholder: 'Янв 1942 - Заброска в тыл противника, р-н Вязьмы\nМарт 1943 - Операция «Монастырь», радиоигра' },
                { id: 'agentNetwork', label: 'Агентурная сеть (связи)', type: 'textarea', placeholder: 'Агент «БЕРЁЗА» — связник, г. Минск\nАгент «ДРОЗД» — информатор, штаб 4-й армии Вермахта' },
                { id: 'handler', label: 'Куратор / Руководитель', type: 'text', placeholder: 'Полковник ГБ Сидоренко В.А.' },
                { id: 'reliabilityAssessment', label: 'Оценка надёжности', type: 'select', options: [
                    'Абсолютно надёжен', 'Надёжен', 'Требует контроля', 'Под подозрением', 'Разоблачён'
                ]},
            ]},
            { section: 'Награды', fields: [
                { id: 'awards', label: 'Правительственные награды', type: 'textarea', placeholder: 'Орден Красной Звезды (1942)\nМедаль «За боевые заслуги» (1941)\nОрден Отечественной войны II ст. (1943)' },
            ]},
            { section: 'Аттестация', fields: [
                { id: 'attestation', label: 'Текст аттестации (Характеристика)', type: 'textarea', placeholder: 'Делу партии Ленина-Сталина и Социалистической Родине беззаветно предан. В оперативной работе проявляет хладнокровие, находчивость и решительность...' },
                { id: 'conclusion', label: 'Вывод по аттестации', type: 'textarea', placeholder: 'Рекомендуется к выполнению заданий особой сложности в глубоком тылу противника.' },
                { id: 'commanderSignature', label: 'Подпись начальника отдела', type: 'signature' },
            ]},
            { section: 'Исход / Статус', fields: [
                { id: 'outcome', label: 'Статус / Исход дела', type: 'select', options: [
                    '— (активен)',
                    'Погиб при выполнении задания',
                    'Пропал без вести (ПБВ)',
                    'Арестован противником',
                    'Перевербован',
                    'Провален (раскрыт)',
                    'Ликвидирован',
                ]},
                { id: 'outcomeDate', label: 'Дата исхода', type: 'text', placeholder: '12 августа 1943 г.' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Штамп «СОВЕРШЕННО СЕКРЕТНО · ОСО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кружки', type: 'checkbox' },
                { id: 'burned', label: 'Опаленные края', type: 'checkbox' },
            ]},
            { section: 'Дополнительно', fields: [
                { id: 'extraNotes', label: 'Дополнительные записи (Новый лист)', type: 'textarea', placeholder: 'Любая дополнительная информация...' }
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
            'Погиб при выполнении задания': { text: 'ПОГИБ', color: '#8b0000' },
            'Пропал без вести (ПБВ)':      { text: 'ПБВ', color: '#5a4a00' },
            'Арестован противником':        { text: 'АРЕСТОВАН', color: '#3a0060' },
            'Перевербован':                 { text: 'ПЕРЕВЕРБОВАН', color: '#660000' },
            'Провален (раскрыт)':           { text: 'ПРОВАЛЕН', color: '#7a3a00' },
            'Ликвидирован':                 { text: 'ЛИКВИДИРОВАН', color: '#4a0000' },
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
                ${data.stampSecret ? '<div class="stamp-secret">СОВЕРШЕННО СЕКРЕТНО · ОСО</div>' : ''}
                ${outcomeStamp}
                
                <div class="header-block">
                    <div class="header-title">ЛИЧНОЕ ДЕЛО</div>
                    <div class="header-subtitle">ОПЕРАТИВНЫЙ СОСТАВ · НКВД/СМЕРШ</div>
                </div>
                
                <div class="file-info">
                    <span>Инв. № ${Math.floor(Math.random()*9000)+1000}/ОС</span>
                    <span>Дата: ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</span>
                    <span>Экз. единственный</span>
                </div>
                
                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : 'МЕСТО ДЛЯ ФОТОКАРТОЧКИ'}
                        </div>
                        <div class="foto-stamp">ОСО<br>НКВД</div>
                    </div>
                    
                    <div class="personal-data">
                        <div class="p-row"><span class="p-label">Фамилия</span><span class="p-val"><strong>${data.lastName || ''}</strong></span></div>
                        <div class="p-row"><span class="p-label">Имя, Отчество</span><span class="p-val">${data.firstName || ''}</span></div>
                        <div class="p-row"><span class="p-label">Опер. псевдоним</span><span class="p-val"><strong>${data.codeName || ''}</strong></span></div>
                        <div class="p-row"><span class="p-label">Звание</span><span class="p-val">${rank}</span></div>
                        <div class="p-row"><span class="p-label">Год и место рожд.</span><span class="p-val">${data.birthInfo || ''}</span></div>
                        <div class="p-row"><span class="p-label">Национальность</span><span class="p-val">${data.nationality || ''}</span></div>
                        <div class="p-row"><span class="p-label">Парт. принадлеж.</span><span class="p-val">${data.party || ''}</span></div>
                        <div class="p-row"><span class="p-label">Личный номер</span><span class="p-val">${data.personalNumber || ''}</span></div>
                        <div class="p-row"><span class="p-label">Куратор</span><span class="p-val">${data.handler || ''}</span></div>
                        <div class="p-row"><span class="p-label">Оценка надёжности</span><span class="p-val"><strong>${data.reliabilityAssessment || ''}</strong></span></div>
                    </div>
                </div>
                
                <div class="section-title">I. ЛЕГЕНДА ПРИКРЫТИЯ</div>
                <div class="text-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.coverIdentity) || '<p>—</p>'}
                </div>
                
                <div class="section-title">II. ДОКУМЕНТЫ ПРИКРЫТИЯ</div>
                <div class="text-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.coverDocuments) || '<p>—</p>'}
                </div>

                <div class="section-title" style="margin-top:auto;">III. ВЛАДЕНИЕ ЯЗЫКАМИ</div>
                <table class="data-table" style="margin-bottom:0;">
                    <thead><tr><th>Язык</th><th>Уровень владения</th></tr></thead>
                    <tbody>${this._renderTableRows(data.languages)}</tbody>
                </table>
                
                <div class="page-num">Лист 1 · ХРАНИТЬ ВЕЧНО · ОСОБОЙ ВАЖНОСТИ</div>
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
                
                <div class="section-title" style="margin-top:0;">IV. СПЕЦИАЛЬНАЯ ПОДГОТОВКА</div>
                <div class="text-block">
                    ${this._renderList(data.specialTraining)}
                </div>
                
                <div class="section-title">V. ОРУЖЕЙНАЯ КВАЛИФИКАЦИЯ</div>
                <div class="text-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.weaponsQualification) || '<p>—</p>'}
                </div>
                
                <div class="section-title">VI. ОПЕРАЦИИ И ЗАДАНИЯ</div>
                <table class="data-table">
                    <thead><tr><th>Дата / Период</th><th>Операция / Задание</th></tr></thead>
                    <tbody>${this._renderTableRows(data.operationsRecord)}</tbody>
                </table>
                
                <div class="section-title">VII. АГЕНТУРНАЯ СЕТЬ</div>
                <div class="text-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.agentNetwork) || '<p>—</p>'}
                </div>
                
                <div class="section-title">VIII. ПРАВИТЕЛЬСТВЕННЫЕ НАГРАДЫ</div>
                <div class="text-block">
                    ${this._renderList(data.awards)}
                </div>
                
                <div class="page-num" style="margin-top:auto;">Лист 2 · ХРАНИТЬ ВЕЧНО · ОСОБОЙ ВАЖНОСТИ</div>
            </div>
        `;

        const page3 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${outcomeStamp}
                
                <div class="section-title" style="margin-top:0;">IX. АТТЕСТАЦИЯ ОПЕРАТИВНИКА</div>
                <div class="text-block" style="min-height: 160px;">
                    ${this._renderParagraphs(data.attestation)}
                </div>
                
                <strong>ВЫВОД:</strong>
                <div class="text-block" style="font-weight: bold;">
                    ${this._renderParagraphs(data.conclusion)}
                </div>

                ${data.outcome && data.outcome !== '— (активен)' ? `
                <div class="section-title">X. ИСХОД / СТАТУС ОПЕРАТИВНИКА</div>
                <div class="text-block" style="font-size:12px; line-height:1.8;">
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Статус</span><span class="p-val"><strong>${data.outcome}</strong></span></div>
                    <div class="p-row" style="font-size:12px;"><span class="p-label" style="width:180px;">Дата</span><span class="p-val">${data.outcomeDate || '—'}</span></div>
                </div>` : ''}
                
                <div class="signatures">
                    <div class="sig-block">
                        <span>Нач. отдела контрразведки СМЕРШ</span><br>
                        <span>Полковник ГБ</span>
                        <div class="sig-line">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                            <div class="sig-stamp">ОСО<br>НКВД<br>СССР<br>✦</div>
                        </div>
                        <span>/ __________ /</span>
                    </div>
                    <div class="sig-block">
                        <br>
                        <br>
                        <div class="sig-line" style="margin-top:20px;"></div>
                        <span>${data.dossierDate || new Date().toLocaleDateString('ru-RU')} г.</span>
                    </div>
                </div>
                <div class="page-num" style="margin-top:auto;">Лист 3 · ХРАНИТЬ ВЕЧНО · ОСОБОЙ ВАЖНОСТИ</div>
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
                ${data.stampSecret ? '<div class="stamp-secret" style="top:20px;">СОВЕРШЕННО СЕКРЕТНО · ОСО</div>' : ''}
                <div class="section-title" style="margin-top:40px;">ПРИЛОЖЕНИЕ. ДОПОЛНИТЕЛЬНЫЕ СВЕДЕНИЯ</div>
                <div class="text-block" style="flex:1;">
                    ${this._renderParagraphs(data.extraNotes)}
                </div>
            </div>`;
        }

        return result;
    }
};
