// PDF Export module
const PdfExport = {

    async exportPdf(templateName) {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.remove('hidden');

        try {
            // Clone preview pages into the render area for clean capture
            const renderArea = document.getElementById('pdf-render-area');
            const previewContainer = document.getElementById('preview-container');
            const pages = previewContainer.querySelectorAll('.a4-page');

            if (pages.length === 0) {
                alert('Нет страниц для экспорта');
                overlay.classList.add('hidden');
                return;
            }

            // Build a container with pages for rendering
            renderArea.innerHTML = '';
            const pagesClone = [];

            pages.forEach((page, i) => {
                const clone = page.cloneNode(true);
                clone.style.margin = '0';
                clone.style.boxShadow = 'none';
                clone.style.pageBreakAfter = 'always';
                renderArea.appendChild(clone);
                pagesClone.push(clone);
            });

            // Generate PDF using html2pdf
            const opt = {
                margin: 0,
                filename: `${templateName || 'dossier'}.pdf`,
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    logging: false,
                    width: 794,  // 210mm at 96dpi
                    windowWidth: 794
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['css', 'legacy'] }
            };

            // Generate page by page and merge
            const pdf = await html2pdf().set(opt).from(pagesClone[0]).toPdf().get('pdf');

            for (let i = 1; i < pagesClone.length; i++) {
                pdf.addPage();
                const canvas = await html2canvas(pagesClone[i], {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    logging: false,
                    width: 794,
                    windowWidth: 794
                });
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            }

            pdf.save(`${templateName || 'dossier'}.pdf`);

            // Clean up
            renderArea.innerHTML = '';
        } catch (err) {
            console.error('PDF export error:', err);
            alert('Ошибка при генерации PDF. Попробуйте ещё раз.');
        } finally {
            overlay.classList.add('hidden');
        }
    }
};
