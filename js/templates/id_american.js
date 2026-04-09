// ID American Template
const IdAmericanTemplate = {
    id: 'id_american',
    name: 'US Army ID',
    description: 'Военное удостоверение личности US Army. Картонная карточка.',
    icon: '👤',
    
    getFields() {
        return [
            { section: 'Personnel Data', fields: [
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'JOHN D. DOE' },
                { id: 'serial', label: 'Service Number', type: 'text', placeholder: '32 456 789' },
                { id: 'rank', label: 'Grade / Rank', type: 'text', placeholder: 'Technical Sergeant' },
                { id: 'organization', label: 'Organization', type: 'text', placeholder: '101st Airborne Div' },
                { id: 'signature', label: 'Signature', type: 'signature' },
                { id: 'photo', label: 'Photo', type: 'photo' }
            ]},
            { section: 'Effects', fields: [
                { id: 'paperWear', label: 'Paper Aging', type: 'checkbox' },
                { id: 'burned', label: 'Burned Edges', type: 'checkbox' },
                { id: 'holes', label: 'Bullet Holes', type: 'checkbox' }
            ]}
        ];
    },

    renderPreview(data) {
        return `
            <div class="id-card-wrapper">
                <div class="id-usa-card ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                    <div class="id-usa-header">
                        <span>WAR DEPARTMENT</span>
                        <span>OFFICIAL ID</span>
                    </div>
                    <div style="font-size:12px; font-weight:700; margin-bottom:10px;">IDENTIFICATION CARD</div>
                    
                    <div style="font-size:11px; line-height:1.8;">
                        <div style="border-bottom:0.5px solid #666;"><span style="color:#666; font-size:8px;">NAME:</span> <strong>${data.name || ''}</strong></div>
                        <div style="border-bottom:0.5px solid #666;"><span style="color:#666; font-size:8px;">SERIAL NO:</span> <strong>${data.serial || ''}</strong></div>
                        <div style="border-bottom:0.5px solid #666;"><span style="color:#666; font-size:8px;">GRADE:</span> ${data.rank || ''}</div>
                        <div style="border-bottom:0.5px solid #666;"><span style="color:#666; font-size:8px;">ORG:</span> ${data.organization || ''}</div>
                        <div style="margin-top:15px; display:flex; align-items:center; gap:10px;">
                            <span style="font-size:8px; color:#666;">SIGNATURE:</span>
                            ${data.signature ? `<img src="${data.signature}" style="height:30px;filter:contrast(1.5);">` : '____________________'}
                        </div>
                    </div>

                    <div class="id-usa-photo">
                        ${data.photo ? `<img src="${data.photo}" class="${data.photo_filter || ''}">` : ''}
                    </div>

                    <div class="id-usa-stamp">
                        WASHINGTON<br>D.C.
                    </div>
                </div>
            </div>
        `;
    }
};
