// American Intelligence Agent Dossier Template (OSS)
const IntelAmericanTemplate = {
    id: 'intel_american',
    name: 'OSS Agent File',
    description: 'OSS Personnel File. Досье агента Управления стратегических служб.',
    icon: '🗝️',
    
    getFields() {
        return [
            { section: 'Agent Identification', fields: [
                { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'DONOVAN' },
                { id: 'firstName', label: 'First Name & MI', type: 'text', placeholder: 'WILLIAM J.' },
                { id: 'serialNumber', label: 'Agent Number', type: 'text', placeholder: 'OSS-4718-A' },
                { id: 'rank', label: 'Classification', type: 'select', options: [
                    'AGENT', 'SENIOR AGENT', 'CASE OFFICER', 'STATION CHIEF'
                ]},
                { id: 'rankCustom', label: 'Classification (manual)', type: 'text', placeholder: 'SPECIAL OPERATIONS EXECUTIVE' },
                { id: 'dob', label: 'Date of Birth', type: 'text', placeholder: '14 MAY 1912' },
                { id: 'pob', label: 'Place of Birth', type: 'text', placeholder: 'NEW YORK, NY' },
                { id: 'dossierDate', label: 'Date of Record', type: 'text', placeholder: '06 JUN 1944' },
                { id: 'photo', label: 'Photograph', type: 'photo' }
            ]},
            { section: 'Physical Description', fields: [
                { id: 'height', label: 'Height', type: 'text', placeholder: '5\'11"' },
                { id: 'weight', label: 'Weight', type: 'text', placeholder: '170 lbs' },
                { id: 'eyes', label: 'Eyes', type: 'text', placeholder: 'BLUE' },
                { id: 'hair', label: 'Hair', type: 'text', placeholder: 'BROWN' },
                { id: 'blood', label: 'Blood Type', type: 'text', placeholder: 'A POSITIVE' },
                { id: 'distinguishingMarks', label: 'Distinguishing Marks / Scars', type: 'textarea', placeholder: 'Scar on left forearm, 3 inches\nSmall mole behind right ear' },
            ]},
            { section: 'Cover Identity', fields: [
                { id: 'coverName', label: 'Cover Name', type: 'text', placeholder: 'PIERRE LAMBERT' },
                { id: 'coverOccupation', label: 'Cover Occupation', type: 'text', placeholder: 'JOURNALIST, ASSOCIATED PRESS' },
                { id: 'coverDocuments', label: 'Cover Documents Issued', type: 'textarea', placeholder: 'French Passport No. C-482917\nPress Credentials — Associated Press\nRation Card — Prefecture de Paris' },
                { id: 'legendDetails', label: 'Legend Details', type: 'textarea', placeholder: 'Born in Lyon, France. Educated at Sorbonne.\nLived in Switzerland 1938-1941.\nCurrently employed as war correspondent.' },
            ]},
            { section: 'Language Proficiency', fields: [
                { id: 'languages', label: 'Languages (Language - Proficiency)', type: 'textarea', placeholder: 'English - NATIVE\nFrench - FLUENT\nGerman - GOOD\nItalian - FAIR' },
            ]},
            { section: 'Special Training', fields: [
                { id: 'specialTraining', label: 'Training Completed', type: 'textarea', placeholder: 'PARACHUTE — Camp X, Dec 1942\nDEMOLITIONS — Congressional Country Club, Jan 1943\nRADIO/COMMS — Area B, Feb 1943\nCIPHER — OTS, Mar 1943\nHAND-TO-HAND — Camp X, Dec 1942\nLOCK PICKING — Area E, Apr 1943\nDISGUISE — OSS London, May 1943\nINTERROGATION — Area F, Jun 1943' },
                { id: 'weaponsQual', label: 'Weapons Qualification', type: 'textarea', placeholder: 'M1911A1 .45 — EXPERT\nM1 Carbine — SHARPSHOOTER\nSten Gun — QUALIFIED\nFairbairn-Sykes — PROFICIENT' },
            ]},
            { section: 'Operational Record', fields: [
                { id: 'operationsRecord', label: 'Operations (Date - Mission)', type: 'textarea', placeholder: 'JUL 1943 - JEDBURGH Team GILES, France\nJAN 1944 - Intelligence gathering, Occupied Paris\nJUN 1944 - SUSSEX Mission, Normandy' },
                { id: 'agentNetwork', label: 'Agent Network / Assets', type: 'textarea', placeholder: 'ASSET "SPARROW" — Informant, Vichy Government\nASSET "CARDINAL" — Courier, Resistance network\nASSET "ROBIN" — Radio operator, Maquis' },
                { id: 'handler', label: 'Case Officer / Handler', type: 'text', placeholder: 'COL. DAVID K. E. BRUCE, OSS London' },
                { id: 'reliabilityRating', label: 'Source Reliability Rating', type: 'select', options: [
                    'A1 — COMPLETELY RELIABLE',
                    'A2 — USUALLY RELIABLE',
                    'B1 — FAIRLY RELIABLE',
                    'B2 — NOT USUALLY RELIABLE',
                    'C — UNRELIABLE',
                    'F — RELIABILITY UNKNOWN',
                ]},
            ]},
            { section: 'Security & Clearance', fields: [
                { id: 'securityClearance', label: 'Security Clearance', type: 'select', options: [
                    'TOP SECRET', 'SECRET', 'CONFIDENTIAL'
                ]},
                { id: 'awards', label: 'Decorations & Awards', type: 'textarea', placeholder: 'Distinguished Service Cross\nSilver Star\nLegion of Merit' },
                { id: 'remarks', label: 'Remarks / Notes', type: 'textarea', placeholder: 'Recommended for promotion to SENIOR AGENT.\nDemonstrated exceptional composure under interrogation training.' },
                { id: 'commanderSignature', label: 'Signature of Authorizing Officer', type: 'signature' },
            ]},
            { section: 'Outcome / Status', fields: [
                { id: 'outcome', label: 'Agent Status', type: 'select', options: [
                    '— (ACTIVE)',
                    'KIA — Killed in Action',
                    'MIA — Missing in Action',
                    'CAPTURED',
                    'COMPROMISED',
                    'TURNED',
                    'EXFILTRATED',
                    'HONORABLY DISCHARGED',
                ]},
                { id: 'outcomeDate', label: 'Date of Status Change', type: 'text', placeholder: '17 AUG 1944' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'TOP SECRET classification stamp', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кофе', type: 'checkbox' },
            ]},
            { section: 'Дополнительно', fields: [
                { id: 'extraNotes', label: 'Appendices / Extra Notes', type: 'textarea', placeholder: 'Any additional classified information...' }
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

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    _renderList(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>✦ ${line.trim()}</p>`).join('');
    },

    _getOutcomeStamp(outcome) {
        if (!outcome || outcome === '— (ACTIVE)') return '';
        const map = {
            'KIA — Killed in Action':  { text: 'K.I.A.', color: '#7a0000' },
            'MIA — Missing in Action': { text: 'M.I.A.', color: '#5a4a00' },
            'CAPTURED':                { text: 'CAPTURED', color: '#4a3a00' },
            'COMPROMISED':             { text: 'COMPROMISED', color: '#7a3000' },
            'TURNED':                  { text: 'TURNED', color: '#500000' },
            'EXFILTRATED':             { text: 'EXFILTRATED', color: '#1a3a1a' },
            'HONORABLY DISCHARGED':    { text: 'HON. DISC.', color: '#1a2a4a' },
        };
        const s = map[outcome] || { text: outcome.toUpperCase(), color: '#7a0000' };
        return `<div class="american-outcome-stamp" style="border-color:${s.color};color:${s.color};">${s.text}</div>`;
    },

    renderPreview(data) {
        const rank = data.rankCustom || data.rank || '';
        const outcomeStamp = this._getOutcomeStamp(data.outcome);

        const page1 = `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us"></div>' : ''}
                ${data.stampSecret ? `<div class="stamp-classified">${data.securityClearance || 'TOP SECRET'}</div>` : ''}
                ${outcomeStamp}
                
                <div class="am-header">
                    <span class="am-form-title">OFFICE OF STRATEGIC SERVICES · AGENT PERSONNEL FILE</span>
                    <span>TOP SECRET · ${data.dossierDate || new Date().toLocaleDateString('en-US')}</span>
                </div>
                
                <div style="display:flex;">
                    <div style="flex:1;">
                        <div class="am-grid-row" style="border-top:1px solid #000;">
                            <div class="am-box am-w-half">
                                <span class="am-label">1. LAST NAME — FIRST NAME — MI</span>
                                <span class="am-value">${data.lastName || ''} ${data.firstName || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">2. AGENT NUMBER</span>
                                <span class="am-value">${data.serialNumber || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">3. CLASSIFICATION</span>
                                <span class="am-value">${rank}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box am-w-quart">
                                <span class="am-label">4. DATE OF BIRTH</span>
                                <span class="am-value">${data.dob || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">5. PLACE OF BIRTH</span>
                                <span class="am-value">${data.pob || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">6. SECURITY CLEARANCE</span>
                                <span class="am-value"><strong>${data.securityClearance || ''}</strong></span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">7. RELIABILITY</span>
                                <span class="am-value" style="font-size:8px;">${data.reliabilityRating || ''}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box">
                                <span class="am-label">8. PHYSICAL DESCRIPTION</span>
                                <div style="display:flex; justify-content:space-between; margin-top:2px; flex-wrap:wrap; gap:4px;">
                                    <span>HT: <strong>${data.height || ''}</strong></span>
                                    <span>WT: <strong>${data.weight || ''}</strong></span>
                                    <span>EYES: <strong>${data.eyes || ''}</strong></span>
                                    <span>HAIR: <strong>${data.hair || ''}</strong></span>
                                    <span>BLOOD: <strong>${data.blood || ''}</strong></span>
                                </div>
                            </div>
                        </div>

                        <div class="am-grid-row">
                            <div class="am-box am-w-auto">
                                <span class="am-label">8a. DISTINGUISHING MARKS / SCARS</span>
                                <div class="am-text-value" style="font-size:9px;">
                                    ${this._renderParagraphs(data.distinguishingMarks) || '<p>NONE</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foto-box">
                        ${data.photo ? `<img src="${data.photo}" alt="Photograph" class="${data.photo_filter || ''}">` : '<span style="font-size:8px;font-family:\'Inter\';">PHOTOGRAPH</span>'}
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000; margin-top:5px;">
                    <div class="am-box am-w-quart">
                        <span class="am-label">9. COVER NAME</span>
                        <span class="am-value"><strong>${data.coverName || ''}</strong></span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">10. COVER OCCUPATION</span>
                        <span class="am-value" style="font-size:9px;">${data.coverOccupation || ''}</span>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">11. CASE OFFICER / HANDLER</span>
                        <span class="am-value" style="font-size:9px;">${data.handler || ''}</span>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-half">
                        <span class="am-label">12. COVER DOCUMENTS ISSUED</span>
                        <div class="am-text-value" style="font-size:9px;">
                            ${this._renderParagraphs(data.coverDocuments)}
                        </div>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">13. LEGEND DETAILS</span>
                        <div class="am-text-value" style="font-size:9px;">
                            ${this._renderParagraphs(data.legendDetails)}
                        </div>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">14. LANGUAGE PROFICIENCY</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>LANGUAGE</th><th>PROFICIENCY</th></tr></thead>
                            <tbody>${this._renderTableRows(data.languages)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">15. SPECIAL TRAINING COMPLETED</span>
                        <div class="am-text-value" style="font-size:9px;">
                            ${this._renderParagraphs(data.specialTraining)}
                        </div>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">16. WEAPONS QUALIFICATION</span>
                        <div class="am-text-value" style="font-size:9px;">
                            ${this._renderParagraphs(data.weaponsQual)}
                        </div>
                    </div>
                </div>
                
                <div class="page-num" style="margin-top: 10px;">PAGE 1 OF 2 · TOP SECRET</div>
            </div>
        `;

        const page2 = `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us" style="top:60%;left:20%;"></div>' : ''}
                ${outcomeStamp}

                <div class="am-header" style="margin-top:0;">
                    <span class="am-form-title">OSS AGENT FILE — PAGE 2</span>
                    <span>${data.lastName || ''}, ${data.firstName || ''} · ${data.serialNumber || ''}</span>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">17. OPERATIONAL RECORD</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>DATE</th><th>MISSION / OPERATION</th></tr></thead>
                            <tbody>${this._renderTableRows(data.operationsRecord)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">18. AGENT NETWORK / ASSETS</span>
                        <div class="am-text-value" style="font-size:9px;">
                            ${this._renderParagraphs(data.agentNetwork)}
                        </div>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">19. DECORATIONS & AWARDS</span>
                        <div class="am-text-value">
                            ${this._renderList(data.awards) || '<p>NO AWARDS ON RECORD</p>'}
                        </div>
                    </div>
                </div>
                
                <div class="am-text-area" style="border-top:1px solid #000;">
                    <span class="am-label">20. REMARKS / NOTES</span>
                    <div class="am-text-value">
                        ${this._renderParagraphs(data.remarks)}
                    </div>
                </div>

                ${data.outcome && data.outcome !== '— (ACTIVE)' ? `
                <div class="am-grid-row" style="border-top:1px solid #000; margin-top:8px;">
                    <div class="am-box am-w-half">
                        <span class="am-label">21. AGENT STATUS</span>
                        <span class="am-value" style="font-size:10px;">${data.outcome}</span>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">21a. DATE</span>
                        <span class="am-value">${data.outcomeDate || ''}</span>
                    </div>
                </div>` : ''}
                
                <div class="am-grid-row" style="margin-top:20px; border-top:1px solid #000;">
                    <div class="am-box am-w-third">
                        <span class="am-label">FINGERPRINT (RIGHT INDEX)</span>
                        <div class="fingerprint-box" style="margin:5px auto;">PRINT</div>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF AGENT</span>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image-us" alt="Signature">` : ''}
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF AUTHORIZING OFFICER</span>
                    </div>
                </div>
                
                <div class="page-num" style="margin-top: 10px;">PAGE 2 OF 2 · TOP SECRET · FOR OFFICIAL USE ONLY</div>
            </div>
        `;

        let result = page1 + page2;
        if (data.extraNotes && data.extraNotes.trim()) {
            result += `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="am-header" style="margin-top:10px;">
                    <span class="am-form-title">APPENDIX — CLASSIFIED SUPPLEMENT</span>
                </div>
                <div class="am-text-area" style="flex:1; border-top:1px solid #000; margin-top:20px;">
                    <span class="am-label">ADDITIONAL CLASSIFIED REMARKS</span>
                    <div class="am-text-value" style="margin-top:10px;">
                        ${this._renderParagraphs(data.extraNotes)}
                    </div>
                </div>
            </div>`;
        }

        return result;
    }
};
