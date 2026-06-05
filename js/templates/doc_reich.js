// Reich Military Doctor (Sanitätsoffizier) Dossier Template
const DocReichTemplate = {
    id: 'doc_reich',
    name: 'Personalakte Arzt',
    description: 'Personalakte Sanitätsoffizier. Личное дело военного врача Вермахта.',
    icon: '⚕️',
    
    getFields() {
        return [
            { section: 'Личные данные / Personalien', fields: [
                { id: 'rank', label: 'Dienstgrad / Звание', type: 'select', options: [
                    'Unterarzt (Унтер-арцт)',
                    'Assistenzarzt (Ассистенцарцт)',
                    'Oberarzt (Обер-арцт)',
                    'Stabsarzt (Штабс-арцт)',
                    'Oberstabsarzt (Обер-штабс-арцт)',
                    'Oberfeldarzt (Обер-фельд-арцт)',
                    'Generalarzt (Генерал-арцт)',
                    'Generaloberstabsarzt (Генерал-обер-штабс-арцт)'
                ]},
                { id: 'rankCustom', label: 'Звание (вручную)', type: 'text', placeholder: 'Oberstabsarzt d. Res.' },
                { id: 'name', label: 'Фамилия, Имя / Name', type: 'text', placeholder: 'FISCHER, KARL (ФИШЕР, КАРЛ)' },
                { id: 'birthInfo', label: 'Дата и место рождения', type: 'text', placeholder: '3. Mai 1904 · Мюнхен, Бавария' },
                { id: 'citizenship', label: 'Гражданство / Staatsangehörigkeit', type: 'text', placeholder: 'Германский рейх · Арийское происхождение' },
                { id: 'religion', label: 'Вероисповедание / Bekenntnis', type: 'select', options: [
                    'Evangelisch (Евангелическое)', 'Katholisch (Католическое)',
                    'Gottgläubig (Богопочитатель / без конфессии)', 'Ohne Bekenntnis (Без вероисповедания)'
                ]},
                { id: 'personalNumber', label: 'Личный номер / Kennziffer', type: 'text', placeholder: 'San.-Nr. 7841/39 · Blutgruppe A (II)' },
                { id: 'dossierDate', label: 'Дата составления дела', type: 'text', placeholder: '15. Februar 1943' },
                { id: 'photo', label: 'Фотография / Lichtbild', type: 'photo' }
            ]},
            { section: 'Медицинская квалификация / Ärztliche Qualifikation', fields: [
                { id: 'medSpecialty', label: 'Fachgebiet / Специальность', type: 'select', options: [
                    'Chirurgie (Хирургия)',
                    'Innere Medizin (Внутренняя медицина)',
                    'Seuchenhygiene (Эпидемиология)',
                    'Neurologie (Неврология)',
                    'Zahnheilkunde (Стоматология)',
                    'Augenheilkunde (Офтальмология)'
                ]},
                { id: 'medEducation', label: 'Medizinstudium / Мед. образование', type: 'textarea', placeholder: 'Universität München, Medizinische Fakultät, 1928\nCharité Berlin, Facharztausbildung Chirurgie, 1932' },
                { id: 'medLicense', label: 'Approbation / Врачебная лицензия', type: 'text', placeholder: 'Approbation erteilt am 15. Juni 1929, München' },
                { id: 'medDegree', label: 'Akademischer Grad / Учёная степень', type: 'text', placeholder: 'Dr. med., Universität München, 1930' },
            ]},
            { section: 'Госпитальные назначения / Lazaretteinsätze', fields: [
                { id: 'hospitalAssignments', label: 'Назначения (Период - Госпиталь / Должность)', type: 'textarea', placeholder: '1939-1940 - Feldlazarett 112, Chirurg\n1941-1942 - Kriegslazarett 2/607, Chefarzt\n1943 - Res. Lazarett Warschau, Leitender Arzt' },
                { id: 'researchNotes', label: 'Forschungsnotizen / Исследования', type: 'textarea', placeholder: 'Untersuchungen zur Wundversorgung unter Feldbedingungen\nBericht über Sulfonamid-Anwendung bei Gasbrand' },
            ]},
            { section: 'Физическая пригодность / Tauglichkeit', fields: [
                { id: 'fitnessCategory', label: 'Категория годности', type: 'select', options: [
                    'KV — Kriegsverwendungsfähig (Полностью годен)',
                    'GV — Garnisonsverwendungsfähig (Годен для гарнизона)',
                    'av — arbeitsverwendungsfähig (Годен к нестроевой службе)',
                    'uk — unabkömmlich (Незаменимый специалист)',
                    'wv — wehrwürdig (Достоин военной службы)',
                    'av H — Не годен к строевой',
                    'Abgelehnt (Не годен)'
                ]},
                { id: 'fitnessNotes', label: 'Примечания по здоровью', type: 'textarea', placeholder: 'Gesund. Keine Einschränkungen.' },
            ]},
            { section: 'Награды / Auszeichnungen', fields: [
                { id: 'awards', label: 'Награды (каждая с новой строки)', type: 'textarea', placeholder: 'Kriegsverdienstkreuz 2. Klasse mit Schwertern (Крест за военные заслуги)\nOstmedaille (Медаль «За зимнюю кампанию»)\nVerwundetenabzeichen in Schwarz (Знак за ранение)' },
            ]},
            { section: 'Оценка / Beurteilung', fields: [
                { id: 'discipline', label: 'Дисциплина / Disziplin', type: 'text', placeholder: 'Disziplinarisch einwandfrei (Без взысканий)' },
                { id: 'finalVerdict', label: 'Итоговое заключение / Abschließende Beurteilung', type: 'textarea', placeholder: 'Hervorragender Chirurg mit großer Erfahrung in der Feldchirurgie. Für die Leitung eines Kriegslazaretts uneingeschränkt geeignet.' },
                { id: 'commanderSignature', label: 'Подпись / Unterschrift', type: 'signature' },
            ]},
            { section: 'Исход / Статус', fields: [
                { id: 'outcome', label: 'Статус / Исход дела', type: 'select', options: [
                    '— (активен)',
                    'Gefallen (Погиб в бою)',
                    'Vermisst (Пропал без вести)',
                    'Verwundet (Ранен)',
                    'Gestorben an Wunden (Умер от ран)',
                    'Kriegsgefangen (Попал в плен)',
                    'Desertiert (Дезертировал)',
                    'Entlassen (Демобилизован)',
                    'Verhaftet (Арестован)',
                ]},
                { id: 'outcomeDate', label: 'Дата исхода', type: 'text', placeholder: '8. Mai 1945' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Гриф «КОНФИДЕНЦИАЛЬНО»', type: 'checkbox' },
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
            'Gefallen (Погиб в бою)':            { text: 'GEFALLEN', color: '#7a0000' },
            'Vermisst (Пропал без вести)':        { text: 'VERMISST', color: '#5a4a00' },
            'Verwundet (Ранен)':                  { text: 'VERWUNDET', color: '#7a3000' },
            'Gestorben an Wunden (Умер от ран)':  { text: 'GESTORBEN', color: '#7a0000' },
            'Kriegsgefangen (Попал в плен)':      { text: 'KRIEGSGEF.', color: '#4a3a00' },
            'Desertiert (Дезертировал)':           { text: 'DESERTIERT', color: '#500000' },
            'Entlassen (Демобилизован)':          { text: 'ENTLASSEN', color: '#1a3a1a' },
            'Verhaftet (Арестован)':              { text: 'VERHAFTET', color: '#300050' },
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
                <div class="watermark">✚</div>
                ${data.coffeeStain ? '<div class="effect-dirt"></div>' : ''}
                ${outcomeStamp}
            
                <div class="header-polizei">
                    <div class="behoerde">
                        PERSONALAKTE · SANITÄTSOFFIZIER<br>
                        <span>HEERESSANITÄTSINSPEKTION · OBERKOMMANDO DES HEERES</span>
                    </div>
                    <div class="stempel-ecke">
                        ВХ. № ${Math.floor(Math.random()*9000)+1000}/San<br>
                        ${data.dossierDate || new Date().toLocaleDateString('ru-RU')}
                    </div>
                </div>
            
                ${data.stampSecret ? `
                <div class="geheim-klassifikation">
                    <div class="geheim-box">VERTRAULICH · КОНФИДЕНЦИАЛЬНО</div>
                </div>` : ''}
            
                <div class="aktenzeichen">
                    <span>San.-Pers.Akte Nr. ${Math.floor(Math.random()*900)+100}-S · ÄRZTLICHE PERSONALAKTE</span>
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
                        <div class="personal-row"><span class="personal-label">Dienstgrad</span><span class="personal-value">${rank}</span></div>
                        <div class="personal-row"><span class="personal-label">Name, Vorname</span><span class="personal-value"><strong>${data.name || ''}</strong></span></div>
                        <div class="personal-row"><span class="personal-label">Geb. Datum / Ort</span><span class="personal-value">${data.birthInfo || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Staatsangehörigk.</span><span class="personal-value">${data.citizenship || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Bekenntnis</span><span class="personal-value">${data.religion || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Kennziffer</span><span class="personal-value">${data.personalNumber || ''}</span></div>
                    </div>
                </div>
            
                <div class="section-head">Ärztliche Qualifikation (Медицинская квалификация)</div>
                <div class="grid-daten">
                    <div class="label">Fachgebiet</div><div class="value"><strong>${data.medSpecialty || ''}</strong></div>
                    <div class="label">Approbation</div><div class="value">${data.medLicense || ''}</div>
                    <div class="label">Akad. Grad</div><div class="value">${data.medDegree || ''}</div>
                </div>

                <div class="section-head">Medizinstudium (Медицинское образование)</div>
                <div class="info-block">
                    ${this._renderParagraphs(data.medEducation) || '<p>—</p>'}
                </div>

                <div class="section-head">Lazaretteinsätze (Госпитальные назначения)</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Период</th><th>Госпиталь / Должность</th></tr></thead>
                    <tbody>${this._renderTableRows(data.hospitalAssignments)}</tbody>
                </table>
            </div>
        `;

        const page2 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                ${data.coffeeStain ? '<div class="effect-dirt" style="top:60%;left:15%;"></div>' : ''}

                <div class="section-head" style="margin-top:0;">Forschung und Veröffentlichungen (Исследования)</div>
                <div class="info-block">
                    ${this._renderParagraphs(data.researchNotes) || '<p>—</p>'}
                </div>

                <div class="section-head">Körperliche Eignung (Tauglichkeit)</div>
                <div class="grid-daten">
                    <div class="label">Категория годности</div><div class="value"><strong>${data.fitnessCategory || ''}</strong></div>
                    <div class="label">Примечания</div><div class="value">${data.fitnessNotes || '—'}</div>
                </div>
            
                <div class="section-head">Auszeichnungen (Награды)</div>
                <div class="info-block">${this._renderList(data.awards) || '<p>—</p>'}</div>
            
                <div class="section-head">Beurteilung & Hinweise (Оценка)</div>
                <div class="grid-daten">
                    <div class="label">Дисциплина</div><div class="value">${data.discipline || ''}</div>
                </div>

                ${outcomeStamp}

                <div class="section-head">Abschließende Beurteilung (Итоговое заключение)</div>
                <div class="aktueller-einsatz">
                    ${this._renderParagraphs(data.finalVerdict)}
                </div>
            
                ${data.outcome && data.outcome !== '— (активен)' ? `
                <div class="section-head">Ausgang / Status</div>
                <div class="grid-daten">
                    <div class="label">Статус</div><div class="value"><strong>${data.outcome}</strong></div>
                    <div class="label">Дата</div><div class="value">${data.outcomeDate || '—'}</div>
                </div>` : ''}

                <div class="unterschrift-bereich">
                    <div class="signatur-links">
                        <span>Der Heeressanitätsinspekteur</span>
                        <div class="linie">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                        </div>
                        <span>Leiter Sanitätswesen</span>
                        <div style="margin-top:16px;">${data.dossierDate || new Date().toLocaleDateString('ru-RU')}</div>
                    </div>
                    <div class="rundstempel">
                        <div>SAN.INSP.<br>O.K.H.<br>✦</div>
                    </div>
                </div>
            
                <div class="fusszeile">
                    PERSONALAKTE VERTRAULICH AUFBEWAHREN
                </div>
                <div style="margin-top: 12px; font-size: 10px; opacity: 0.4; display: flex; justify-content: space-between; font-family: var(--font-typewriter), monospace; width: 100%;">
                    <span>MASCHINENSCHRIFT · SAN.ABT.</span>
                    <span>KOPIE AN ARCHIV</span>
                </div>
            </div>
        `;

        let result = page1 + page2;
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
