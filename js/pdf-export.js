// pdf-export.js — Полная поддержка всех CSS-эффектов через нативную печать
const PdfExport = {
    async exportPdf(templateName) {
        // Устанавливаем заголовок страницы (он станет именем файла при сохранении)
        const originalTitle = document.title;
        document.title = templateName || 'dossier';

        // Вызываем системное окно печати
        window.print();

        // Возвращаем исходный заголовок во вкладку браузера
        document.title = originalTitle;
    }
};