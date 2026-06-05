// USAAF Pilot Personnel Record Template
const PilotAmericanTemplate = {
    id: 'pilot_american',
    name: 'Pilot Personnel Record',
    description: 'USAAF Pilot Personnel Record. Личное дело пилота Армии США.',
    icon: '🦅',

    getFields() {
        return [
            { section: 'Personnel Data', fields: [
                { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'JOHNSON' },
                { id: 'firstName', label: 'First Name & MI', type: 'text', placeholder: 'ROBERT E.' },
                { id: 'serialNumber', label: 'Army Serial Number', type: 'text', placeholder: 'O-678 432' },
                { id: 'rank', label: 'Grade / Rank', type: 'select', options: [
                    '2LT — Second Lieutenant', '1LT — First Lieutenant', 'CPT — Captain',
                    'MAJ — Major', 'LTC — Lieutenant Colonel', 'COL — Colonel'
                ]},
                { id: 'rankCustom', label: 'Rank (manual)', type: 'text', placeholder: 'Flight Officer' },
                { id: 'branch', label: 'Arm or Service', type: 'text', placeholder: 'ARMY AIR FORCES' },
                { id: 'dob', label: 'Date of Birth', type: 'text', placeholder: '22 MAR 1920' },
                { id: 'pob', label: 'Place of Birth', type: 'text', placeholder: 'DALLAS, TX' },
                { id: 'dossierDate', label: 'Date of Record', type: 'text', placeholder: '15 JUN 1944' },
                { id: 'photo', label: 'Photograph', type: 'photo' }
            ]},
            { section: 'Physical Profile', fields: [
                { id: 'height', label: 'Height', type: 'text', placeholder: '5\'11"' },
                { id: 'weight', label: 'Weight', type: 'text', placeholder: '172 lbs' },
                { id: 'eyes', label: 'Eyes', type: 'text', placeholder: 'BLUE' },
                { id: 'hair', label: 'Hair', type: 'text', placeholder: 'BROWN' },
                { id: 'blood', label: 'Blood Type', type: 'text', placeholder: 'A POSITIVE' },
            ]},
            { section: 'Flight Training & Qualification', fields: [
                { id: 'aircraftTypes', label: 'Aircraft Types Qualified (Type - Rating)', type: 'textarea', placeholder: 'P-51D Mustang — Pilot\nP-47 Thunderbolt — Pilot\nAT-6 Texan — Instructor' },
                { id: 'totalFlightHours', label: 'Total Flight Hours', type: 'text', placeholder: '1,450' },
                { id: 'combatFlightHours', label: 'Combat Flight Hours', type: 'text', placeholder: '620' },
                { id: 'instrumentHours', label: 'Instrument Hours', type: 'text', placeholder: '185' },
                { id: 'pilotRating', label: 'Pilot Rating', type: 'select', options: [
                    'STUDENT PILOT', 'SERVICE PILOT', 'FLIGHT OFFICER',
                    'SENIOR PILOT', 'COMMAND PILOT'
                ]},
                { id: 'specialRatings', label: 'Special Ratings / Qualifications', type: 'textarea', placeholder: 'BOMBARDIER\nNAVIGATOR\nFLIGHT ENGINEER\nAERIAL GUNNERY' },
                { id: 'theater', label: 'Theater of Operations', type: 'select', options: [
                    'ETO — European Theater', 'PTO — Pacific Theater',
                    'MTO — Mediterranean Theater', 'CBI — China-Burma-India'
                ]},
            ]},
            { section: 'Combat Record', fields: [
                { id: 'combatMissions', label: 'Combat Missions (Date - Description)', type: 'textarea', placeholder: '06 JUN 44 - D-Day escort, Normandy\n25 DEC 44 - Ardennes interdiction sorties' },
                { id: 'sortiesFlown', label: 'Total Combat Sorties', type: 'text', placeholder: '187' },
                { id: 'aerialVictories', label: 'Aerial Victories (Date - Enemy A/C)', type: 'textarea', placeholder: '14 JAN 44 - Bf 109 (confirmed)\n06 JUN 44 - Fw 190 (confirmed)\n25 DEC 44 - Me 262 (probable)' },
            ]},
            { section: 'Decorations & Awards', fields: [
                { id: 'dfc', label: 'Distinguished Flying Cross', type: 'checkbox' },
                { id: 'airMedal', label: 'Air Medal', type: 'checkbox' },
                { id: 'purpleHeart', label: 'Purple Heart', type: 'checkbox' },
                { id: 'silverStar', label: 'Silver Star', type: 'checkbox' },
                { id: 'bronzeStar', label: 'Bronze Star Medal', type: 'checkbox' },
                { id: 'awardsOther', label: 'Other Decorations', type: 'textarea', placeholder: 'Presidential Unit Citation\nAir Medal with 3 Oak Leaf Clusters' },
            ]},
            { section: 'Security & Remarks', fields: [
                { id: 'security', label: 'Security Clearance', type: 'select', options: [
                    'RESTRICTED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET', 'NONE'
                ]},
                { id: 'remarks', label: 'Remarks / Disciplinary Action', type: 'textarea', placeholder: 'No disciplinary actions on record.' },
                { id: 'commanderSignature', label: 'Signature of Personnel Officer', type: 'signature' },
            ]},
            { section: 'Outcome / Status', fields: [
                { id: 'outcome', label: 'Casualty / Separation Status', type: 'select', options: [
                    '— (ACTIVE)',
                    'KIA — Killed in Action',
                    'MIA — Missing in Action',
                    'POW — Prisoner of War',
                    'WIA — Wounded in Action',
                    'DOW — Died of Wounds',
                    'SHOT DOWN — Over Enemy Territory',
                    'BAILED OUT — Parachuted from Aircraft',
                    'HONORABLY DISCHARGED',
                    'MEDICALLY DISCHARGED',
                    'COURT-MARTIALED',
                ]},
                { id: 'outcomeDate', label: 'Date of Casualty / Separation', type: 'text', placeholder: '17 AUG 1944' },
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
            { key: 'dfc',         name: 'Distinguished Flying Cross' },
            { key: 'airMedal',    name: 'Air Medal' },
            { key: 'purpleHeart', name: 'Purple Heart' },
            { key: 'silverStar',  name: 'Silver Star' },
            { key: 'bronzeStar',  name: 'Bronze Star Medal' },
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
            'KIA — Killed in Action':              { text: 'K.I.A.', color: '#7a0000' },
            'MIA — Missing in Action':             { text: 'M.I.A.', color: '#5a4a00' },
            'POW — Prisoner of War':               { text: 'P.O.W.', color: '#4a3a00' },
            'WIA — Wounded in Action':             { text: 'W.I.A.', color: '#7a3000' },
            'DOW — Died of Wounds':                { text: 'D.O.W.', color: '#7a0000' },
            'SHOT DOWN — Over Enemy Territory':    { text: 'SHOT DOWN', color: '#660000' },
            'BAILED OUT — Parachuted from Aircraft': { text: 'BAILED OUT', color: '#5a3a00' },
            'HONORABLY DISCHARGED':                { text: 'HON. DISC.', color: '#1a3a1a' },
            'MEDICALLY DISCHARGED':                { text: 'MED. DISC.', color: '#1a2a4a' },
            'COURT-MARTIALED':                     { text: 'CT-MARTIAL', color: '#400000' },
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
                    <span class="am-form-title">ARMY AIR FORCES · PILOT PERSONNEL RECORD</span>
                    <span>WAR DEPARTMENT · ${data.dossierDate || new Date().toLocaleDateString('en-US')}</span>
                </div>

                <div style="display:flex;">
                    <div style="flex:1;">
                        <div class="am-grid-row" style="border-top:1px solid #000;">
                            <div class="am-box am-w-half">
                                <span class="am-label">1. LAST NAME - FIRST NAME - MI</span>
                                <span class="am-value">${data.lastName || ''} ${data.firstName || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">2. ARMY SERIAL NO.</span>
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
                                <span class="am-value">${data.branch || 'ARMY AIR FORCES'}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">5. PILOT RATING</span>
                                <span class="am-value" style="font-size:9px;">${data.pilotRating || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">6. DATE OF BIRTH</span>
                                <span class="am-value">${data.dob || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">7. PLACE OF BIRTH</span>
                                <span class="am-value">${data.pob || ''}</span>
                            </div>
                        </div>

                        <div class="am-grid-row">
                            <div class="am-box">
                                <span class="am-label">8. PHYSICAL PROFILE</span>
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
                        <span class="am-label">9. THEATER OF OPERATIONS</span>
                        <span class="am-value" style="font-size:9px;">${data.theater || ''}</span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">9a. TOTAL FLIGHT HRS</span>
                        <span class="am-value"><strong>${data.totalFlightHours || ''}</strong></span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">9b. COMBAT HRS</span>
                        <span class="am-value"><strong>${data.combatFlightHours || ''}</strong></span>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-quart">
                        <span class="am-label">9c. INSTRUMENT HRS</span>
                        <span class="am-value">${data.instrumentHours || ''}</span>
                    </div>
                    <div class="am-box am-w-quart">
                        <span class="am-label">9d. COMBAT SORTIES</span>
                        <span class="am-value"><strong>${data.sortiesFlown || ''}</strong></span>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">9e. SECURITY CLEARANCE</span>
                        <span class="am-value">${data.security || ''}</span>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">10. AIRCRAFT TYPES QUALIFIED</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>AIRCRAFT TYPE</th><th>RATING</th></tr></thead>
                            <tbody>${this._renderTableRows(data.aircraftTypes)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">11. SPECIAL RATINGS / QUALIFICATIONS</span>
                        <div class="am-text-value" style="font-size:10px;">
                            ${this._renderParagraphs(data.specialRatings)}
                        </div>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">12. AERIAL VICTORIES</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>DATE</th><th>ENEMY AIRCRAFT TYPE / STATUS</th></tr></thead>
                            <tbody>${this._renderTableRows(data.aerialVictories)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="page-num" style="margin-top:10px;">PAGE 1 OF 2</div>
            </div>
        `;

        const page2 = `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us" style="top:60%;left:20%;"></div>' : ''}
                ${outcomeStamp}

                <div class="am-header" style="margin-top:0;">
                    <span class="am-form-title">AAF PILOT PERSONNEL RECORD — PAGE 2</span>
                    <span>${data.lastName || ''}, ${data.firstName || ''} · ASN: ${data.serialNumber || ''}</span>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">13. COMBAT MISSIONS</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>DATE</th><th>MISSION DESCRIPTION</th></tr></thead>
                            <tbody>${this._renderTableRows(data.combatMissions)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-grid-row" style="border-top:1px solid #000;">
                    <div class="am-box am-w-auto">
                        <span class="am-label">14. DECORATIONS AND AWARDS</span>
                        <table class="am-table" style="margin-top:4px;">
                            <thead><tr><th>DECORATION / AWARD</th></tr></thead>
                            <tbody>${this._renderAwards(data)}</tbody>
                        </table>
                    </div>
                </div>

                <div class="am-text-area" style="border-top:1px solid #000;">
                    <span class="am-label">15. REMARKS / DISCIPLINARY ACTION</span>
                    <div class="am-text-value">
                        ${this._renderParagraphs(data.remarks)}
                    </div>
                </div>

                ${data.outcome && data.outcome !== '— (ACTIVE)' ? `
                <div class="am-grid-row" style="border-top:1px solid #000; margin-top:8px;">
                    <div class="am-box am-w-half">
                        <span class="am-label">16. CASUALTY / SEPARATION STATUS</span>
                        <span class="am-value" style="font-size:10px;">${data.outcome}</span>
                    </div>
                    <div class="am-box am-w-half">
                        <span class="am-label">16a. DATE</span>
                        <span class="am-value">${data.outcomeDate || ''}</span>
                    </div>
                </div>` : ''}

                <div class="am-grid-row" style="margin-top:20px; border-top:1px solid #000;">
                    <div class="am-box am-w-third">
                        <span class="am-label">FINGERPRINT (RIGHT INDEX)</span>
                        <div class="fingerprint-box" style="margin:5px auto;">PRINT</div>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF PILOT</span>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        ${data.commanderSignature ? `<img src="${data.commanderSignature}" class="sig-image-us" alt="Signature">` : ''}
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF PERSONNEL OFFICER</span>
                    </div>
                </div>

                <div class="page-num" style="margin-top:10px;">PAGE 2 OF 2 · FOR OFFICIAL USE ONLY</div>
            </div>
        `;

        let result = page1 + page2;
        if (data.extraNotes && data.extraNotes.trim()) {
            result += `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                <div class="am-header" style="margin-top:10px;">
                    <span class="am-form-title">APPENDIX SUPPLEMENT</span>
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
