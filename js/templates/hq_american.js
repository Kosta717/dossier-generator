// HQ American Template
const HqAmericanTemplate = {
    id: 'hq_american',
    name: 'War Dept. Memo',
    description: 'Официальный меморандум Военного министерства США (War Department). Машинописный формат с галочками секретности.',
    icon: '📁',
    
    getFields() {
        return [
            { section: 'Classification (Уровень секретности)', fields: [
                { id: 'classLevel', label: 'Уровень секретности', type: 'select', options: [
                    { value: 'top_secret', label: 'TOP SECRET' },
                    { value: 'secret', label: 'SECRET' },
                    { value: 'confidential', label: 'CONFIDENTIAL' },
                    { value: 'restricted', label: 'RESTRICTED' }
                ]},
                { id: 'routing', label: 'Приоритет', type: 'select', options: [
                    { value: 'urgent', label: 'URGENT' },
                    { value: 'priority', label: 'PRIORITY' },
                    { value: 'routine', label: 'ROUTINE' }
                ]}
            ]},
            { section: 'Header (Шапка)', fields: [
                { id: 'date', label: 'Date (Дата)', type: 'text', placeholder: '6 June 1944' },
                { id: 'to', label: 'MEMORANDUM FOR (Кому)', type: 'text', placeholder: 'The Chief of Staff, U.S. Army' },
                { id: 'subject', label: 'SUBJECT (Тема)', type: 'text', placeholder: 'Operation OVERLORD - Status Report' }
            ]},
            { section: 'Content (Текст)', fields: [
                { id: 'body', label: 'Message (Сообщение)', type: 'textarea', placeholder: '1. This is to inform you that...\n2. Recommend immediate action.' }
            ]},
            { section: 'Signature (Подпись)', fields: [
                { id: 'signOff', label: 'Прощание', type: 'text', placeholder: 'For the Commanding General:' },
                { id: 'signature', label: 'Рукописная подпись', type: 'signature' },
                { id: 'sigName', label: 'Имя (печатными)', type: 'text', placeholder: 'G. C. MARSHALL' },
                { id: 'sigTitle', label: 'Должность', type: 'text', placeholder: 'Chief of Staff' }
            ]},
            { section: 'Aesthetics (Оформление)', fields: [
                { id: 'paperWear', label: 'Paper Aging', type: 'checkbox' },
                { id: 'redStamp', label: 'Красный штамп секретности поверх текста', type: 'checkbox' },
                { id: 'coffeeStain', label: 'Пятна от кофе', type: 'checkbox' },
                { id: 'burned', label: 'Burned Edges', type: 'checkbox' },
                { id: 'holes', label: 'Bullet Holes', type: 'checkbox' }
            ]}
        ];
    },

    _renderParagraphs(text) {
        if (!text) return '';
        return text.split('\n').filter(l => l.trim()).map(line => `<p>${line.trim()}</p>`).join('');
    },

    renderPreview(data) {
        const cl = data.classLevel || 'top_secret';
        const rt = data.routing || 'priority';

        const page1 = `
            <div class="a4-page hq-american-page ${data.paperWear ? 'effect-wear' : ''} ${data.burned ? 'effect-burned' : ''} ${data.holes ? 'effect-holes' : ''}">
                ${data.coffeeStain ? '<div class="effect-coffee-us"></div>' : ''}
                ${data.redStamp ? `<div class="ha-red-stamp">${cl.replace('_', ' ')}</div>` : ''}

                <div class="ha-header-block">
                    <div class="ha-seal">
                        <div class="ha-seal-text">
                            WAR OFFICE<br>•<br>U.S.A.
                        </div>
                    </div>
                    <div class="ha-department-titles">
                        <div class="ha-title-main">WAR DEPARTMENT</div>
                        <div class="ha-title-sub">WASHINGTON 25, D.C.</div>
                    </div>
                </div>

                <!-- Classification Checkboxes Grid -->
                <div class="ha-class-grid">
                    <div class="ha-class-box">
                        <div class="ha-check ${cl === 'top_secret' ? 'checked' : ''}"></div>
                        <label>TOP SECRET</label>
                    </div>
                    <div class="ha-class-box">
                        <div class="ha-check ${cl === 'secret' ? 'checked' : ''}"></div>
                        <label>SECRET</label>
                    </div>
                    <div class="ha-class-box">
                        <div class="ha-check ${cl === 'confidential' ? 'checked' : ''}"></div>
                        <label>CONFIDENTIAL</label>
                    </div>
                    <div class="ha-class-box">
                        <div class="ha-check ${cl === 'restricted' ? 'checked' : ''}"></div>
                        <label>RESTRICTED</label>
                    </div>

                    <div class="ha-class-box" style="margin-left: 40px;">
                        <div class="ha-check ${rt === 'urgent' ? 'checked' : ''}"></div>
                        <label class="ha-lbl-routing">URGENT</label>
                    </div>
                    <div class="ha-class-box">
                        <div class="ha-check ${rt === 'priority' ? 'checked' : ''}"></div>
                        <label class="ha-lbl-routing">PRIORITY</label>
                    </div>
                    <div class="ha-class-box">
                        <div class="ha-check ${rt === 'routine' ? 'checked' : ''}"></div>
                        <label class="ha-lbl-routing">ROUTINE</label>
                    </div>
                </div>

                <div class="ha-date-row">
                    <div class="ha-date-label">DATE:</div>
                    <div class="ha-date-val">${data.date || ''}</div>
                </div>

                <div class="ha-memo-row">
                    <div class="ha-memo-label">MEMORANDUM FOR:</div>
                    <div class="ha-memo-val">${data.to || ''}</div>
                </div>
                <div class="ha-memo-row">
                    <div class="ha-memo-label" style="padding-left: 28px;">SUBJECT:</div>
                    <div class="ha-memo-val">${data.subject || ''}</div>
                </div>

                <div class="ha-body">
                    ${this._renderParagraphs(data.body)}
                </div>

                <div class="ha-footer">
                    <div class="ha-sig-block">
                        <div style="margin-bottom: 25px;">${data.signOff || 'For the Commanding General:'}</div>
                        <div class="ha-sig-line">
                            ${data.signature ? `<img src="${data.signature}" style="height:50px;filter:contrast(1.5);">` : ''}
                        </div>
                        <div class="ha-sig-typed">${data.sigName || ''}</div>
                        <div class="ha-sig-title">${data.sigTitle || ''}</div>
                    </div>
                </div>

                <div class="ha-bottom-stamp">${cl.replace('_', ' ')}</div>
            </div>
        `;

        return page1;
    }
};
