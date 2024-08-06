import { useTableContext } from '../contexts/TableContext';
import AddForm from './AddForm';
import Spinner from './Spinner';

// prettier-ignore
const columnNames = ['Уровень', 'Наименование работ', 'Основная з/п', 'Оборудование', 'Накладные расходы','Сметная прибыль']

export default function MainArea() {
  const { isPending, error, data } = useTableContext();

  console.log(isPending, error, data);

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

        {error && <h1>An error occured...</h1>}
        {isPending && <Spinner />}
        {!error && !isPending && data.length === 0 && <AddForm />}

        {!error && !isPending && data.length !== 0 && data.map(el => <h1>{el.equipmentCosts}</h1>)}
      </section>
    </>
  );
}
