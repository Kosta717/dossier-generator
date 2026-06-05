// pdf-export.js — Полноценный PDF экспорт через html2canvas + jsPDF
// Каждая A4-страница рендерится ОТДЕЛЬНО, затем вставляется как изображение в PDF.
// Это даёт точное попадание: 1 страница документа = 1 страница PDF, без обрезки.
const PdfExport = {

    async exportPdf(templateName) {
        // Fallback: если библиотеки не загрузились — используем системную печать
        if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            console.warn('html2canvas or jsPDF not loaded — falling back to window.print()');
            const originalTitle = document.title;
            document.title = templateName || 'Досье';
            window.print();
            document.title = originalTitle;
            return;
        }

        const overlay = document.getElementById('loading-overlay');
        const loadingText = overlay.querySelector('.loading-text');
        overlay.classList.remove('hidden');

        try {
            // 1. Собираем все страницы из предпросмотра
            const pages = document.querySelectorAll('#preview-container .a4-page');
            if (!pages.length) {
                throw new Error('Нет страниц для экспорта');
            }

            loadingText.textContent = `Подготовка (${pages.length} стр.)...`;

            // 2. Рендер-область
            const renderArea = document.getElementById('pdf-render-area');
            renderArea.innerHTML = '';

            // Применяем глобальный шрифт к рендер-области
            const previewContainer = document.getElementById('preview-container');
            const fontClass = ['font-elite', 'font-courier', 'font-old'].find(
                cls => previewContainer.classList.contains(cls)
            ) || '';
            if (fontClass) renderArea.classList.add(fontClass);

            // Размеры A4 в мм и пикселях
            const A4_W_MM = 210;
            const A4_H_MM = 297;
            const SCALE = 2;          // Качество: 2x для чёткости
            const DPI = 96;
            const A4_W_PX = Math.round(A4_W_MM * DPI / 25.4); // ≈ 794px
            const A4_H_PX = Math.round(A4_H_MM * DPI / 25.4); // ≈ 1123px

            // 3. Создаём jsPDF документ
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true
            });

            // 4. Рендерим каждую страницу отдельно
            for (let i = 0; i < pages.length; i++) {
                loadingText.textContent = `Рендеринг стр. ${i + 1} / ${pages.length}...`;

                // Клонируем страницу в рендер-область
                const clone = pages[i].cloneNode(true);
                clone.style.cssText = `
                    width: ${A4_W_PX}px !important;
                    min-height: ${A4_H_PX}px !important;
                    height: ${A4_H_PX}px !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    margin: 0 !important;
                    overflow: hidden !important;
                    position: relative !important;
                `;

                renderArea.innerHTML = '';
                renderArea.appendChild(clone);

                // Ждём отрисовки (шрифты, data-URI фотографии, Canvas-подписи)
                await new Promise(r => setTimeout(r, 200));

                // Рендерим в canvas
                const canvas = await html2canvas(clone, {
                    scale: SCALE,
                    useCORS: true,
                    allowTaint: true,
                    logging: false,
                    width: A4_W_PX,
                    height: A4_H_PX,
                    windowWidth: A4_W_PX,
                    windowHeight: A4_H_PX,
                    scrollX: 0,
                    scrollY: 0,
                    backgroundColor: null,
                    x: 0,
                    y: 0,
                });

                // Конвертируем canvas в JPEG
                const imgData = canvas.toDataURL('image/jpeg', 0.92);

                // Добавляем страницу в PDF (первая уже создана)
                if (i > 0) {
                    pdf.addPage('a4', 'portrait');
                }

                // Вставляем изображение на полную страницу
                pdf.addImage(imgData, 'JPEG', 0, 0, A4_W_MM, A4_H_MM, undefined, 'FAST');
            }

            // 5. Сохраняем файл
            loadingText.textContent = 'Сохранение...';
            await new Promise(r => setTimeout(r, 100));

            const safeName = (templateName || 'Досье').replace(/[<>:"/\\|?*]/g, '_');
            pdf.save(`${safeName}.pdf`);

            loadingText.textContent = 'Готово!';
            await new Promise(r => setTimeout(r, 600));

        } catch (err) {
            console.error('PDF export error:', err);
            // При ошибке — предлагаем системную печать
            loadingText.textContent = 'Ошибка — открываем печать...';
            await new Promise(r => setTimeout(r, 1500));
            overlay.classList.add('hidden');
            const originalTitle = document.title;
            document.title = templateName || 'Досье';
            window.print();
            document.title = originalTitle;
            return;
        } finally {
            overlay.classList.add('hidden');
            // Очищаем рендер-область
            const renderArea = document.getElementById('pdf-render-area');
            renderArea.innerHTML = '';
            renderArea.className = '';
        }
    }
};