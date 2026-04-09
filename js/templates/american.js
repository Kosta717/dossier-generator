// American Soldier Dossier Template (DA Form 20 style)
const AmericanTemplate = {
    id: 'american',
    name: 'Личное дело',
    description: 'DA Form 20 — Personnel Record. Оливковый стиль US Army, формализованные блоки.',
    icon: '🎖️',
    
    getFields() {
        return [
            { section: 'Personnel Data', fields: [
                { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'SMITH' },
                { id: 'firstName', label: 'First Name & MI', type: 'text', placeholder: 'JOHN A.' },
                { id: 'serialNumber', label: 'Army Serial Number', type: 'text', placeholder: '32 145 678' },
                { id: 'rank', label: 'Grade / Rank', type: 'text', placeholder: 'SERGEANT (SGT)' },
                { id: 'branch', label: 'Arm or Service', type: 'text', placeholder: 'INFANTRY' },
                { id: 'dob', label: 'Date of Birth', type: 'text', placeholder: '14 MAY 1920' },
                { id: 'pob', label: 'Place of Birth', type: 'text', placeholder: 'CHICAGO, IL' },
                { id: 'photo', label: 'Photograph', type: 'photo' }
            ]},
            { section: 'Physical Profile', fields: [
                { id: 'height', label: 'Height', type: 'text', placeholder: '5\'10"' },
                { id: 'weight', label: 'Weight', type: 'text', placeholder: '165 lbs' },
                { id: 'eyes', label: 'Eyes', type: 'text', placeholder: 'BROWN' },
                { id: 'hair', label: 'Hair', type: 'text', placeholder: 'BLACK' },
                { id: 'blood', label: 'Blood Type', type: 'text', placeholder: 'O POSITIVE' }
            ]},
            { section: 'Military History (Tables)', fields: [
                { id: 'assignments', label: 'Record of Assignments (Date - Org)', type: 'textarea', placeholder: '12 OCT 43 - 101st Airborne Div\n05 JUN 44 - 506th PIR' },
                { id: 'qualifications', label: 'Military Qualifications', type: 'textarea', placeholder: 'EXPERT INFANTRYMAN BADGE\nPARACHUTIST BADGE' },
            ]},
            { section: 'Remarks & Security', fields: [
                { id: 'security', label: 'Security Clearance', type: 'text', placeholder: 'SECRET' },
                { id: 'remarks', label: 'Remarks / Disciplinary Action', type: 'textarea', placeholder: 'AWOL 12 MAY 44 to 14 MAY 44. Reduced in rank.' }
            ]},
            { section: 'Оформление (Эффекты)', fields: [
                { id: 'stampSecret', label: 'Печать статуса секретности', type: 'checkbox' },
                { id: 'paperWear', label: 'Потертости бумаги', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Следы от кофе', type: 'checkbox' }
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

    renderPreview(data) {
        const page1 = `
            <div class="a4-page american-page ${data.paperWear ? 'effect-wear' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us"></div>' : ''}
                ${data.stampSecret ? `<div class="stamp-classified">${data.security || 'RESTRICTED'}</div>` : ''}
                
                <div class="am-header">
                    <span class="am-form-title">DA FORM 20 - ENLISTED PERSONNEL RECORD</span>
                    <span>WAR DEPARTMENT</span>
                </div>
                
                <div style="display:flex;">
                    <div style="flex:1;">
                        <!-- Block 1-4 -->
                        <div class="am-grid-row" style="border-top:1px solid #000;">
                            <div class="am-box am-w-half">
                                <span class="am-label">1. LAST NAME - FIRST NAME - MIDDLE INITIAL</span>
                                <span class="am-value">${data.lastName || ''} ${data.firstName || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">2. ARMY SERIAL NUMBER</span>
                                <span class="am-value">${data.serialNumber || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">3. GRADE</span>
                                <span class="am-value">${data.rank || ''}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box am-w-quart">
                                <span class="am-label">4. ARM OR SERVICE</span>
                                <span class="am-value">${data.branch || ''}</span>
                            </div>
                            <div class="am-box am-w-quart">
                                <span class="am-label">5. DATE OF BIRTH</span>
                                <span class="am-value">${data.dob || ''}</span>
                            </div>
                            <div class="am-box am-w-half">
                                <span class="am-label">6. PLACE OF BIRTH</span>
                                <span class="am-value">${data.pob || ''}</span>
                            </div>
                        </div>
                        
                        <div class="am-grid-row">
                            <div class="am-box">
                                <span class="am-label">7. PHYSICAL PROFILE</span>
                                <div style="display:flex; justify-content:space-between; margin-top:2px;">
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
                    <div class="am-box am-w-auto">
                        <span class="am-label">8. RECORD OF ASSIGNMENTS</span>
                        <table class="am-table" style="margin-top:2px;">
                            <thead><tr><th>DATE OF EFFECT</th><th>ORGANIZATION AND STATION</th></tr></thead>
                            <tbody>${this._renderTableRows(data.assignments)}</tbody>
                        </table>
                    </div>
                </div>
                
                <div class="am-grid-row">
                    <div class="am-box am-w-auto">
                        <span class="am-label">9. MILITARY QUALIFICATIONS / AWARDS</span>
                        <div class="am-text-value">
                            ${this._renderParagraphs(data.qualifications)}
                        </div>
                    </div>
                </div>
                
                <div class="am-text-area">
                    <span class="am-label">10. REMARKS</span>
                    <div class="am-text-value">
                        ${this._renderParagraphs(data.remarks)}
                    </div>
                </div>
                
                <div class="am-grid-row" style="margin-top:20px; border-top:1px solid #000;">
                    <div class="am-box am-w-third">
                        <span class="am-label">FINGERPRINT (RIGHT INDEX)</span>
                        <div class="fingerprint-box" style="margin:5px auto;">PRINT</div>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF INDIVIDUAL</span>
                    </div>
                    <div class="am-box am-w-auto" style="justify-content: flex-end; padding-bottom:10px;">
                        <span class="am-label" style="text-align:center; border-top:1px solid #000; padding-top:2px;">SIGNATURE OF PERSONNEL OFFICER</span>
                    </div>
                </div>
                
                <div class="page-num" style="margin-top: 10px;">PAGE 1 OF 1</div>
            </div>
        `;

        let result = page1;
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
