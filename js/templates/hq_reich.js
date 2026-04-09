// HQ Reich Template
const HqReichTemplate = {
    id: 'hq_reich',
    name: 'OKW-Befehl',
    description: 'Официальный приказ Верховного Главнокомандования (OKW). Готика и гриф секретности.',
    icon: '🦅',
    
    getFields() {
        return [
            { section: 'Kopf (Шапка документа)', fields: [
                { id: 'dienststelle', label: 'Dienststelle (Организация)', type: 'text', placeholder: 'Führerhauptquartier' },
                { id: 'date', label: 'Ort und Tag (Место и дата)', type: 'text', placeholder: 'den 14. Mai 1943' },
                { id: 'geheim', label: 'Geheimhaltungsgrad', type: 'text', placeholder: 'Geheime Kommandosache' },
                { id: 'ausf', label: 'Ausfertigung Nr. (Экземпляр №)', type: 'text', placeholder: 'Ausfertigung Nr. 3' }
            ]},
            { section: 'Inhalt (Текст приказа)', fields: [
                { id: 'betrifft', label: 'Betrifft (Касательно)', type: 'textarea', placeholder: 'Fall "Zitadelle"' },
                { id: 'body', label: 'Befehl / Mitteilung (Текст)', type: 'textarea', placeholder: '1. Ich befehle hiermit...\n2. Die Heeresgruppe...' }
            ]},
            { section: 'Absender (Подпись)', fields: [
                { id: 'signatureTitle', label: 'Должность подписанта', type: 'text', placeholder: 'Der Chef des Oberkommandos der Wehrmacht' },
                { id: 'signature', label: 'Подпись', type: 'text', placeholder: 'Keitel' }
            ]},
            { section: 'Optik (Оформление)', fields: [
                { id: 'paperWear', label: 'Износ бумаги', type: 'checkbox' },
                { id: 'stampOkw', label: 'Гербовая печать (OKW)', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    renderPreview(data) {
        const page1 = `
            <div class="a4-page hq-reich-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="hr-border-outer">
                    
                    <div class="hr-head-row">
                        <div class="hr-left">
                            <div class="hr-abs">${data.dienststelle || 'Führerhauptquartier'}</div>
                        </div>
                        <div class="hr-right">
                            <div class="hr-date">${data.date || 'den 14. Mai 1943'}</div>
                            <div class="hr-ausf">${data.ausf || 'Ausfertigung Nr. 3'}</div>
                        </div>
                    </div>

                    <div class="hr-title">Der Führer und Oberste Befehlshaber der Wehrmacht</div>

                    <div class="hr-geheim">${data.geheim || 'Geheime Kommandosache'}</div>

                    <div class="hr-betrifft-box">
                        <span class="hr-betrifft-label">Betrifft:</span>
                        <div class="hr-betrifft-text">${data.betrifft || 'Fall "Zitadelle"'}</div>
                    </div>

                    <div class="hr-body">
                        ${this._renderParagraphs(data.body)}
                    </div>

                    <div class="hr-footer">
                        <div class="hr-sig-title">${data.signatureTitle || 'Der Chef des Oberkommandos der Wehrmacht'}</div>
                        <div class="hr-sig-name">
                            ${data.stampOkw ? '<div class="hr-stamp-okw"></div>' : ''}
                            <span class="hr-cursive-sig">${data.signature || 'Keitel'}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;

        return page1;
    }
};
