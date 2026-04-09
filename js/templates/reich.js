// Reich Soldier Dossier Template (Detailed 1940s Kripo/SS style)
const ReichTemplate = {
    id: 'reich',
    name: 'Личное дело',
    description: 'Personalakte Kripo/SS. Максимально реалистичный стиль Германии 40-х годов.',
    icon: '🦅',
    
    getFields() {
        return [
            { section: 'Личные данные', fields: [
                { id: 'rank', label: 'Звание / Должность', type: 'text', placeholder: 'Штурмбаннфюрер СС · Руководитель...' },
                { id: 'name', label: 'Фамилия, Имя', type: 'text', placeholder: 'КАЙЗЕР, КЛЕМЕНС (KAISER, CLEMENS)' },
                { id: 'birthInfo', label: 'Дата и место рождения', type: 'text', placeholder: '12 июня 1915 (32 года) · Берлин' },
                { id: 'citizenship', label: 'Гражданство', type: 'text', placeholder: 'Германский рейх · Арийское происхождение' },
                { id: 'personalNumber', label: 'Личный номер / Группа крови', type: 'text', placeholder: 'SS-№ 312 774 · Группа крови A (II)' },
                { id: 'photo', label: 'Фотография', type: 'photo' }
            ]},
            { section: 'Внешние приметы', fields: [
                { id: 'build', label: 'Рост / Телосложение', type: 'text', placeholder: '179 см · Атлетическое' },
                { id: 'hair', label: 'Волосы', type: 'text', placeholder: 'Тёмно-русые' },
                { id: 'eyes', label: 'Глаза', type: 'text', placeholder: 'Серо-голубые' },
                { id: 'marks', label: 'Особые приметы', type: 'textarea', placeholder: 'Шрамов нет. Татуировка группы крови...' },
            ]},
            { section: 'Семья и происхождение', fields: [
                { id: 'maritalStatus', label: 'Семейное положение', type: 'text', placeholder: 'Холост' },
                { id: 'address', label: 'Место жительства', type: 'text', placeholder: 'Берлин-Целендорф, Фиштальштрассе 7' },
                { id: 'father', label: 'Отец', type: 'text', placeholder: 'Генрих Кайзер († 1938)' },
                { id: 'mother', label: 'Мать', type: 'text', placeholder: 'Маргарете Кайзер' },
                { id: 'siblings', label: 'Братья / сёстры', type: 'text', placeholder: 'Нет' },
            ]},
            { section: 'Служебный путь (Таблицы)', fields: [
                { id: 'politicalRecord', label: 'Политическое становление (Период - Событие)', type: 'textarea', placeholder: '1933 - Вступление в НСДАП\n1934 - Вступление в СС\nРазделяйте период и событие дефисом или тире' },
                { id: 'militaryRecord', label: 'Военная служба (Период - Должность)', type: 'textarea', placeholder: '1939–1941 - Командир взвода\n1941–1943 - Командир роты' },
                { id: 'specialService', label: 'Специальная служба / Командировки', type: 'textarea', placeholder: '25.01.1947 - Включён в следственную группу' },
            ]},
            { section: 'Образование и навыки', fields: [
                { id: 'education', label: 'Образование', type: 'textarea', placeholder: 'Юнкерское училище СС (с отличием)' },
                { id: 'intellect', label: 'Интеллект', type: 'textarea', placeholder: 'Аналитический склад ума...' },
                { id: 'languages', label: 'Языки', type: 'text', placeholder: 'Немецкий, Русский (базовый)' },
                { id: 'training', label: 'Военная подготовка', type: 'textarea', placeholder: 'Тактика пехоты...' },
                { id: 'otherSkills', label: 'Прочее', type: 'textarea', placeholder: 'Опыт управления лагерем...' },
            ]},
            { section: 'Награды', fields: [
                { id: 'awards', label: 'Награды (каждая с новой строки)', type: 'textarea', placeholder: 'Железный крест 2-го класса\nЖелезный крест 1-го класса...' },
            ]},
            { section: 'Оценка', fields: [
                { id: 'discipline', label: 'Дисциплина', type: 'text', placeholder: 'Взысканий нет' },
                { id: 'fitness', label: 'Годность', type: 'text', placeholder: 'Полностью годен к службе' },
                { id: 'notes', label: 'Особые отметки', type: 'textarea', placeholder: 'Проявил настойчивость...' },
                { id: 'finalVerdict', label: 'Итоговое заключение', type: 'textarea', placeholder: 'Пригоден к руководству. Возражений не имеется.' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Гриф «КОНФИДЕНЦИАЛЬНО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Грязные пятна', type: 'checkbox' }
            ]},
            { section: 'Дополнительно', fields: [
                { id: 'extraNotes', label: 'Дополнительные записи (Новый лист)', type: 'textarea', placeholder: 'Любая информация...' }
            ]}
        ];
    },

    // Helper to generate rows for textarea inputs using dash/em-dash as separator
    _renderTableRows(text) {
        if (!text) return '<tr><td>—</td><td>—</td></tr>';
        return text.split('\n').filter(l => l.trim()).map(line => {
            const parts = line.split(/-(.+)/).map(s => s.trim()); // Split by first dash only
            if (parts.length < 2) {
                // Try splitting by em dash if plain dash isn't found
                const emParts = line.split(/—(.+)/).map(s => s.trim());
                if (emParts.length >= 2) {
                    return `<tr><td style="width:120px">${emParts[0]}</td><td>${emParts[1] || ''}${emParts[2] || ''}</td></tr>`;
                }
                return `<tr><td colspan="2">${line}</td></tr>`;
            }
            return `<tr><td style="width:120px">${parts[0]}</td><td>${parts[1] || ''}${parts[2] || ''}</td></tr>`;
        }).join('');
    },

    // Helper for bullet point lists
    _renderList(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>▪️ ${line.trim()}</p>`).join('');
    },

    // Helper for normal text wrapping
    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    renderPreview(data) {
        const page1 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                <div class="watermark">⚡⚡</div>
                ${data.coffeeStain ? '<div class="effect-dirt"></div>' : ''}
            
                <div class="header-polizei">
                    <div class="behoerde">
                        ПОЛИЦАЙ-ПРЕЗИДЕНТ БЕРЛИНА<br>
                        <span>КРИМИНАЛЬНАЯ ПОЛИЦИЯ · ОТДЕЛ V (ТЯЖКИЕ ПРЕСТУПЛЕНИЯ)</span>
                    </div>
                    <div class="stempel-ecke">
                        ВХ. № ${Math.floor(Math.random()*9000)+1000}/47<br>
                        ${new Date().toLocaleDateString('ru-RU')}
                    </div>
                </div>
            
                ${data.stampSecret ? `
                <div class="geheim-klassifikation">
                    <div class="geheim-box">КОНФИДЕНЦИАЛЬНО</div>
                </div>` : ''}
            
                <div class="aktenzeichen">
                    <span>РЕГ. № ${Math.floor(Math.random()*900)+100}-A · ЛИЧНАЯ УЧЁТНАЯ КАРТОЧКА</span>
                </div>
            
                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : '<span>ФОТО</span><span>4×5 см</span>'}
                        </div>
                        <div class="foto-unterschrift">
                            (ПЕЧАТЬ)<br>
                            <span style="border-bottom:1px solid #1e1e1e; min-width:80px; display:inline-block; margin-top:2px;"> </span><br>
                            подпись
                        </div>
                    </div>
                    <div class="personalien">
                        <div class="personal-row"><span class="personal-label">Звание</span><span class="personal-value">${data.rank || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Фамилия, имя</span><span class="personal-value"><strong>${data.name || ''}</strong></span></div>
                        <div class="personal-row"><span class="personal-label">Родился / место</span><span class="personal-value">${data.birthInfo || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Гражданство</span><span class="personal-value">${data.citizenship || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Личный номер</span><span class="personal-value">${data.personalNumber || ''}</span></div>
                    </div>
                </div>
            
                <div class="section-head">Äußere Merkmale</div>
                <div class="grid-daten">
                    <div class="label">Рост/Телослож.</div><div class="value">${data.build || ''}</div>
                    <div class="label">Волосы</div><div class="value">${data.hair || ''}</div>
                    <div class="label">Глаза</div><div class="value">${data.eyes || ''}</div>
                    <div class="label">Особые приметы</div><div class="value">${data.marks || ''}</div>
                </div>
            
                <div class="section-head">Familienstand & Herkunft</div>
                <div class="grid-daten">
                    <div class="label">Семейное положение</div><div class="value">${data.maritalStatus || ''}</div>
                    <div class="label">Место жительства</div><div class="value">${data.address || ''}</div>
                    <div class="label">Отец</div><div class="value">${data.father || ''}</div>
                    <div class="label">Мать</div><div class="value">${data.mother || ''}</div>
                    <div class="label">Братья / сёстры</div><div class="value">${data.siblings || ''}</div>
                </div>

                <div class="section-head">Politischer Werdegang</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Период</th><th>Событие</th></tr></thead>
                    <tbody>${this._renderTableRows(data.politicalRecord)}</tbody>
                </table>
            </div>
        `;

        const page2 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                <div class="section-head" style="margin-top:0;">Militärischer Werdegang</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Период</th><th>Должность / Часть</th></tr></thead>
                    <tbody>${this._renderTableRows(data.militaryRecord)}</tbody>
                </table>
            
                <div class="section-head">Ausbildung & Fähigkeiten</div>
                <div class="grid-daten">
                    <div class="label">Образование</div><div class="value">${data.education || ''}</div>
                    <div class="label">Интеллект</div><div class="value">${data.intellect || ''}</div>
                    <div class="label">Языки</div><div class="value">${data.languages || ''}</div>
                    <div class="label">Военная подготовка</div><div class="value">${data.training || ''}</div>
                    <div class="label">Прочее</div><div class="value">${data.otherSkills || ''}</div>
                </div>
            
                <div class="section-head">Sonderbereich / Dienst</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Дата</th><th>Событие</th></tr></thead>
                    <tbody>${this._renderTableRows(data.specialService)}</tbody>
                </table>
            
                <div class="section-head">Auszeichnungen</div>
                <div class="info-block">${this._renderList(data.awards)}</div>
            
                <div class="section-head">Beurteilung & Hinweise</div>
                <div class="grid-daten">
                    <div class="label">Дисциплина</div><div class="value">${data.discipline || ''}</div>
                    <div class="label">Годность</div><div class="value">${data.fitness || ''}</div>
                    <div class="label">Особые отметки</div><div class="value">${data.notes || ''}</div>
                </div>
            </div>
        `;

        const page3 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                <div class="section-head" style="margin-top:0;">Abschließende Beurteilung</div>
                <div class="aktueller-einsatz">
                    ${this._renderParagraphs(data.finalVerdict)}
                </div>
            
                <div class="unterschrift-bereich">
                    <div class="signatur-links">
                        <span>С подлинным верно</span>
                        <div class="linie"></div>
                        <span>Начальник отдела кадров</span>
                        <div style="margin-top:16px;">Берлин, ${new Date().toLocaleDateString('ru-RU')}</div>
                    </div>
                    <div class="rundstempel">
                        <div>СПЕЦКОМИС.<br>ОТДЕЛ V<br>✶</div>
                    </div>
                </div>
            
                <div class="fusszeile">
                    ДЕЛО ХРАНИТЬ КОНФИДЕНЦИАЛЬНО
                </div>
                <div style="margin-top: 12px; font-size: 10px; opacity: 0.4; display: flex; justify-content: space-between; font-family: var(--font-typewriter), monospace; width: 100%;">
                    <span>МАШИНОПИСЬ · РЕФ. II B</span>
                    <span>КОПИЯ В АРХИВ</span>
                </div>
            </div>
        `;

        let result = page1 + page2 + page3;
        if (data.extraNotes && data.extraNotes.trim()) {
            result += `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                <div class="section-head" style="margin-top:20px;">Anhang: Zusätzliche Hinweise</div>
                <div class="aktueller-einsatz" style="flex:1; margin-top:20px;">
                    ${this._renderParagraphs(data.extraNotes)}
                </div>
            </div>`;
        }

        return result;
    }
};
