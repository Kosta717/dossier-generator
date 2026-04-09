// Reich Medical Template
const MedReichTemplate = {
    id: 'med_reich',
    name: 'Lazarett-Karte',
    description: 'Медицинская карта раненого бойца Wehrmacht. Готический шрифт, сетка.',
    icon: '⚕️',
    
    getFields() {
        return [
            { section: 'Personalien (Личные данные)', fields: [
                { id: 'lastName', label: 'Name', type: 'text', placeholder: 'Müller' },
                { id: 'firstName', label: 'Vorname', type: 'text', placeholder: 'Hans' },
                { id: 'rank', label: 'Dienstgrad', type: 'text', placeholder: 'Obergefreiter' },
                { id: 'einheit', label: 'Truppenteil', type: 'text', placeholder: 'Infanterie-Regiment 14' },
                { id: 'erkennungsmarke', label: 'Erkennungsmarke (Жетон)', type: 'text', placeholder: 'A-238, 1./I.R. 14' },
                { id: 'photo', label: 'Foto (если применимо)', type: 'photo' }
            ]},
            { section: 'Verwundung (Ранение)', fields: [
                { id: 'datum', label: 'Tag der Verwundung', type: 'text', placeholder: '14. Mai 1943' },
                { id: 'art', label: 'Art der Verletzung', type: 'text', placeholder: 'Granatsplitter (G.S.)' },
                { id: 'lokal', label: 'Körperteil', type: 'text', placeholder: 'Linker Oberschenkel' }
            ]},
            { section: 'Befund und Therapie (Статус и лечение)', fields: [
                { id: 'befund', label: 'Klinischer Befund', type: 'textarea', placeholder: 'Tiefe Splitterverletzung, keine Fraktur.' },
                { id: 'therapie', label: 'Therapie', type: 'textarea', placeholder: 'Wundexzision, Sulfonamide, Ruhigstellung.' },
                { id: 'tetanus', label: 'Tetanus-Injektion', type: 'checkbox' }
            ]},
            { section: 'Verlegung (Эвакуация)', fields: [
                { id: 'verlegung', label: 'Verlegt nach', type: 'text', placeholder: 'Reservelazarett II, Berlin' },
                { id: 'transportfaktor', label: 'Transportfähig', type: 'checkbox' }
            ]},
            { section: 'Optik (Оформление)', fields: [
                { id: 'stampMed', label: 'Штамп госпиталя (Reservelazarett)', type: 'checkbox' },
                { id: 'paperWear', label: 'Износ бумаги', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    renderPreview(data) {
        const page1 = `
            <div class="a4-page med-reich-page ${data.paperWear ? 'mr-effect-wear' : ''}">
                <div class="mr-border-outer">
                    <div class="mr-border-inner">
                        
                        <div class="mr-header">
                            <div class="mr-doc-number">Form. M.L. 34</div>
                            <h1 class="mr-title">Lazarett-Karte</h1>
                            <div class="mr-subtitle">des Deutschen Heeres</div>
                        </div>

                        <div class="mr-main-grid">
                            <div class="mr-photo-col">
                                <div class="mr-photo-box">
                                    ${data.photo ? `<img src="${data.photo}" alt="Foto" class="${data.photo_filter || ''}">` : 'Lichtbild'}
                                </div>
                                ${data.stampMed ? '<div class="mr-stamp">Reservelazarett<br>Berlin-Buch<br>Chefarzt</div>' : ''}
                            </div>
                            
                            <div class="mr-data-col">
                                <table class="mr-table">
                                    <tr>
                                        <td class="mr-label">Name:</td>
                                        <td class="mr-val">${data.lastName || ''}</td>
                                    </tr>
                                    <tr>
                                        <td class="mr-label">Vorname:</td>
                                        <td class="mr-val">${data.firstName || ''}</td>
                                    </tr>
                                    <tr>
                                        <td class="mr-label">Dienstgrad:</td>
                                        <td class="mr-val">${data.rank || ''}</td>
                                    </tr>
                                    <tr>
                                        <td class="mr-label">Truppenteil:</td>
                                        <td class="mr-val">${data.einheit || ''}</td>
                                    </tr>
                                    <tr>
                                        <td class="mr-label">Erkennungsmarke:</td>
                                        <td class="mr-val">${data.erkennungsmarke || ''}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div class="mr-section-divider">I. VERWUNDUNG / ERKRANKUNG</div>
                        <table class="mr-table">
                            <tr>
                                <td class="mr-label" style="width:140px;">Tag:</td>
                                <td class="mr-val">${data.datum || ''}</td>
                            </tr>
                            <tr>
                                <td class="mr-label">Art:</td>
                                <td class="mr-val" style="font-weight:bold;">${data.art || ''}</td>
                            </tr>
                            <tr>
                                <td class="mr-label">Körperteil:</td>
                                <td class="mr-val">${data.lokal || ''}</td>
                            </tr>
                        </table>

                        <div class="mr-section-divider">II. KLINISCHER BEFUND</div>
                        <div class="mr-textarea">
                            ${this._renderParagraphs(data.befund)}
                        </div>

                        <div class="mr-section-divider">III. THERAPIE</div>
                        <div class="mr-textarea">
                            ${this._renderParagraphs(data.therapie)}
                        </div>

                        <div class="mr-grid-2cols" style="margin-top:20px; border-top: 1px solid #000; padding-top: 10px;">
                            <div class="mr-checkbox-group">
                                <div class="mr-check-box ${data.tetanus ? 'checked' : ''}"></div>
                                <span>Tetanus-Schutzimpfung erhalten</span>
                            </div>
                            <div class="mr-checkbox-group">
                                <div class="mr-check-box ${data.transportfaktor ? 'checked' : ''}"></div>
                                <span>Transportfähig</span>
                            </div>
                        </div>

                        <div class="mr-section-divider">IV. VERLEGUNG</div>
                        <div class="mr-row-flex">
                            <span class="mr-label">Verlegt nach:</span>
                            <span class="mr-val" style="flex:1; border-bottom: 1px dotted #000;">${data.verlegung || ''}</span>
                        </div>

                        <div class="mr-footer">
                            <div class="mr-footer-item">
                                <div class="mr-uline"></div>
                                <div class="mr-sublabel">Ort, Datum</div>
                            </div>
                            <div class="mr-footer-item">
                                <div class="mr-uline"></div>
                                <div class="mr-sublabel">Unterschrift des Stabsarztes</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;

        return page1;
    }
};
