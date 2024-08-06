// prettier-ignore
const columnNames = ['Уровень', 'Наименование работ', 'Основная з/п', 'Оборудование', 'Накладные расходы','Сметная прибыль']

export default function MainArea() {
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
      </section>
    </>
  );
}
