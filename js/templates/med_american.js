// American Medical Template
const MedAmericanTemplate = {
    id: 'med_american',
    name: 'Emergency Medical Tag',
    description: 'Field Medical Record. Полевая бирка солдата US Army с круглым отверстием для привязи.',
    icon: '🩺',
    
    getFields() {
        return [
            { section: 'Personnel Data', fields: [
                { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Smith' },
                { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'John D.' },
                { id: 'asn', label: 'Army Serial Number (ASN)', type: 'text', placeholder: '32 145 678' },
                { id: 'rank', label: 'Grade / Rank', type: 'text', placeholder: 'PVT' },
                { id: 'organization', label: 'Organization', type: 'text', placeholder: 'Co B, 506th PIR' },
                { id: 'photo', label: 'Photo (Optional)', type: 'photo' }
            ]},
            { section: 'Casualty Info', fields: [
                { id: 'datetime', label: 'Date and Hour of Wound', type: 'text', placeholder: '06-Jun-44  0800' },
                { id: 'type', label: 'Type of Casualty (WIA, KIA)', type: 'text', placeholder: 'WIA (Wounded in Action)' },
                { id: 'diagnosis', label: 'Diagnosis / Nature of Wound', type: 'textarea', placeholder: 'GSW (Gunshot Wound) left shoulder. Severe.' }
            ]},
            { section: 'Treatment', fields: [
                { id: 'treatment', label: 'Treatment Given', type: 'textarea', placeholder: 'Sulfanilamide applied. Bandaged.' },
                { id: 'morphine', label: 'Morphine (Time & Dose)', type: 'text', placeholder: '0815 - 1 syrette (0.5 gr)' },
                { id: 'tetanus', label: 'Tetanus Toxoid (Time)', type: 'text', placeholder: '0820' },
                { id: 'tourniquet', label: 'Tourniquet Applied?', type: 'checkbox' }
            ]},
            { section: 'Disposition', fields: [
                { id: 'disposition', label: 'Disposition (e.g. Sent to Aid Station)', type: 'text', placeholder: 'Evac to Battalion Aid Station' },
                { id: 'medOfficer', label: 'Signature of Med. Officer', type: 'text', placeholder: 'Capt. R. Roe' }
            ]},
            { section: 'Aesthetics', fields: [
                { id: 'bloodStain', label: 'Blood/Dirt Stains', type: 'checkbox' },
                { id: 'paperWear', label: 'Paper Wear', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<div class="ma-text-line">${line.trim()}</div>`).join('');
    },

    renderPreview(data) {
        const page1 = `
            <!-- We center the smaller tag inside the A4 area -->
            <div class="a4-page" style="display:flex; justify-content:center; align-items:center; background:#ccc;">
                <div class="med-am-tag ${data.paperWear ? 'ma-effect-wear' : ''}">
                    
                    <div class="ma-hole">
                        <div class="ma-string"></div>
                    </div>

                    ${data.bloodStain ? '<div class="ma-effect-blood"></div>' : ''}

                    <div class="ma-header">
                        <div class="ma-tag-number">Tags must be attached<br>securely to casualty</div>
                        <h1>EMERGENCY MEDICAL TAG</h1>
                    </div>

                    <div class="ma-photo-section">
                        ${data.photo ? `<img src="${data.photo}" alt="Photo" class="${data.photo_filter || ''}">` : '<div class="ma-photo-placeholder">PHOTO<br>(OPTIONAL)</div>'}
                    </div>

                    <div class="ma-body">
                        <div class="ma-row">
                            <span class="ma-label">Name:</span>
                            <span class="ma-val">${data.lastName || ''}, ${data.firstName || ''}</span>
                        </div>
                        <div class="ma-row">
                            <span class="ma-label">ASN:</span>
                            <span class="ma-val">${data.asn || ''}</span>
                            <span class="ma-label" style="margin-left:15px;">Grade:</span>
                            <span class="ma-val">${data.rank || ''}</span>
                        </div>
                        <div class="ma-row">
                            <span class="ma-label">Organization:</span>
                            <span class="ma-val">${data.organization || ''}</span>
                        </div>
                        
                        <div class="ma-divider"></div>

                        <div class="ma-row">
                            <span class="ma-label">Date/Hour:</span>
                            <span class="ma-val">${data.datetime || ''}</span>
                        </div>
                        <div class="ma-row">
                            <span class="ma-label">Casualty Type:</span>
                            <span class="ma-val" style="font-weight:bold;">${data.type || ''}</span>
                        </div>

                        <div class="ma-block">
                            <div class="ma-label">Diagnosis:</div>
                            <div class="ma-textarea-sim">${this._renderParagraphs(data.diagnosis)}</div>
                        </div>

                        <div class="ma-block">
                            <div class="ma-label">Treatment:</div>
                            <div class="ma-textarea-sim">${this._renderParagraphs(data.treatment)}</div>
                        </div>

                        <div class="ma-row">
                            <span class="ma-label">Morphine:</span>
                            <span class="ma-val">${data.morphine || ''}</span>
                        </div>
                        <div class="ma-row">
                            <span class="ma-label">Tetanus Toxoid:</span>
                            <span class="ma-val">${data.tetanus || ''}</span>
                        </div>

                        <div class="ma-row" style="margin-top:10px;">
                            <span class="ma-label" style="color: ${data.tourniquet ? '#a00' : '#222'}; border: ${data.tourniquet ? '2px solid #a00' : 'none'}; padding: ${data.tourniquet ? '2px 5px' : '0'};">TOURNIQUET:</span>
                            <span class="ma-val">${data.tourniquet ? 'APPLIED (YES)' : 'NO'}</span>
                        </div>

                        <div class="ma-divider" style="margin-top:15px;"></div>

                        <div class="ma-row">
                            <span class="ma-label">Disposition:</span>
                            <span class="ma-val">${data.disposition || ''}</span>
                        </div>
                        <div class="ma-row">
                            <span class="ma-label">Signature:</span>
                            <span class="ma-val signature-font">${data.medOfficer || ''}</span>
                        </div>

                        <div class="ma-footer">Form 52b Medical Department, U.S. Army</div>
                    </div>
                </div>
            </div>
        `;

        return page1;
    }
};
