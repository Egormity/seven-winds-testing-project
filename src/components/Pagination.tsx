import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Spinner from './Spinner';
import { useTableContext } from '../contexts/TableContext';
import { ITEMS_PER_PAGE } from '../utils/constants';

export default function Pagination({ count }: { count: number | undefined }) {
  const { activePage, setActivePage } = useTableContext();

  if (!count)
    return (
      <div className=''>
        <Spinner />
      </div>
    );

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  function prevPage() {
    const prev = activePage === 1 ? activePage : activePage - 1;
    setActivePage(prev);
  }

  function nextPage() {
    const next = activePage === pageCount ? activePage : activePage + 1;
    setActivePage(next);
  }

  return (
    <div className='pagination'>
      <p>
        Showing {(activePage - 1) * ITEMS_PER_PAGE + 1} &mdash;{' '}
        {activePage === pageCount ? count : activePage * ITEMS_PER_PAGE} of {count} results
      </p>

      <div className='pagination__buttons-container'>
        <button disabled={activePage === 1} onClick={prevPage} className='pagination__button'>
          <HiChevronLeft />
        </button>

        {pageCount && activePage ? (
          <p>
            {activePage} / {pageCount}
          </p>
        ) : (
          <Spinner />
        )}

        <button disabled={activePage === pageCount} onClick={nextPage} className='pagination__button'>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
