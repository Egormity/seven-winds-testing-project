import { useTableContext } from '../contexts/TableContext';
import AddForm from './AddForm';
import Item from './Item';
import Spinner from './Spinner';

// prettier-ignore
const columnNames = ['Уровень', 'Наименование работ', 'Основная з/п', 'Оборудование', 'Накладные расходы','Сметная прибыль']

export default function MainArea() {
  const { isPending, data } = useTableContext();

  return (
    <>
      <div className='main-area__names'>
        <div className='main-area__names__item'>
          <h1>Строительно-монтажные работы</h1>
        </div>
      </div>

      <section className='main-area__content'>
        <ul className='main-area__content__row main-area__content__row--names'>
          {columnNames.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>

        {isPending ? (
          <Spinner />
        ) : (
          <>
            <AddForm />
            {data && !isPending && data.length !== 0 && data.map(el => <Item key={el.id} item={el} />)}
          </>
        )}
      </section>
    </>
  );
}
