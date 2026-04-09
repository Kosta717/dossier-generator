// D&D Fantasy DOSSIER Template (not a character sheet!)
const DndTemplate = {
    id: 'dnd',
    name: 'Фэнтези D&D',
    description: 'Досье на искателя приключений — Гильдия авантюристов',
    icon: '⚔️',

    classes: {
        barbarian: { name: 'Варвар', icon: '🪓', hitDie: 'd12', org: 'Коллегия Воинов Дикоземья' },
        bard:      { name: 'Бард', icon: '🎵', hitDie: 'd8', org: 'Коллегия Лореев и Менестрелей' },
        cleric:    { name: 'Жрец', icon: '✝️', hitDie: 'd8', org: 'Орден Священного Света' },
        druid:     { name: 'Друид', icon: '🌿', hitDie: 'd8', org: 'Круг Древних Рощ' },
        fighter:   { name: 'Воин', icon: '🗡️', hitDie: 'd10', org: 'Гильдия Наёмников и Стражей' },
        monk:      { name: 'Монах', icon: '👊', hitDie: 'd8', org: 'Монастырь Пути Открытой Ладони' },
        paladin:   { name: 'Паладин', icon: '🛡️', hitDie: 'd10', org: 'Орден Серебряного Рассвета' },
        ranger:    { name: 'Следопыт', icon: '🏹', hitDie: 'd10', org: 'Братство Странствующих Охотников' },
        rogue:     { name: 'Плут', icon: '🗡️', hitDie: 'd8', org: 'Гильдия Теней' },
        sorcerer:  { name: 'Чародей', icon: '🔥', hitDie: 'd6', org: 'Конклав Тайной Крови' },
        warlock:   { name: 'Колдун', icon: '👁️', hitDie: 'd8', org: 'Ковен Запретных Пактов' },
        wizard:    { name: 'Волшебник', icon: '📖', hitDie: 'd6', org: 'Академия Высших Искусств' }
    },

    races: ['Человек','Эльф','Полуэльф','Дварф','Полурослик','Гном','Полуорк','Тифлинг','Драконорождённый'],

    getFields() {
        const classOptions = Object.entries(this.classes).map(([k, v]) => v.name);
        return [
            { section: 'Личность субъекта', fields: [
                { id: 'characterName', label: 'Имя / прозвище', type: 'text', placeholder: 'Торин Дубощит' },
                { id: 'charClass', label: 'Класс (специализация)', type: 'select', options: classOptions },
                { id: 'race', label: 'Раса / происхождение', type: 'select', options: this.races },
                { id: 'level', label: 'Ранг (уровень)', type: 'text', placeholder: '5' },
                { id: 'alignment', label: 'Мировоззрение', type: 'select', options: [
                    'Законно-добрый','Нейтрально-добрый','Хаотично-добрый',
                    'Законно-нейтральный','Истинно нейтральный','Хаотично-нейтральный',
                    'Законно-злой','Нейтрально-злой','Хаотично-злой'
                ]},
                { id: 'age', label: 'Возраст', type: 'text', placeholder: '35' },
                { id: 'height', label: 'Рост', type: 'text', placeholder: '180 см' },
                { id: 'appearance', label: 'Внешность (описание)', type: 'textarea', placeholder: 'Коренастый дварф с длинной рыжей бородой, заплетённой в косу. Шрам через левый глаз...' },
                { id: 'photo', label: 'Портрет', type: 'photo' }
            ]},
            { section: 'Оценка боеспособности', fields: [
                { id: 'str', label: 'Сила (STR)', type: 'text', placeholder: '16' },
                { id: 'dex', label: 'Ловкость (DEX)', type: 'text', placeholder: '12' },
                { id: 'con', label: 'Телосложение (CON)', type: 'text', placeholder: '14' },
                { id: 'int', label: 'Интеллект (INT)', type: 'text', placeholder: '10' },
                { id: 'wis', label: 'Мудрость (WIS)', type: 'text', placeholder: '13' },
                { id: 'cha', label: 'Харизма (CHA)', type: 'text', placeholder: '8' },
                { id: 'hp', label: 'Живучесть (HP)', type: 'text', placeholder: '45' },
                { id: 'ac', label: 'Защищённость (AC)', type: 'text', placeholder: '18' },
            ]},
            { section: 'Досье', fields: [
                { id: 'background', label: 'Предыстория / биография', type: 'textarea', placeholder: 'Родился в клане Каменного Молота. В юности потерял семью при нападении орков...' },
                { id: 'knownAbilities', label: 'Известные способности', type: 'textarea', placeholder: 'Владение всеми видами оружия\nБожественная кара\nНаложение рук\n...' },
                { id: 'knownSpells', label: 'Зафиксированные заклинания', type: 'textarea', placeholder: 'Щит Веры\nЛечение ран\nОгненный шар...' },
                { id: 'equipment', label: 'Известное снаряжение', type: 'textarea', placeholder: 'Магический длинный меч +1\nМифриловая кольчуга\nЩит с гербом...' },
            ]},
            { section: 'Оперативные сведения', fields: [
                { id: 'allies', label: 'Известные союзники', type: 'textarea', placeholder: 'Гильдия авантюристов «Серебряные Клинки»\n...' },
                { id: 'enemies', label: 'Известные враги', type: 'textarea', placeholder: 'Культ Чёрного Пламени\n...' },
                { id: 'bounty', label: 'Розыск / награда', type: 'text', placeholder: 'Не разыскивается' },
                { id: 'dangerLevel', label: 'Уровень угрозы', type: 'select', options: ['Минимальный','Низкий','Средний','Высокий','Чрезвычайный','Смертельный'] },
                { id: 'notes', label: 'Примечания агента', type: 'textarea', placeholder: 'Субъект склонен к самопожертвованию. Рекомендуется осторожность при вербовке...' },
            ]}
        ];
    },

    _getClassKey(className) {
        for (const [key, val] of Object.entries(this.classes)) {
            if (val.name === className) return key;
        }
        return 'fighter';
    },

    _getMod(score) {
        const s = parseInt(score) || 10;
        const mod = Math.floor((s - 10) / 2);
        return mod >= 0 ? `+${mod}` : `${mod}`;
    },

    renderPreview(data) {
        const classKey = this._getClassKey(data.charClass);
        const classInfo = this.classes[classKey];

        const stats = ['str','dex','con','int','wis','cha'];
        const statNames = ['СИЛ','ЛОВ','ТЕЛ','ИНТ','МДР','ХАР'];

        const statsHtml = stats.map((s, i) => `
            <div class="dnd-stat-box">
                <div class="dnd-stat-name">${statNames[i]}</div>
                <div class="dnd-stat-value">${data[s] || '10'}</div>
                <div class="dnd-stat-mod">${this._getMod(data[s])}</div>
            </div>
        `).join('');

        const page1 = `
            <div class="a4-page dnd-page class-${classKey}">
                <div class="dnd-border"></div>
                <div class="dnd-corner tl">❧</div>
                <div class="dnd-corner tr">❧</div>
                <div class="dnd-corner bl">❧</div>
                <div class="dnd-corner br">❧</div>
                <div class="dnd-seal">${classInfo.icon}</div>

                <div class="dnd-inner">
                    <div class="dnd-header">
                        <span class="dnd-header-icon">${classInfo.icon}</span>
                        <div class="dnd-header-title">Досье</div>
                        <div class="dnd-header-subtitle">${data.characterName || 'Имя неизвестно'}</div>
                        <div class="dnd-header-org">${classInfo.org}</div>
                        <div class="dnd-divider"></div>
                    </div>

                    <div style="display:flex;gap:6mm;margin-bottom:4mm;">
                        <div class="dnd-portrait">
                            ${data.photo ? `<img src="${data.photo}" alt="Portrait">` : 'ПОРТРЕТ'}
                        </div>
                        <div style="flex:1;">
                            <div class="dnd-field"><span class="dnd-field-label">Субъект:</span><span class="dnd-field-value">${data.characterName || ''}</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Класс:</span><span class="dnd-field-value">${classInfo.name}</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Раса:</span><span class="dnd-field-value">${data.race || ''}</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Ранг:</span><span class="dnd-field-value">${data.level || '1'} уровень</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Мировоззрение:</span><span class="dnd-field-value">${data.alignment || ''}</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Возраст:</span><span class="dnd-field-value">${data.age || ''}</span></div>
                            <div class="dnd-field"><span class="dnd-field-label">Рост:</span><span class="dnd-field-value">${data.height || ''}</span></div>
                        </div>
                    </div>

                    <div class="dnd-section-title">Оценка боеспособности</div>
                    <div class="dnd-stats-row">${statsHtml}</div>
                    <div style="display:flex;gap:3mm;margin:2mm 0 3mm;">
                        <div class="dnd-stat-box" style="flex:1;">
                            <div class="dnd-stat-name">Живучесть</div>
                            <div class="dnd-stat-value" style="font-size:16pt;">${data.hp || '—'}</div>
                        </div>
                        <div class="dnd-stat-box" style="flex:1;">
                            <div class="dnd-stat-name">Защита</div>
                            <div class="dnd-stat-value" style="font-size:16pt;">${data.ac || '—'}</div>
                        </div>
                        <div class="dnd-stat-box" style="flex:1;">
                            <div class="dnd-stat-name">Кость хитов</div>
                            <div class="dnd-stat-value" style="font-size:16pt;">${classInfo.hitDie}</div>
                        </div>
                        <div class="dnd-stat-box" style="flex:1;">
                            <div class="dnd-stat-name">Угроза</div>
                            <div class="dnd-stat-value" style="font-size:10pt;">${data.dangerLevel || '—'}</div>
                        </div>
                    </div>

                    <div class="dnd-section-title">Внешнее описание</div>
                    <div class="dnd-text-block">${data.appearance || ''}</div>

                    <div class="dnd-section-title">Известные способности</div>
                    <div class="dnd-text-block">${data.knownAbilities || ''}</div>

                    <div class="dnd-section-title">Зафиксированные заклинания</div>
                    <div class="dnd-text-block">${data.knownSpells || ''}</div>
                </div>
                <div class="dnd-page-number">— 1 —</div>
            </div>
        `;

        const page2 = `
            <div class="a4-page dnd-page class-${classKey}">
                <div class="dnd-border"></div>
                <div class="dnd-corner tl">❧</div>
                <div class="dnd-corner tr">❧</div>
                <div class="dnd-corner bl">❧</div>
                <div class="dnd-corner br">❧</div>

                <div class="dnd-inner">
                    <div class="dnd-header" style="margin-bottom:3mm;padding-bottom:3mm;">
                        <div class="dnd-header-title" style="font-size:16pt;">Досье — продолжение</div>
                        <div class="dnd-header-subtitle">${data.characterName || 'Субъект'} · ${classInfo.name}</div>
                        <div class="dnd-divider"></div>
                    </div>

                    <div class="dnd-section-title">Биография / предыстория</div>
                    <div class="dnd-text-block">${data.background || ''}</div>

                    <div class="dnd-section-title">Известное снаряжение</div>
                    <div class="dnd-text-block">${data.equipment || ''}</div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3mm;">
                        <div>
                            <div class="dnd-section-title" style="font-size:10pt;">Союзники</div>
                            <div class="dnd-text-block" style="min-height:20mm;">${data.allies || ''}</div>
                        </div>
                        <div>
                            <div class="dnd-section-title" style="font-size:10pt;">Враги</div>
                            <div class="dnd-text-block" style="min-height:20mm;">${data.enemies || ''}</div>
                        </div>
                    </div>

                    <div class="dnd-field" style="margin-top:3mm;"><span class="dnd-field-label">Розыск:</span><span class="dnd-field-value">${data.bounty || 'Не разыскивается'}</span></div>

                    <div class="dnd-section-title">Примечания агента</div>
                    <div class="dnd-text-block">${data.notes || ''}</div>

                    <div style="margin-top:auto;padding-top:5mm;border-top:1px solid rgba(120,80,30,0.15);display:flex;justify-content:space-between;font-size:8pt;color:#7a5a2a;">
                        <div>
                            <div>Составлено:</div>
                            <div style="border-top:1px solid rgba(120,80,30,0.2);margin-top:12mm;padding-top:1mm;width:35mm;text-align:center;font-size:7pt;color:#aaa;">агент / дата</div>
                        </div>
                        <div style="text-align:right;">
                            <div>${classInfo.org}</div>
                            <div style="margin-top:2mm;font-style:italic;font-size:7pt;opacity:0.6;">Гриф: для служебного пользования</div>
                        </div>
                    </div>
                </div>
                <div class="dnd-page-number">— 2 —</div>
            </div>
        `;

        return page1 + page2;
    }
};
