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
                { id: 'rank', label: 'Воинское звание', type: 'text', placeholder: 'Капитан' },
                { id: 'birthInfo', label: 'Год и место рождения', type: 'text', placeholder: '1910 г., г. Москва' },
                { id: 'nationality', label: 'Национальность', type: 'text', placeholder: 'Русский' },
                { id: 'party', label: 'Парт. принадлежность', type: 'text', placeholder: 'Член ВКП(б) с 1935 г.' },
                { id: 'personalNumber', label: 'Личный номер / ВУС', type: 'text', placeholder: 'ВУС № 1 ОП' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Служба в РККА', fields: [
                { id: 'militaryService', label: 'Прохождение службы (Период - Должность)', type: 'textarea', placeholder: 'Июнь 1941 - Командир роты\n1942 - Командир батальона' },
                { id: 'campaigns', label: 'Участие в походах (Дата - Фронт)', type: 'textarea', placeholder: '1941-1942 - Западный фронт\n1943 - 1-й Белорусский фронт' },
            ]},
            { section: 'Награды и ранения', fields: [
                { id: 'awards', label: 'Правительственные награды', type: 'textarea', placeholder: 'Орден Красного Знамени (1942)\nМедаль «За отвагу» (1941)' },
                { id: 'wounds', label: 'Ранения и контузии', type: 'textarea', placeholder: 'Легкое ранение в левое плечо, авг 1941' },
            ]},
            { section: 'Аттестация', fields: [
                { id: 'attestation', label: 'Текст аттестации (Характеристика)', type: 'textarea', placeholder: 'Делу партии Ленина-Сталина и Социалистической Родине предан. Идеологически выдержан. В боях решителен...' },
                { id: 'conclusion', label: 'Вывод командования', type: 'textarea', placeholder: 'Должности командира батальона вполне соответствует.' }
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Штамп «СОВЕРШЕННО СЕКРЕТНО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кружки', type: 'checkbox' }
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

    renderPreview(data) {
        const page1 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="paper-holes">
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                ${data.stampSecret ? '<div class="stamp-secret">СОВЕРШЕННО СЕКРЕТНО</div>' : ''}
                
                <div class="header-block">
                    <div class="header-title">ЛИЧНОЕ ДЕЛО</div>
                    <div class="header-subtitle">Народный Комиссариат Обороны СССР</div>
                </div>
                
                <div class="file-info">
                    <span>Инв. № ${Math.floor(Math.random()*9000)+1000}/ЛД</span>
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
                        <div class="p-row"><span class="p-label">Воинское звание</span><span class="p-val">${data.rank || ''}</span></div>
                        <div class="p-row"><span class="p-label">Год и место рожд.</span><span class="p-val">${data.birthInfo || ''}</span></div>
                        <div class="p-row"><span class="p-label">Национальность</span><span class="p-val">${data.nationality || ''}</span></div>
                        <div class="p-row"><span class="p-label">Парт. принадлеж.</span><span class="p-val">${data.party || ''}</span></div>
                        <div class="p-row"><span class="p-label">ВУС / № дела</span><span class="p-val">${data.personalNumber || ''}</span></div>
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
                
                <div class="page-num">Лист 1</div>
                ${data.coffeeStain ? '<div class="effect-coffee"></div>' : ''}
            </div>
        `;

        const page2 = `
            <div class="a4-page soviet-page ${data.paperWear ? 'effect-wear' : ''}">
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
                
                <div class="section-title">V. ИТОГОВАЯ АТТЕСТАЦИЯ</div>
                <div class="text-block" style="min-height: 250px;">
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
                            <div class="sig-stamp">ОТДЕЛ<br>КАДРОВ<br>В.Ч.<br>208/А</div>
                        </div>
                        <span>/ Смирнов /</span>
                    </div>
                    <div class="sig-block">
                        <br>
                        <br>
                        <div class="sig-line" style="margin-top:20px;"></div>
                        <span>${new Date().toLocaleDateString('ru-RU')} г.</span>
                    </div>
                </div>
                <div class="page-num" style="margin-top:auto;">Лист 2</div>
            </div>
        `;

        let result = page1 + page2;
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
