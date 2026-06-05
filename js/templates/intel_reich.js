// Reich Intelligence Agent Dossier Template (Abwehr/SD)
const IntelReichTemplate = {
    id: 'intel_reich',
    name: 'Agentenakte',
    description: 'Personalakte Abwehr/SD. Досье агента немецкой разведки.',
    icon: '🔍',
    
    getFields() {
        return [
            { section: 'Personalien / Личные данные', fields: [
                { id: 'rank', label: 'Dienststellung / Категория', type: 'select', options: [
                    'V-Mann (Доверенное лицо)', 'Agent (Агент)', 'Hauptagent (Главный агент)',
                    'Verbindungsoffizier (Офицер связи)', 'Referent (Референт)',
                    'Gruppenleiter (Руководитель группы)', 'Abteilungsleiter (Начальник отдела)'
                ]},
                { id: 'rankCustom', label: 'Dienststellung (вручную)', type: 'text', placeholder: 'Sonderführer · Abwehr II' },
                { id: 'name', label: 'Name / Фамилия, Имя', type: 'text', placeholder: 'SCHREIBER, OTTO (ШРАЙБЕР, ОТТО)' },
                { id: 'codeName', label: 'Deckname / Оперативный псевдоним', type: 'text', placeholder: '«FALKE»' },
                { id: 'birthInfo', label: 'Geburtsdatum und -ort / Дата и место рожд.', type: 'text', placeholder: '3. Mai 1908 · Hamburg' },
                { id: 'citizenship', label: 'Staatsangehörigkeit / Гражданство', type: 'text', placeholder: 'Deutsches Reich' },
                { id: 'personalNumber', label: 'Aktenzeichen / Регистрационный №', type: 'text', placeholder: 'Abw. II/Ag. Nr. 4718' },
                { id: 'dossierDate', label: 'Datum der Akte / Дата составления', type: 'text', placeholder: '15. Februar 1943' },
                { id: 'photo', label: 'Lichtbild / Фотография', type: 'photo' }
            ]},
            { section: 'Legende / Легенда прикрытия', fields: [
                { id: 'coverIdentity', label: 'Legende (основная легенда)', type: 'textarea', placeholder: 'Kaufmann aus Zürich. Handelsvertreter.\nДокументы на имя Hans Müller, швейцарский торговый представитель.' },
                { id: 'coverDocuments', label: 'Deckdokumente / Документы прикрытия', type: 'textarea', placeholder: 'Schweizer Reisepass Nr. C-482917\nHandelserlaubnis Nr. 03841\nFirmenausweis «Helvetia AG»' },
            ]},
            { section: 'Sprachkenntnisse / Языки', fields: [
                { id: 'languages', label: 'Sprachen (Sprache - Niveau)', type: 'textarea', placeholder: 'Deutsch - Muttersprache\nFranzösisch - Fließend\nRussisch - Grundkenntnisse\nEnglisch - Gut' },
            ]},
            { section: 'Spezialausbildung / Спецподготовка', fields: [
                { id: 'specialTraining', label: 'Ausbildung / Курсы подготовки', type: 'textarea', placeholder: 'Abwehrschule Quenzsee (1940)\nSabotage und Sprengstoffkunde\nFunktechnik und Chiffrierung\nFallschirmspringen\nVerhörtechnik' },
                { id: 'weaponsQualification', label: 'Waffenqualifikation / Оружие', type: 'textarea', placeholder: 'Walther PPK — ausgezeichnet\nMP 40 — gut\nNahkampf — ausgebildet' },
            ]},
            { section: 'Einsätze / Оперативная деятельность', fields: [
                { id: 'operationsRecord', label: 'Einsatzprotokoll (Datum - Einsatz)', type: 'textarea', placeholder: 'März 1941 - Aufklärung Balkan, Unternehmen MARITA\nJan 1943 - Agenteneinschleusung Ostfront, Raum Stalingrad' },
                { id: 'agentNetwork', label: 'Agentennetz / Агентурная сеть', type: 'textarea', placeholder: 'Agent «DISTEL» — Informant, Moskau\nAgent «EICHE» — Kurier, Stockholm\nAgent «WOLF» — Funker, hinter feindlichen Linien' },
                { id: 'handler', label: 'Führungsoffizier / Куратор', type: 'text', placeholder: 'Oberstleutnant von Seidlitz, Abwehr II' },
                { id: 'reliabilityAssessment', label: 'Zuverlässigkeitsbewertung / Надёжность', type: 'select', options: [
                    'Absolut zuverlässig (Абсолютно надёжен)',
                    'Zuverlässig (Надёжен)',
                    'Bedingt zuverlässig (Условно надёжен)',
                    'Unter Beobachtung (Под наблюдением)',
                    'Enttarnt (Разоблачён)',
                ]},
            ]},
            { section: 'Auszeichnungen / Награды', fields: [
                { id: 'awards', label: 'Auszeichnungen (каждая с новой строки)', type: 'textarea', placeholder: 'Kriegsverdienstkreuz 2. Klasse mit Schwertern\nOstmedaille\nVerwundetenabzeichen in Schwarz' },
            ]},
            { section: 'Beurteilung / Оценка', fields: [
                { id: 'discipline', label: 'Disziplin / Дисциплина', type: 'text', placeholder: 'Einwandfrei. Keine Beanstandungen.' },
                { id: 'finalVerdict', label: 'Abschließende Beurteilung / Заключение', type: 'textarea', placeholder: 'Agent von höchstem Wert. Für Einsätze hinter feindlichen Linien uneingeschränkt geeignet. Absolute Verschwiegenheit nachgewiesen.' },
                { id: 'commanderSignature', label: 'Unterschrift / Подпись начальника', type: 'signature' },
            ]},
            { section: 'Ausgang / Исход', fields: [
                { id: 'outcome', label: 'Status / Статус', type: 'select', options: [
                    '— (aktiv / активен)',
                    'Gefallen (Погиб)',
                    'Vermisst (Пропал без вести)',
                    'Verhaftet (Арестован)',
                    'Enttarnt (Раскрыт)',
                    'Umgedreht (Перевербован)',
                    'Liquidiert (Ликвидирован)',
                ]},
                { id: 'outcomeDate', label: 'Datum / Дата исхода', type: 'text', placeholder: '17. August 1943' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Гриф «GEHEIME KOMMANDOSACHE»', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Грязные пятна', type: 'checkbox' },
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
        if (!outcome || outcome === '— (aktiv / активен)') return '';
        const map = {
            'Gefallen (Погиб)':             { text: 'GEFALLEN', color: '#7a0000' },
            'Vermisst (Пропал без вести)':  { text: 'VERMISST', color: '#5a4a00' },
            'Verhaftet (Арестован)':         { text: 'VERHAFTET', color: '#300050' },
            'Enttarnt (Раскрыт)':           { text: 'ENTTARNT', color: '#7a3000' },
            'Umgedreht (Перевербован)':     { text: 'UMGEDREHT', color: '#500000' },
            'Liquidiert (Ликвидирован)':    { text: 'LIQUIDIERT', color: '#4a0000' },
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
                <div class="watermark">⚡⚡</div>
                ${data.coffeeStain ? '<div class="effect-dirt"></div>' : ''}
                ${outcomeStamp}
            
                <div class="header-polizei">
                    <div class="behoerde">
                        AGENTENAKTE<br>
                        <span>ABWEHR / SD · GEHEIME KOMMANDOSACHE</span>
                    </div>
                    <div class="stempel-ecke">
                        Вх. № ${Math.floor(Math.random()*9000)+1000}/Ag<br>
                        ${data.dossierDate || new Date().toLocaleDateString('de-DE')}
                    </div>
                </div>
            
                ${data.stampSecret ? `
                <div class="geheim-klassifikation">
                    <div class="geheim-box">GEHEIME KOMMANDOSACHE</div>
                </div>` : ''}
            
                <div class="aktenzeichen">
                    <span>Aktz. ${Math.floor(Math.random()*900)+100}-Ag · PERSONALAKTE DES AGENTEN</span>
                    ${data.personalNumber ? `<span>${data.personalNumber}</span>` : ''}
                </div>
            
                <div class="foto-row">
                    <div class="foto-container">
                        <div class="foto-inner">
                            ${data.photo ? `<img src="${data.photo}" alt="Фото" class="${data.photo_filter || ''}">` : '<span>FOTO</span><span>4×5 cm</span>'}
                        </div>
                        <div class="foto-unterschrift">
                            (STEMPEL)<br>
                            <span style="border-bottom:1px solid #1e1e1e; min-width:80px; display:inline-block; margin-top:2px;"> </span><br>
                            Unterschrift
                        </div>
                    </div>
                    <div class="personalien">
                        <div class="personal-row"><span class="personal-label">Dienststellung</span><span class="personal-value">${rank}</span></div>
                        <div class="personal-row"><span class="personal-label">Name</span><span class="personal-value"><strong>${data.name || ''}</strong></span></div>
                        <div class="personal-row"><span class="personal-label">Deckname</span><span class="personal-value"><strong>${data.codeName || ''}</strong></span></div>
                        <div class="personal-row"><span class="personal-label">Geb. / Ort</span><span class="personal-value">${data.birthInfo || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Staatsangeh.</span><span class="personal-value">${data.citizenship || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Führungsoffiz.</span><span class="personal-value">${data.handler || ''}</span></div>
                        <div class="personal-row"><span class="personal-label">Zuverlässigkeit</span><span class="personal-value"><strong>${data.reliabilityAssessment || ''}</strong></span></div>
                    </div>
                </div>
            
                <div class="section-head">Legende (Deckidentität)</div>
                <div class="info-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.coverIdentity) || '<p>—</p>'}
                </div>

                <div class="section-head">Deckdokumente</div>
                <div class="info-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.coverDocuments) || '<p>—</p>'}
                </div>

                <div class="section-head">Sprachkenntnisse</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Sprache</th><th>Niveau</th></tr></thead>
                    <tbody>${this._renderTableRows(data.languages)}</tbody>
                </table>
            </div>
        `;

        const page2 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>

                <div class="section-head" style="margin-top:0;">Spezialausbildung</div>
                <div class="info-block">
                    ${this._renderList(data.specialTraining) || '<p>—</p>'}
                </div>

                <div class="section-head">Waffenqualifikation</div>
                <div class="info-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.weaponsQualification) || '<p>—</p>'}
                </div>
            
                <div class="section-head">Einsatzprotokoll</div>
                <table class="dienst-tabelle">
                    <thead><tr><th>Datum</th><th>Einsatz / Operation</th></tr></thead>
                    <tbody>${this._renderTableRows(data.operationsRecord)}</tbody>
                </table>
            
                <div class="section-head">Agentennetz</div>
                <div class="info-block" style="font-size:10px;">
                    ${this._renderParagraphs(data.agentNetwork) || '<p>—</p>'}
                </div>

                <div class="section-head">Auszeichnungen</div>
                <div class="info-block">${this._renderList(data.awards)}</div>
            
                <div class="section-head">Disziplin</div>
                <div class="grid-daten">
                    <div class="label">Дисциплина</div><div class="value">${data.discipline || '—'}</div>
                </div>
            </div>
        `;

        const page3 = `
            <div class="a4-page reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="klammer-deco"></div>
                <div class="klammer-deco-2"></div>
                ${outcomeStamp}

                <div class="section-head" style="margin-top:0;">Abschließende Beurteilung</div>
                <div class="aktueller-einsatz">
                    ${this._renderParagraphs(data.finalVerdict)}
                </div>
            
                ${data.outcome && data.outcome !== '— (aktiv / активен)' ? `
                <div class="section-head">Ausgang / Status</div>
                <div class="grid-daten">
                    <div class="label">Status</div><div class="value"><strong>${data.outcome}</strong></div>
                    <div class="label">Datum</div><div class="value">${data.outcomeDate || '—'}</div>
                </div>` : ''}

                <div class="unterschrift-bereich">
                    <div class="signatur-links">
                        <span>Mit dem Original gleichlautend</span>
                        <div class="linie">
                            ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image" alt="Подпись">` : ''}
                        </div>
                        <span>Leiter der Abteilung</span>
                        <div style="margin-top:16px;">Berlin, ${data.dossierDate || new Date().toLocaleDateString('de-DE')}</div>
                    </div>
                    <div class="rundstempel">
                        <div>ABWEHR<br>AMT AUSL.<br>✶</div>
                    </div>
                </div>
            
                <div class="fusszeile">
                    GEHEIME KOMMANDOSACHE · NUR FÜR DEN DIENSTGEBRAUCH
                </div>
                <div style="margin-top: 12px; font-size: 10px; opacity: 0.4; display: flex; justify-content: space-between; font-family: var(--font-typewriter), monospace; width: 100%;">
                    <span>MASCHINENSCHRIFT · REF. ABW. II</span>
                    <span>KOPIE AN ARCHIV</span>
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
