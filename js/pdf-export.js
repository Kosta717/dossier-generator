// pdf-export.js (исправленная версия)
const PdfExport = {
    async exportPdf(templateName) {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.remove('hidden');

        try {
            const previewContainer = document.getElementById('preview-container');
            const pages = previewContainer.querySelectorAll('.a4-page');

            if (pages.length === 0) {
                alert('Нет страниц для экспорта');
                overlay.classList.add('hidden');
                return;
            }

            // Создаём временный контейнер с теми же классами, что и у preview-container
            const renderArea = document.createElement('div');
            renderArea.className = previewContainer.className;

            Object.assign(renderArea.style, {
                position: 'fixed',
                left: '0',
                top: '0',
                width: '210mm',
                background: 'white',
                zIndex: '-10000',
                opacity: '1',
                visibility: 'visible',
                pointerEvents: 'none'
            });

            document.body.appendChild(renderArea);

            // Клонируем страницы, убираем масштабирование и задаём точные размеры
            pages.forEach((page) => {
                const clone = page.cloneNode(true);
                clone.style.transform = 'none';
                clone.style.margin = '0 auto';
                clone.style.boxShadow = 'none';
                clone.style.pageBreakAfter = 'always';
                clone.style.width = '210mm';
                clone.style.height = '297mm';
                renderArea.appendChild(clone);
            });

            // Ждём загрузки шрифтов и рендеринга стилей чуть дольше для стабильности
            await document.fonts.ready;
            await new Promise(resolve => setTimeout(resolve, 1000));

            const opt = {
                margin: 0,
                filename: `${templateName || 'dossier'}.pdf`,
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: {
                    scale: 2.0,            // Оптимально для качества и памяти
                    useCORS: true,
                    allowTaint: false,
                    logging: false,
                    backgroundColor: '#ffffff',
                    windowWidth: 1024,      // Стабильная ширина для захвата
                    windowHeight: 1448
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compress: true
                },
                pagebreak: { mode: ['css', 'legacy'] }
            };

            await html2pdf().set(opt).from(renderArea).save();
            document.body.removeChild(renderArea);

        } catch (err) {
            console.error('PDF export error:', err);
            alert('Ошибка при генерации PDF. Проверьте консоль (F12).');
        } finally {
            overlay.classList.add('hidden');
        }
    }
};