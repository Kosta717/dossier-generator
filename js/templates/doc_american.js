// American Medical Officer Dossier Template (DA Form 66 style)
const DocAmericanTemplate = {
    id: 'doc_american',
    name: 'Medical Officer Record',
    description: 'Medical Officer Personnel Record. Личное дело медицинского офицера US Army.',
    icon: '🏥',
    
    getFields() {
        return [
            { section: 'Personnel Data', fields: [
                { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'GRUBER' },
                { id: 'firstName', label: 'First Name & MI', type: 'text', placeholder: 'WILLIAM R.' },
                { id: 'serialNumber', label: 'Army Serial Number', type: 'text', placeholder: '0-412 876' },
                { id: 'rank', label: 'Grade / Rank', type: 'select', options: [
                    '2LT MC — Second Lieutenant, Medical Corps',
                    '1LT MC — First Lieutenant, Medical Corps',
                    'CPT MC — Captain, Medical Corps',
                    'MAJ MC — Major, Medical Corps',
                    'LTC MC — Lieutenant Colonel, Medical Corps',
                    'COL MC — Colonel, Medical Corps'
                ]},
                { id: 'rankCustom', label: 'Rank (manual)', type: 'text', placeholder: 'BG MC — Brigadier General, Medical Corps' },
                { id: 'dob', label: 'Date of Birth', type: 'text', placeholder: '22 MAR 1908' },
                { id: 'pob', label: 'Place of Birth', type: 'text', placeholder: 'BOSTON, MA' },
                { id: 'dossierDate', label: 'Date of Record', type: 'text', placeholder: '15 JAN 1944' },
                { id: 'photo', label: 'Photograph', type: 'photo' }
            ]},
            { section: 'Physical Profile', fields: [
                { id: 'height', label: 'Height', type: 'text', placeholder: '5\'11"' },
                { id: 'weight', label: 'Weight', type: 'text', placeholder: '175 lbs' },
                { id: 'eyes', label: 'Eyes', type: 'text', placeholder: 'BLUE' },
                { id: 'hair', label: 'Hair', type: 'text', placeholder: 'BROWN' },
                { id: 'blood', label: 'Blood Type', type: 'text', placeholder: 'A POSITIVE' },
            ]},
            { section: 'Medical Qualifications', fields: [
                { id: 'medSpecialty', label: 'Medical Specialty', type: 'select', options: [
                    'GENERAL SURGERY', 'INTERNAL MEDICINE', 'ORTHOPEDIC SURGERY',
                    'NEUROSURGERY', 'PSYCHIATRY', 'ANESTHESIOLOGY',
                    'PREVENTIVE MEDICINE', 'OPHTHALMOLOGY', 'DENTAL'
                ]},
                { id: 'medSchool', label: 'Medical School / Year', type: 'text', placeholder: 'JOHNS HOPKINS UNIV. SCHOOL OF MEDICINE, 1934' },
                { id: 'medLicense', label: 'Medical License / State', type: 'text', placeholder: 'MARYLAND STATE MEDICAL LICENSE, 1934' },
                { id: 'boardCertification', label: 'Board Certification', type: 'text', placeholder: 'AMERICAN BOARD OF SURGERY, 1937' },
            ]},
            { section: 'Hospital Assignments', fields: [
                { id: 'hospitalAssignments', label: 'Hospital / Unit Assignments (Date - Assignment)', type: 'textarea', placeholder: '12 DEC 42 - 2nd Field Hospital, Surgeon\n05 JUL 43 - 56th Evacuation Hospital, Chief of Surgery\n22 JAN 44 - 3rd General Hospital, Chief Surgical Service' },
                { id: 'surgicalLog', label: 'Surgical Log / Statistics', type: 'textarea', placeholder: 'Total Procedures: 890\nMajor Operations: 412\nBattle Casualty Surgery: 267\nMortality Rate: 3.8%' },
            ]},
            { section: 'Research & Publications', fields: [
                { id: 'researchPublications', label: 'Research Publications', type: 'textarea', placeholder: '"Wound Debridement in Forward Areas" — J. Military Medicine, 1943\n"Penicillin Application in Battle Wounds" — US Army Medical Bulletin, 1944' },
            ]},
            { section: 'Decorations & Awards', fields: [
                { id: 'silverStar', label: 'Silver Star', type: 'checkbox' },
                { id: 'bronzeStar', label: 'Bronze Star', type: 'checkbox' },
                { id: 'legionOfMerit', label: 'Legion of Merit', type: 'checkbox' },
                { id: 'purpleHeart', label: 'Purple Heart', type: 'checkbox' },
                { id: 'armyCommendation', label: 'Army Commendation Medal', type: 'checkbox' },
                { id: 'euroAfricaMidEast', label: 'EAME Campaign Medal', type: 'checkbox' },
                { id: 'asiaticPacific', label: 'Asiatic-Pacific Campaign Medal', type: 'checkbox' },
                { id: 'awardsOther', label: 'Other Decorations', type: 'textarea', placeholder: 'Meritorious Service Medal\nPresidential Unit Citation' },
            ]},
            { section: 'Remarks & Security', fields: [
                { id: 'security', label: 'Security Clearance', type: 'select', options: [
                    'RESTRICTED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET', 'NONE'
                ]},
                { id: 'remarks', label: 'Remarks / Special Notes', type: 'textarea', placeholder: 'Fluent in French and German. Recommended for promotion to LTC MC.' },
                { id: 'commanderSignature', label: 'Signature of Medical Inspector', type: 'signature' },
            ]},
            { section: 'Outcome / Status', fields: [
                { id: 'outcome', label: 'Casualty / Separation Status', type: 'select', options: [
                    '— (ACTIVE)',
                    'KIA — Killed in Action',
                    'MIA — Missing in Action',
                    'POW — Prisoner of War',
                    'WIA — Wounded in Action',
                    'DOW — Died of Wounds',
                    'HONORABLY DISCHARGED',
                    'MEDICALLY DISCHARGED',
                    'TRANSFERRED',
                ]},
                { id: 'outcomeDate', label: 'Date of Casualty / Separation', type: 'text', placeholder: '08 MAY 1945' },
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Печать статуса секретности', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кофе', type: 'checkbox' },
            ]},
            { section: 'Дополнительно', fields: [
                { id: 'extraNotes', label: 'Appendices / Extra Notes', type: 'textarea', placeholder: 'Any overflow information...' }
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

    _renderAwards(data) {
        const medals = [
            { key: 'silverStar',       name: 'Silver Star' },
            { key: 'bronzeStar',       name: 'Bronze Star Medal' },
            { key: 'legionOfMerit',    name: 'Legion of Merit' },
            { key: 'purpleHeart',      name: 'Purple Heart' },
            { key: 'armyCommendation', name: 'Army Commendation Medal' },
            { key: 'euroAfricaMidEast',name: 'EAME Campaign Medal' },
            { key: 'asiaticPacific',   name: 'Asiatic-Pacific Campaign Medal' },
        ];
        const earned = medals.filter(m => data[m.key]);
        const rows = earned.map(m => `<tr><td>✦ ${m.name}</td></tr>`).join('');
        const otherRows = data.awardsOther 
            ? data.awardsOther.split('\n').filter(l => l.trim()).map(l => `<tr><td>✦ ${l.trim()}</td></tr>`).join('')
            : '';
        if (!rows && !otherRows) return '<tr><td>NO AWARDS ON RECORD</td></tr>';
        return rows + otherRows;
    },

    _getOutcomeStamp(outcome) {
        if (!outcome || outcome === '— (ACTIVE)') return '';
        const map = {
            'KIA — Killed in Action':    { text: 'K.I.A.', color: '#7a0000' },
            'MIA — Missing in Action':   { text: 'M.I.A.', color: '#5a4a00' },
            'POW — Prisoner of War':     { text: 'P.O.W.', color: '#4a3a00' },
            'WIA — Wounded in Action':   { text: 'W.I.A.', color: '#7a3000' },
            'DOW — Died of Wounds':      { text: 'D.O.W.', color: '#7a0000' },
            'HONORABLY DISCHARGED':      { text: 'HON. DISC.', color: '#1a3a1a' },
            'MEDICALLY DISCHARGED':      { text: 'MED. DISC.', color: '#1a2a4a' },
            'TRANSFERRED':               { text: 'TRANSFER', color: '#2a3a4a' },
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
                ${data.stampSecret ? `<div class="stamp-classified">${data.security || 'RESTRICTED'}</div>` : ''}
                ${outcomeStamp}
                
                <div class="am-header">
                    <span class="am-form-title">DA FORM 66 — MEDICAL OFFICER RECORD</span>
                    <span>WAR DEPARTMENT · THE SURGEON GENERAL · ${data.dossierDate || new Date().toLocaleDateString('en-US')}</span>
                </div>
                
                <div style="display:flex;">
                    <div style="flex:1;">
                        <div class="am-grid-row" style="border-top:1px solid #000;">
                            <div class="am-box am-w-half">
                                <span class="am-label">1. LAST NAME — FIRST NAME — MI</span>
                                <span class="am-value">${data.lastName || ''} ${data.firstName || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">2. ARMY SERIAL NUMBER</span>
                                <span class="am-value">${data.serialNumber || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">3. GRADE</span>
                                <span class="am-value">${rank}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box am-w-quart">
                                <span class="am-label">4. ARM OR SERVICE</span>
                                <span class="am-value">MEDICAL CORPS</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">4a. SPECIALTY</span>
                                <span class="am-value" style="font-size:9px;">${data.medSpecialty || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">5. DATE OF BIRTH</span>
                                <span class="am-value">${data.dob || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">6. PLACE OF BIRTH</span>
                                <span class="am-value">${data.pob || ''}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box">
                                <span class="am-label">7. PHYSICAL PROFILE</span>
                                <div style="display:flex; justify-content:space-between; margin-top:2px; flex-wrap:wrap; gap:4px;">
                                    <span>HT: <strong>${data.height || ''}</strong></span>
                                    <span>WT: <strong>${data.weight || ''}</strong></span>
                                    <span>EYES: <strong>${data.eyes || ''}</strong></span>
                                    <span>HAIR: <strong>${data.hair || ''}</strong></span>
                                    <span>BLOOD: <strong>${data.blood || ''}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foto-box">
                        ${data.photo ? `<img src="${data.photo}" alt="Photograph" class="${data.photo_filter || ''}">` : '<span style="font-size:8px;font-family:\'Inter\';">PHOTOGRAPH</span>'}
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000; margin-top:5px;">
                    <div class="am-box am-w-half">
                        <span class="am-label">8. MEDICAL SCHOOL</span>
                        <span class="am-value" style="font-size:9px;">${data.medSchool || ''}</span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">8a. MED. LICENSE</span>
                        <span class="am-value" style="font-size:8px;">${data.medLicense || ''}</span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">8b. BOARD CERT.</span>
                        <span class="am-value" style="font-size:8px;">${data.boardCertification || ''}</span>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-quart">
                        <span class="am-label">8c. SECURITY CLEARANCE</span>
                        <span class="am-value">${data.security || ''}</span>
                    </div>
                    <div class="am-box am-w-auto">
                        <span class="am-label">9. RECORD OF HOSPITAL ASSIGNMENTS</span>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>DATE OF EFFECT</th><th>HOSPITAL / UNIT — ASSIGNMENT</th></tr></thead>
                            <tbody>${this._renderTableRows(data.hospitalAssignments)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">10. SURGICAL LOG / STATISTICS</span>
                        <div class="am-text-value" style="font-size:10px;">
                            ${this._renderParagraphs(data.surgicalLog)}
                        </div>
                    </div>
                </div>
                
                <div class="page-num" style="margin-top: 10px;">PAGE 1 OF 2</div>
            </div>
        `;

        const page2 = `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us" style="top:60%;left:20%;"></div>' : ''}
                ${outcomeStamp}

                <div class="am-header" style="margin-top:0;">
                    <span class="am-form-title">DA FORM 66 — PAGE 2 — MEDICAL OFFICER</span>
                    <span>${data.lastName || ''}, ${data.firstName || ''} · ASN: ${data.serialNumber || ''}</span>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">11. RESEARCH PUBLICATIONS</span>
                        <div class="am-text-value" style="font-size:10px;">
                            ${this._renderParagraphs(data.researchPublications)}
                        </div>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">12. DECORATIONS AND AWARDS</span>
                        <table class="am-table" style="margin-top:4px;">
                            <thead><tr><th>DECORATION / AWARD</th></tr></thead>
                            <tbody>${this._renderAwards(data)}</tbody>
                        </table>
                    </div>
                </div>
                
                <div class="am-text-area" style="border-top:1px solid #000;">
                    <span class="am-label">13. REMARKS / SPECIAL NOTES</span>
                    <div class="am-text-value">
                        ${this._renderParagraphs(data.remarks)}
                    </div>
                </div>

                ${data.outcome && data.outcome !== '— (ACTIVE)' ? `
                <div class="am-grid-row" style="border-top:1px solid #000; margin-top:8px;">
                    <div class="am-box am-w-half">
                        <span class="am-label">14. CASUALTY / SEPARATION STATUS</span>
                        <span class="am-value" style="font-size:10px;">${data.outcome}</span>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">14a. DATE</span>
                        <span class="am-value">${data.outcomeDate || ''}</span>
                    </div>
                </div>` : ''}
                
                <div class="am-grid-row" style="margin-top:20px; border-top:1px solid #000;">
                    <div class="am-box am-w-third">
                        <span class="am-label">FINGERPRINT (RIGHT INDEX)</span>
                        <div class="fingerprint-box" style="margin:5px auto;">PRINT</div>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF MEDICAL OFFICER</span>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image-us" alt="Signature">` : ''}
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF THE SURGEON GENERAL</span>
                    </div>
                </div>
                
                <div class="page-num" style="margin-top: 10px;">PAGE 2 OF 2 · FOR OFFICIAL USE ONLY · OFFICE OF THE SURGEON GENERAL</div>
            </div>
        `;

        let result = page1 + page2;
        if (data.extraNotes && data.extraNotes.trim()) {
            result += `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="am-header" style="margin-top:10px;">
                    <span class="am-form-title">APPENDIX SUPPLEMENT — MEDICAL OFFICER</span>
                </div>
                <div class="am-text-area" style="flex:1; border-top:1px solid #000; margin-top:20px;">
                    <span class="am-label">ADDITIONAL REMARKS</span>
                    <div class="am-text-value" style="margin-top:10px;">
                        ${this._renderParagraphs(data.extraNotes)}
                    </div>
                </div>
            </div>`;
        }

        return result;
    }
};
