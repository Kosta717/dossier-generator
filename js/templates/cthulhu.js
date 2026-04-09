// Call of Cthulhu DOSSIER Template (investigation file, not character sheet!)
const CthulhuTemplate = {
    id: 'cthulhu',
    name: 'Зов Ктулху',
    description: 'Дело расследования — Мискатоникский университет',
    icon: '🐙',

    occupations: [
        'Антиквар','Автор','Детектив','Дилетант','Доктор','Журналист',
        'Инженер','Исследователь','Криминалист','Лётчик','Механик','Моряк',
        'Оккультист','Парапсихолог','Полицейский','Преподаватель','Профессор',
        'Священник','Солдат','Шпион','Юрист','Археолог','Библиотекарь'
    ],

    getFields() {
        return [
            { section: 'Личность субъекта', fields: [
                { id: 'characterName', label: 'Полное имя', type: 'text', placeholder: 'Генри Армитаж' },
                { id: 'occupation', label: 'Профессия / род занятий', type: 'select', options: this.occupations },
                { id: 'age', label: 'Возраст', type: 'text', placeholder: '42' },
                { id: 'gender', label: 'Пол', type: 'text', placeholder: 'Муж.' },
                { id: 'residence', label: 'Адрес проживания', type: 'text', placeholder: 'Аркхэм, Массачусетс, Уилмарт-стрит 14' },
                { id: 'birthplace', label: 'Место рождения', type: 'text', placeholder: 'Бостон, Массачусетс' },
                { id: 'appearance', label: 'Внешность', type: 'textarea', placeholder: 'Высокий худощавый мужчина в очках. Нервные руки, постоянно курит трубку...' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Физич. и психич. состояние', fields: [
                { id: 'str', label: 'Сила (STR)', type: 'text', placeholder: '50' },
                { id: 'con', label: 'Телосложение (CON)', type: 'text', placeholder: '55' },
                { id: 'siz', label: 'Размер (SIZ)', type: 'text', placeholder: '65' },
                { id: 'dex', label: 'Ловкость (DEX)', type: 'text', placeholder: '60' },
                { id: 'app', label: 'Внешность (APP)', type: 'text', placeholder: '55' },
                { id: 'int', label: 'Интеллект (INT)', type: 'text', placeholder: '75' },
                { id: 'pow', label: 'Сила воли (POW)', type: 'text', placeholder: '60' },
                { id: 'edu', label: 'Образование (EDU)', type: 'text', placeholder: '80' },
                { id: 'hp', label: 'Здоровье (HP)', type: 'text', placeholder: '12' },
                { id: 'sanity', label: 'Рассудок (SAN)', type: 'text', placeholder: '55' },
                { id: 'mp', label: 'Магическая сила (MP)', type: 'text', placeholder: '12' },
                { id: 'luck', label: 'Удача', type: 'text', placeholder: '50' },
            ]},
            { section: 'Профессиональные навыки', fields: [
                { id: 'skill_dodge', label: 'Уклонение', type: 'text', placeholder: '30' },
                { id: 'skill_spot', label: 'Внимательность', type: 'text', placeholder: '50' },
                { id: 'skill_listen', label: 'Слух', type: 'text', placeholder: '40' },
                { id: 'skill_library', label: 'Библиотечное дело', type: 'text', placeholder: '60' },
                { id: 'skill_persuade', label: 'Убеждение', type: 'text', placeholder: '35' },
                { id: 'skill_psychology', label: 'Психология', type: 'text', placeholder: '40' },
                { id: 'skill_stealth', label: 'Скрытность', type: 'text', placeholder: '25' },
                { id: 'skill_firstaid', label: 'Первая помощь', type: 'text', placeholder: '50' },
                { id: 'skill_occult', label: 'Оккультизм', type: 'text', placeholder: '15' },
                { id: 'skill_cthulhu', label: 'Мифы Ктулху', type: 'text', placeholder: '5' },
                { id: 'skill_firearms', label: 'Огнестрельное оружие', type: 'text', placeholder: '25' },
                { id: 'otherSkills', label: 'Прочие навыки', type: 'textarea', placeholder: 'Вождение: 40\nИстория: 65\n...' },
            ]},
            { section: 'Досье', fields: [
                { id: 'background', label: 'Биография', type: 'textarea', placeholder: 'Профессор медиевистики Мискатоникского университета. Впервые столкнулся с паранормальным в 1921 году...' },
                { id: 'ideology', label: 'Убеждения / идеология', type: 'text', placeholder: 'Атеист, рационалист (пока что)' },
                { id: 'significantPeople', label: 'Ключевые связи', type: 'textarea', placeholder: 'Проф. Уилбар Уотли — коллега\nАгент Кроуфорд — куратор из ФБР' },
                { id: 'phobias', label: 'Фобии / мании', type: 'textarea', placeholder: 'Талассофобия (после случая в Инсмуте)' },
            ]},
            { section: 'Оперативная информация', fields: [
                { id: 'incidents', label: 'Зафиксированные инциденты', type: 'textarea', placeholder: '1923 — Дело Данвичского ужаса\n1925 — Рейд на Инсмут\n...' },
                { id: 'injuries', label: 'Травмы и отметки', type: 'textarea', placeholder: 'Шрам на левой руке (укус)\nЧастые кошмары' },
                { id: 'equipment', label: 'Снаряжение', type: 'textarea', placeholder: 'Револьвер .38 Smith & Wesson\nФонарик\nНаучный дневник\nНекрономикон (копия)' },
                { id: 'notes', label: 'Заключение куратора', type: 'textarea', placeholder: 'Субъект демонстрирует признаки посттравматического расстройства. Рекомендуется наблюдение...' },
            ]}
        ];
    },

    renderPreview(data) {
        const stats = ['str','con','siz','dex','app','int','pow','edu'];
        const statNames = ['СИЛ','ТЕЛ','РАЗ','ЛОВ','ВНШ','ИНТ','ВОЛ','ОБР'];

        const statsHtml = stats.map((s, i) => `
            <div class="cthulhu-stat">
                <div class="cthulhu-stat-name">${statNames[i]}</div>
                <div class="cthulhu-stat-value">${data[s] || '50'}</div>
            </div>
        `).join('');

        const skillFields = [
            ['Уклонение', data.skill_dodge],
            ['Внимательность', data.skill_spot],
            ['Слух', data.skill_listen],
            ['Библиотеки', data.skill_library],
            ['Убеждение', data.skill_persuade],
            ['Психология', data.skill_psychology],
            ['Скрытность', data.skill_stealth],
            ['Первая помощь', data.skill_firstaid],
            ['Оккультизм', data.skill_occult],
            ['Мифы Ктулху', data.skill_cthulhu],
            ['Огн. оружие', data.skill_firearms],
        ];

        const skillsHtml = skillFields.map(([name, val]) => `
            <div class="cthulhu-skill">
                <span class="cthulhu-skill-name">${name}</span>
                <span class="cthulhu-skill-value">${val || '—'}</span>
            </div>
        `).join('');

        const page1 = `
            <div class="a4-page cthulhu-page">
                <div class="cthulhu-border"></div>
                <div class="cthulhu-classified">RESTRICTED</div>
                <div class="cthulhu-annotation">Дело №______</div>
                <div class="cthulhu-symbol s1">☽</div>
                <div class="cthulhu-symbol s2">⛧</div>
                <div class="cthulhu-symbol s3">✡</div>
                <div class="cthulhu-stain st1"></div>
                <div class="cthulhu-stain st2"></div>

                <div class="cthulhu-inner">
                    <div class="cthulhu-header">
                        <span class="cthulhu-header-icon">🔮</span>
                        <div class="cthulhu-header-title">Дело</div>
                        <div class="cthulhu-header-subtitle">${data.characterName || 'Имя неизвестно'}</div>
                        <div class="cthulhu-header-org">Мискатоникский университет · Отдел специальных исследований</div>
                        <div class="cthulhu-header-line"></div>
                    </div>

                    <div class="cthulhu-photo-section">
                        <div class="cthulhu-photo">
                            ${data.photo ? `<img src="${data.photo}" alt="Photo">` : 'ФОТО'}
                        </div>
                        <div class="cthulhu-main-info">
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Имя:</span><span class="cthulhu-field-value">${data.characterName || ''}</span></div>
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Профессия:</span><span class="cthulhu-field-value">${data.occupation || ''}</span></div>
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Возраст:</span><span class="cthulhu-field-value">${data.age || ''}</span></div>
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Пол:</span><span class="cthulhu-field-value">${data.gender || ''}</span></div>
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Адрес:</span><span class="cthulhu-field-value">${data.residence || ''}</span></div>
                            <div class="cthulhu-field"><span class="cthulhu-field-label">Родина:</span><span class="cthulhu-field-value">${data.birthplace || ''}</span></div>
                        </div>
                    </div>

                    <div class="cthulhu-section-title">Физические и психические параметры</div>
                    <div class="cthulhu-stats-grid">${statsHtml}</div>

                    <div class="cthulhu-derived-row">
                        <div class="cthulhu-derived-box">
                            <div class="cthulhu-derived-label">Здоровье</div>
                            <div class="cthulhu-derived-value">${data.hp || '10'}</div>
                        </div>
                        <div class="cthulhu-derived-box sanity">
                            <div class="cthulhu-derived-label">Рассудок</div>
                            <div class="cthulhu-derived-value">${data.sanity || '50'}</div>
                        </div>
                        <div class="cthulhu-derived-box">
                            <div class="cthulhu-derived-label">Магия</div>
                            <div class="cthulhu-derived-value">${data.mp || '10'}</div>
                        </div>
                        <div class="cthulhu-derived-box">
                            <div class="cthulhu-derived-label">Удача</div>
                            <div class="cthulhu-derived-value">${data.luck || '50'}</div>
                        </div>
                    </div>

                    <div class="cthulhu-section-title">Профессиональные навыки</div>
                    <div class="cthulhu-skills-grid">${skillsHtml}</div>
                    ${data.otherSkills ? `<div class="cthulhu-text-block" style="margin-top:2mm;font-size:9pt;">${data.otherSkills}</div>` : ''}

                    <div class="cthulhu-section-title">Внешнее описание</div>
                    <div class="cthulhu-text-block">${data.appearance || ''}</div>
                </div>
                <div class="cthulhu-page-number">— 1 —</div>
            </div>
        `;

        const page2 = `
            <div class="a4-page cthulhu-page">
                <div class="cthulhu-border"></div>
                <div class="cthulhu-symbol s1">☽</div>
                <div class="cthulhu-symbol s2">⛧</div>
                <div class="cthulhu-stain st1"></div>

                <div class="cthulhu-inner">
                    <div class="cthulhu-header" style="margin-bottom:3mm;padding-bottom:3mm;">
                        <div class="cthulhu-header-title" style="font-size:14pt;">Дело — продолжение</div>
                        <div class="cthulhu-header-subtitle">${data.characterName || 'Субъект'}</div>
                        <div class="cthulhu-header-line"></div>
                    </div>

                    <div class="cthulhu-section-title">Биография</div>
                    <div class="cthulhu-text-block">${data.background || ''}</div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3mm;">
                        <div>
                            <div class="cthulhu-section-title" style="font-size:9pt;">Убеждения</div>
                            <div class="cthulhu-text-block" style="min-height:8mm;">${data.ideology || ''}</div>
                        </div>
                        <div>
                            <div class="cthulhu-section-title" style="font-size:9pt;">Ключевые связи</div>
                            <div class="cthulhu-text-block" style="min-height:8mm;">${data.significantPeople || ''}</div>
                        </div>
                    </div>

                    <div class="cthulhu-section-title">Фобии и мании</div>
                    <div class="cthulhu-text-block">${data.phobias || ''}</div>

                    <div class="cthulhu-section-title">Зафиксированные инциденты</div>
                    <div class="cthulhu-text-block">${data.incidents || ''}</div>

                    <div class="cthulhu-section-title">Травмы и отметки</div>
                    <div class="cthulhu-text-block">${data.injuries || ''}</div>

                    <div class="cthulhu-section-title">Снаряжение субъекта</div>
                    <div class="cthulhu-text-block">${data.equipment || ''}</div>

                    <div class="cthulhu-section-title">Заключение куратора</div>
                    <div class="cthulhu-text-block">${data.notes || ''}</div>

                    <div class="cthulhu-footer">
                        «Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn»<br>
                        <span style="font-size:7pt;font-style:normal;letter-spacing:0.1em;color:#999;">Мискатоникский университет · Отдел спец. исследований · Аркхэм, Массачусетс</span>
                    </div>
                </div>
                <div class="cthulhu-page-number">— 2 —</div>
            </div>
        `;

        return page1 + page2;
    }
};
