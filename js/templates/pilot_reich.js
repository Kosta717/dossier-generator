// Luftwaffe Pilot Personnel File Template (Fliegerpersonalakte)
const PilotReichTemplate = {
    id: 'pilot_reich',
    name: 'Fliegerpersonalakte',
    description: 'Personalakte Flugzeugführer. Личное дело пилота Люфтваффе.',
    icon: '🛩️',

    getFields() {
        return [
            { section: 'Личные данные / Personalien', fields: [
                { id: 'rank', label: 'Dienstgrad / Звание', type: 'select', options: [
                    'Flieger (Рядовой)', 'Gefreiter (Ефрейтор)', 'Unteroffizier (Унтер-офицер)',
                    'Feldwebel (Фельдфебель)', 'Oberfeldwebel (Обер-фельдфебель)',
                    'Leutnant (Лейтенант)', 'Oberleutnant (Обер-лейтенант)',
                    'Hauptmann (Гауптман)', 'Major (Майор)',
                    'Oberstleutnant (Оберст-лейтенант)', 'Oberst (Оберст)'
                ]},
                { id: 'rankCustom', label: 'Dienstgrad (вручную)', type: 'text', placeholder: 'Oberleutnant · Staffelkapitän' },
                { id: 'name', label: 'Name, Vorname / Фамилия, Имя', type: 'text', placeholder: 'HARTMANN, ERICH (ХАРТМАНН, ЭРИХ)' },
                { id: 'birthInfo', label: 'Geburtsdatum und -ort / Дата и место рождения', type: 'text', placeholder: '19. April 1922 · Weissach, Württemberg' },
                { id: 'citizenship', label: 'Staatsangehörigkeit / Гражданство', type: 'text', placeholder: 'Deutsches Reich' },
                { id: 'religion', label: 'Religionsbekenntnis / Вероисповедание', type: 'select', options: [
                    'Evangelisch (Евангелическое)', 'Katholisch (Католическое)',
                    'Gottgläubig (Богопочитатель)', 'Ohne Bekenntnis (Без вероисповедания)'
                ]},
                { id: 'personalNumber', label: 'Erkennungsmarke / Личный номер', type: 'text', placeholder: 'Lw.-Nr. 5748/42 · Blutgruppe A' },
                { id: 'dossierDate', label: 'Datum der Akte / Дата дела', type: 'text', placeholder: '12. Januar 1944' },
                { id: 'photo', label: 'Lichtbild / Фотография', type: 'photo' }
            ]},
            { section: 'Flugausbildung / Лётная подготовка', fields: [
                { id: 'aircraftTypes', label: 'Flugzeugmuster (тип — квалификация)', type: 'textarea', placeholder: 'Bf 109 G — Flugzeugführer\nFw 190 A — Flugzeugführer\nBf 110 — Einweisung' },
                { id: 'totalFlightHours', label: 'Gesamtflugstunden / Общий налёт', type: 'text', placeholder: '1420 Stunden' },
                { id: 'combatFlightHours', label: 'Frontflugstunden / Боевой налёт', type: 'text', placeholder: '890 Stunden' },
                { id: 'nightFlightHours', label: 'Nachtflugstunden / Ночной налёт', type: 'text', placeholder: '165 Stunden' },
                { id: 'pilotLicense', label: 'Flugzeugführerschein / Лётное свидетельство', type: 'select', options: [
                    'A-Schein (Планер)', 'B1-Schein (Одномоторный)',
                    'B2-Schein (Многомоторный)', 'C-Schein (Коммерческий)',
                    'Blindflugschein (Слепой полёт)'
                ]},
                { id: 'specialQualifications', label: 'Sonderqualifikationen / Спецквалификации', type: 'textarea', placeholder: 'Nachtjäger (Ночной истребитель)\nStukaführer (Пилот пикировщика)\nZerstörerführer (Пилот тяж. истребителя)' },
            ]},
            { section: 'Kampfeinsätze / Боевая деятельность', fields: [
                { id: 'sortiesFlown', label: 'Feindflüge / Боевых вылетов', type: 'text', placeholder: '825' },
                { id: 'aerialVictories', label: 'Abschüsse (Datum - Abschuss)', type: 'textarea', placeholder: '05.11.1942 - LaGG-3 (Stalingrad)\n09.01.1943 - IL-2 (Kuban)' },
                { id: 'combatMissions', label: 'Einsätze (Datum - Beschreibung)', type: 'textarea', placeholder: '23.08.1942 - Jagdschutz über Stalingrad\n05.07.1943 - Einsatz Unternehmen Zitadelle' },
                { id: 'crashLandings', label: 'Bruchlandungen / Аварийные посадки', type: 'textarea', placeholder: '20.08.1943 - Notlandung nach Motorschaden' },
                { id: 'bailouts', label: 'Fallschirmabsprünge (Notabsprung)', type: 'textarea', placeholder: '18.09.1943 - Absprung über eigenem Gebiet, Höhe 2500 m' },
            ]},
            { section: 'Körperliche Eignung / Физическая годность', fields: [
                { id: 'fitnessCategory', label: 'Tauglichkeitsstufe / Категория годности', type: 'select', options: [
                    'KV — Kriegsverwendungsfähig (Полностью годен)',
                    'fliegerverwendungsfähig (Годен к лётной службе)',
                    'GV — Garnisonsverwendungsfähig (Годен для гарнизона)',
                    'av — arbeitsverwendungsfähig (Годен к нестроевой)',
                    'uk — unabkömmlich (Незаменимый специалист)',
                    'Fliegertauglich mit Einschränkung (Годен с ограничениями)',
                    'Abgelehnt (Не годен)'
                ]},
                { id: 'fitnessNotes', label: 'Gesundheitsbemerkungen / Примечания по здоровью', type: 'textarea', placeholder: 'Leichte Verwundung rechter Arm, 1943. Folgenlos verheilt.' },
            ]},
            { section: 'Auszeichnungen / Награды', fields: [
                { id: 'awards', label: 'Auszeichnungen (каждая с новой строки)', type: 'textarea', placeholder: 'Eisernes Kreuz 2. Klasse (Железный крест 2-го класса)\nEisernes Kreuz 1. Klasse\nRitterkreuz des Eisernen Kreuzes\nDeutsches Kreuz in Gold' },
            ]},
            { section: 'Beurteilung / Оценка', fields: [
                { id: 'discipline', label: 'Disziplin / Дисциплина', type: 'text', placeholder: 'Einwandfrei. Keine Vergehen.' },
                { id: 'finalVerdict', label: 'Abschließendes Urteil / Итоговое заключение', type: 'textarea', placeholder: 'Hervorragender Jagdflieger. Für Staffelführung geeignet.' },
                { id: 'commanderSignature', label: 'Unterschrift des Geschwaderkommodore', type: 'signature' },
            ]},
            { section: 'Ausgang / Статус', fields: [
                { id: 'outcome', label: 'Status / Исход дела', type: 'select', options: [
                    '— (активен)',
                    'Gefallen (Погиб в бою)',
                    'Vermisst (Пропал без вести)',
                    'Verwundet (Ранен)',
                    'Gestorben an Wunden (Умер от ран)',
                    'Kriegsgefangen (Попал в плен)',
                    'Nicht von Einsatz zurückgekehrt (Не вернулся с задания)',
                    'Desertiert (Дезертировал)',
                    'Entlassen (Демобилизован)',
                ]},
                { id: 'outcomeDate', label: 'Datum / Дата исхода', type: 'text', placeholder: '17. August 1944' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Гриф «GEHEIM / КОНФИДЕНЦИАЛЬНО»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Грязные пятна', type: 'checkbox' },
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
                    return `<tr><td style="width:120px">${emParts[0]}</td><td>${emParts[1] || ''}${emParts[2] || ''}</td></tr>`;
                }
                return `<tr><td colspan="2">${line}</td></tr>`;
            }
            return `<tr><td style="width:120px">${parts[0]}</td><td>${parts[1] || ''}${parts[2] || ''}</td></tr>`;
        }).join('');
    },

    _renderList(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>▪️ ${line.trim()}</p>`).join('');
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    _getOutcomeStamp(outcome) {
        if (!outcome || outcome === '— (активен)') return '';
        const map = {
            'Gefallen (Погиб в бою)':                              { text: 'GEFALLEN', color: '#7a0000' },
            'Vermisst (Пропал без вести)':                         { text: 'VERMISST', color: '#5a4a00' },
            'Verwundet (Ранен)':                                   { text: 'VERWUNDET', color: '#7a3000' },
            'Gestorben an Wunden (Умер от ран)':                   { text: 'GESTORBEN', color: '#7a0000' },
            'Kriegsgefangen (Попал в плен)':                       { text: 'KRIEGSGEF.', color: '#4a3a00' },
            'Nicht von Einsatz zurückgekehrt (Не вернулся с задания)': { text: 'NICHT ZURÜCK', color: '#660000' },
            'Desertiert (Дезертировал)':                           { text: 'DESERTIERT', color: '#500000' },
            'Entlassen (Демобилизован)':                           { text: 'ENTLASSEN', color: '#1a3a1a' },
        };
        const s = map[outcome] || { text: outcome.toUpperCase(), color: '#7a0000' };
        return `<div class="reich-outcome-stamp" style="border-color:${s.color};color:${s.color};">${s.text}</div>`;
    },

    renderPreview(data) {
        const rank = data.rankCustom || data.rank || '';
        const outcomeStamp = this._getOutcomeStamp(data.outcome);

        const page1 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                <div class="watermark">✠</div>
                ${data.coffeeStain ? '<div class="effect-dirt"></div>' : ''}
                ${outcomeStamp}

                <div class="header-polizei">
                    <div class="behoerde">
                        PERSONALAKTE · FLUGZEUGFÜHRER<br>
                        <span>LUFTWAFFE · OBERKOMMANDO DER LUFTWAFFE</span>
                    </div>
                    <div class="stempel-ecke">
                        Aktenzeichen ${Math.floor(Math.random()*9000)+1000}/Lw<br>
                        ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}
                    </div>
                </div>

                ${data.stampSecret ? `
                <div class="geheim-klassifikation">
                    <div class="geheim-box">GEHEIM</div>
                </div>` : ''}

                <div class="aktenzeichen">
                    <span>FLIEGERPERSONALAKTE · ЛЁТНОЕ ЛИЧНОЕ ДЕЛО</span>
                </div>

                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : '<span>FOTO</span><span>4×5 cm</span>'}
                        </div>
                        <div class="foto-unterschrift">
                            (DIENSTSIEGEL)<br>
                            <span style="border-bottom:1px solid #1e1e1e; min-width:80px; display:inline-block; margin-top:2px;"> </span><br>
                            Unterschrift
                        </div>
                    </div>
                    <div class="personalien">
                        <div class="personal-row"><span class="personal-label">Dienstgrad</span><span class="personal-value">${rank}</span></div>
                        <div class="personal-row"><span class="personal-label">Name, Vorname</span><span class="personal-value"><strong>${data.name || ''}</strong></span></div>
                        <div class="personal-row"><span class="personal-label">Geb. / Ort</span><span class="personal-value">${data.birthInfo || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Staatsangeh.</span><span class="personal-value">${data.citizenship || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Religion</span><span class="personal-value">${data.religion || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Erk.-Marke</span><span class="personal-value">${data.personalNumber || ''}</span></div>
                    </div>
                </div>

                <div class="section-head">Flugausbildung und Flugzeugmuster</div>
                <div class="grid-daten">
                    <div class="label">Gesamtflugstunden</div><div class="value"><strong>${data.totalFlightHours || '—'}</strong></div>
                    <div class="label">Frontflugstunden</div><div class="value">${data.combatFlightHours || '—'}</div>
                    <div class="label">Nachtflugstunden</div><div class="value">${data.nightFlightHours || '—'}</div>
                    <div class="label">Führerschein</div><div class="value">${data.pilotLicense || '—'}</div>
                    <div class="label">Feindflüge</div><div class="value"><strong>${data.sortiesFlown || '—'}</strong></div>
                </div>

                <div class="section-head">Flugzeugmuster / Освоенные типы самолётов</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Flugzeugmuster</th><th>Qualifikation</th></tr></thead>
                    <tbody>${this._renderTableRows(data.aircraftTypes)}</tbody>
                </table>

                ${data.specialQualifications ? `
                <div class="section-head">Sonderqualifikationen</div>
                <div class="info-block">${this._renderList(data.specialQualifications)}</div>` : ''}
            </div>
        `;

        const page2 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>

                <div class="section-head" style="margin-top:0;">Abschussliste / Воздушные победы</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Datum</th><th>Abgeschossener Flugzeugtyp</th></tr></thead>
                    <tbody>${this._renderTableRows(data.aerialVictories)}</tbody>
                </table>

                <div class="section-head">Kampfeinsätze / Боевые задания</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Datum</th><th>Beschreibung</th></tr></thead>
                    <tbody>${this._renderTableRows(data.combatMissions)}</tbody>
                </table>

                <div class="section-head">Bruchlandungen und Notabsprünge</div>
                <div class="info-block" style="font-size:10px;">
                    <strong style="font-size:9px;">Bruchlandungen:</strong>
                    ${this._renderParagraphs(data.crashLandings) || '<p>—</p>'}
                    <strong style="font-size:9px; margin-top:6px; display:block;">Notabsprünge:</strong>
                    ${this._renderParagraphs(data.bailouts) || '<p>—</p>'}
                </div>

                <div class="section-head">Körperliche Eignung (Tauglichkeit)</div>
                <div class="grid-daten">
                    <div class="label">Tauglichkeitsstufe</div><div class="value"><strong>${data.fitnessCategory || ''}</strong></div>
                    <div class="label">Gesundheit</div><div class="value">${data.fitnessNotes || '—'}</div>
                </div>

                <div class="section-head">Auszeichnungen / Награды</div>
                <div class="info-block">${this._renderList(data.awards)}</div>
            </div>
        `;

        const page3 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                ${outcomeStamp}

                <div class="section-head" style="margin-top:0;">Beurteilung / Оценка</div>
                <div class="grid-daten">
                    <div class="label">Disziplin</div><div class="value">${data.discipline || ''}</div>
                </div>

                <div class="section-head">Abschließende Beurteilung</div>
                <div class="aktueller-einsatz">
                    ${this._renderParagraphs(data.finalVerdict)}
                </div>

                ${data.outcome && data.outcome !== '— (активен)' ? `
                <div class="section-head">Ausgang / Status</div>
                <div class="grid-daten">
                    <div class="label">Статус</div><div class="value"><strong>${data.outcome}</strong></div>
                    <div class="label">Datum</div><div class="value">${data.outcomeDate || '—'}</div>
                </div>` : ''}

                <div class="unterschrift-bereich">
                    <div class="signatur-links">
                        <span>Der Geschwaderkommodore</span>
                        <div class="linie">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                        </div>
                        <span>Unterschrift / Dienstgrad</span>
                        <div style="margin-top:16px;">${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</div>
                    </div>
                    <div class="rundstempel">
                        <div>LUFTWAFFE<br>OKL<br>✠</div>
                    </div>
                </div>

                <div class="fusszeile">
                    PERSONALAKTE GEHEIM AUFBEWAHREN
                </div>
                <div style="margin-top: 12px; font-size: 10px; opacity: 0.4; display: flex; justify-content: space-between; font-family: var(--font-typewriter), monospace; width: 100%;">
                    <span>MASCHINENSCHRIFT · FLIEGERPERSONALAKTE</span>
                    <span>ABLAGE: ARCHIV</span>
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
