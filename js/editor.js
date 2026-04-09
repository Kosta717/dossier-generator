// Editor module — handles form rendering, data binding, and preview updates
const Editor = {
    currentTemplate: null,
    formData: {},
    photoData: null,
    sigCanvas: null,
    sigCtx: null,
    isDrawing: false,
    currentSigField: null,

    init(template) {
        this.currentTemplate = template;
        this.formData = this.loadData(template.id) || {};
        
        // Apply global font from data
        if (this.formData.globalFont) {
            const container = document.getElementById('preview-container');
            if (container) {
                container.classList.remove('font-elite', 'font-courier', 'font-old');
                container.classList.add(this.formData.globalFont);
            }
        }

        this.renderForm();
        this.updatePreview();
        this.initSignatureCanvas();
    },

    initSignatureCanvas() {
        this.sigCanvas = document.getElementById('signature-canvas');
        if (!this.sigCanvas) return;
        this.sigCtx = this.sigCanvas.getContext('2d');
        this.sigCtx.strokeStyle = '#222';
        this.sigCtx.lineWidth = 2.5;
        this.sigCtx.lineCap = 'round';
        this.sigCtx.lineJoin = 'round';

        const getPos = (e) => {
            const rect = this.sigCanvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        };

        const start = (e) => {
            this.isDrawing = true;
            const pos = getPos(e);
            this.sigCtx.beginPath();
            this.sigCtx.moveTo(pos.x, pos.y);
            e.preventDefault();
        };

        const draw = (e) => {
            if (!this.isDrawing) return;
            const pos = getPos(e);
            this.sigCtx.lineTo(pos.x, pos.y);
            this.sigCtx.stroke();
            e.preventDefault();
        };

        const stop = () => { this.isDrawing = false; };

        this.sigCanvas.addEventListener('mousedown', start);
        this.sigCanvas.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', stop);

        this.sigCanvas.addEventListener('touchstart', start, { passive: false });
        this.sigCanvas.addEventListener('touchmove', draw, { passive: false });
        this.sigCanvas.addEventListener('touchend', stop);
    },

    renderForm() {
        const form = document.getElementById('editor-form');
        const sections = this.currentTemplate.getFields();
        let html = '';

        for (const section of sections) {
            html += `<div class="form-section">`;
            html += `<div class="form-section-title">${section.section}</div>`;

            for (const field of section.fields) {
                html += `<div class="form-group">`;

                if (field.type === 'photo') {
                    html += `
                        <label class="form-label">${field.label}</label>
                        <div class="photo-upload" id="photo-upload-${field.id}">
                            <input type="file" accept="image/*" data-field="${field.id}" onchange="Editor.handlePhoto(event, '${field.id}')">
                            ${this.formData[field.id] 
                                ? `<img src="${this.formData[field.id]}" alt="Photo" class="${this.formData[field.id + '_filter'] || ''}">`
                                : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                                   <span>Загрузить фото</span>`
                            }
                        </div>
                        <div style="margin-top: 8px; margin-bottom: 12px;">
                            <select class="form-select" data-field="${field.id}_filter" onchange="Editor.handleInput(event)" style="font-size: 13px;">
                                <option value="">Оригинал (без фильтра)</option>
                                <option value="filter-bw" ${this.formData[field.id + '_filter'] === 'filter-bw' ? 'selected' : ''}>Черно-белое</option>
                                <option value="filter-sepia" ${this.formData[field.id + '_filter'] === 'filter-sepia' ? 'selected' : ''}>Сепия (старое фото)</option>
                                <option value="filter-contrast" ${this.formData[field.id + '_filter'] === 'filter-contrast' ? 'selected' : ''}>Черно-белое контрастное</option>
                            </select>
                        </div>
                    `;
                } else if (field.type === 'select') {
                    html += `<label class="form-label">${field.label}</label>`;
                    html += `<select class="form-select" data-field="${field.id}" onchange="Editor.handleInput(event)">`;
                    html += `<option value="">— выбрать —</option>`;
                    for (const opt of field.options) {
                        const val = typeof opt === 'object' ? opt.value : opt;
                        const label = typeof opt === 'object' ? opt.label : opt;
                        const selected = this.formData[field.id] === val ? 'selected' : '';
                        html += `<option value="${val}" ${selected}>${label}</option>`;
                    }
                    html += `</select>`;
                } else if (field.type === 'signature') {
                    html += `<label class="form-label">${field.label}</label>`;
                    html += `
                        <div class="signature-preview" onclick="Editor.openSignature('${field.id}')">
                            ${this.formData[field.id] 
                                ? `<img src="${this.formData[field.id]}" alt="Signature">`
                                : `<span>Нажмите, чтобы расписаться</span>`
                            }
                        </div>
                    `;
                } else if (field.type === 'textarea') {
                    html += `<label class="form-label">${field.label}</label>`;
                    html += `<textarea class="form-textarea" data-field="${field.id}" 
                        placeholder="${field.placeholder || ''}" 
                        oninput="Editor.handleInput(event)">${this.formData[field.id] || ''}</textarea>`;
                } else if (field.type === 'checkbox') {
                    html += `
                        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--text-primary);">
                            <input type="checkbox" data-field="${field.id}" 
                                ${this.formData[field.id] ? 'checked' : ''}
                                onchange="Editor.handleCheckbox(event)"
                                style="width:16px;height:16px;cursor:pointer;">
                            ${field.label}
                        </label>
                    `;
                } else {
                    html += `<label class="form-label">${field.label}</label>`;
                    html += `<input type="text" class="form-input" data-field="${field.id}" 
                        value="${this.formData[field.id] || ''}" 
                        placeholder="${field.placeholder || ''}" 
                        oninput="Editor.handleInput(event)">`;
                }

                html += `</div>`;
            }

            html += `</div>`;
        }

        form.innerHTML = html;

        // Set global font selector value if exists
        const fontSelector = document.getElementById('font-selector');
        if (fontSelector && this.formData.globalFont) {
            fontSelector.value = this.formData.globalFont;
        }
    },

    handleInput(event) {
        const field = event.target.dataset.field;
        this.formData[field] = event.target.value;
        
        if (field.endsWith('_filter')) {
            const photoField = field.replace('_filter', '');
            const uploadDiv = document.getElementById(`photo-upload-${photoField}`);
            if (uploadDiv) {
                const img = uploadDiv.querySelector('img');
                if (img) img.className = this.formData[field] || '';
            }
        }
        
        this.updatePreview();
    },

    handleCheckbox(event) {
        const field = event.target.dataset.field;
        this.formData[field] = event.target.checked;
        this.updatePreview();
    },

    handlePhoto(event, fieldId) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            this.formData[fieldId] = e.target.result;
            
            // Update upload preview
            const uploadDiv = document.getElementById(`photo-upload-${fieldId}`);
            const existingImg = uploadDiv.querySelector('img');
            if (existingImg) {
                existingImg.src = e.target.result;
            } else {
                // Remove placeholder content but keep input
                const input = uploadDiv.querySelector('input');
                uploadDiv.innerHTML = '';
                uploadDiv.appendChild(input);
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Photo';
                img.className = this.formData[`${fieldId}_filter`] || '';
                uploadDiv.appendChild(img);
            }

            this.updatePreview();
        };
        reader.readAsDataURL(file);
    },

    updatePreview() {
        const container = document.getElementById('preview-container');
        container.innerHTML = this.currentTemplate.renderPreview(this.formData);
    },

    handleGlobalFont(event) {
        const fontValue = event.target.value;
        const container = document.getElementById('preview-container');
        if (container) {
            container.classList.remove('font-elite', 'font-courier', 'font-old');
            container.classList.add(fontValue);
        }
        this.formData.globalFont = fontValue;
        this.saveData(); // Save to persist choice
    },

    openSignature(fieldId) {
        this.currentSigField = fieldId;
        const modal = document.getElementById('signature-modal');
        modal.classList.remove('hidden');
        this.clearSignature();
    },

    closeSignature() {
        document.getElementById('signature-modal').classList.add('hidden');
    },

    clearSignature() {
        if (this.sigCtx) {
            this.sigCtx.clearRect(0, 0, this.sigCanvas.width, this.sigCanvas.height);
        }
    },

    saveSignature() {
        const dataUrl = this.sigCanvas.toDataURL('image/png');
        this.formData[this.currentSigField] = dataUrl;
        this.renderForm();
        this.updatePreview();
        this.closeSignature();
    },

    saveData(templateId) {
        const key = `dossier_${templateId || this.currentTemplate.id}`;
        // Save everything except photo (may be too large for some browsers)
        const dataToSave = { ...this.formData };
        try {
            localStorage.setItem(key, JSON.stringify(dataToSave));
            return true;
        } catch (e) {
            // If localStorage is full, try without photos
            const photoFields = ['photo'];
            photoFields.forEach(f => delete dataToSave[f]);
            try {
                localStorage.setItem(key, JSON.stringify(dataToSave));
                return true;
            } catch (e2) {
                console.error('Failed to save data:', e2);
                return false;
            }
        }
    },

    loadData(templateId) {
        const key = `dossier_${templateId}`;
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            return null;
        }
    },

    importData(data) {
        this.formData = data || {};
        this.renderForm();
        this.updatePreview();
    },

    getPreviewPages() {
        const container = document.getElementById('preview-container');
        return container.querySelectorAll('.a4-page');
    }
};
