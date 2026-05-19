import './Pagination.css';

/**
 * Componente de paginación reutilizable.
 * Muestra botones para navegar entre páginas de resultados.
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination" id="pagination">
      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        id="pagination-prev"
      >
        ← Anterior
      </button>

      <div className="pagination__pages">
        {getPageNumbers().map((pageNum, index) =>
          pageNum === '...' ? (
            <span key={`dots-${index}`} className="pagination__dots">
              ···
            </span>
          ) : (
            <button
              key={pageNum}
              className={`pagination__btn pagination__btn--page ${
                pageNum === currentPage ? 'pagination__btn--active' : ''
              }`}
              onClick={() => onPageChange(pageNum)}
              aria-label={`Ir a página ${pageNum}`}
              aria-current={pageNum === currentPage ? 'page' : undefined}
              id={`pagination-page-${pageNum}`}
            >
              {pageNum}
            </button>
          )
        )}
      </div>

      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        id="pagination-next"
      >
        Siguiente →
      </button>
    </div>
  );
}
