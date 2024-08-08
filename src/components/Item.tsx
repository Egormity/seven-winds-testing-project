import { BsClipboardDataFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { dataType, useTableContext } from '../contexts/TableContext';
import { useState } from 'react';
import InputUseForm from './InputUseForm';
import { useForm } from 'react-hook-form';

export default function Item({ item }: { item: dataType }) {
  const { updateRow } = useTableContext();
  const { register, handleSubmit, formState } = useForm<SubmitEvent>();
  const { errors } = formState;

  // @ts-expect-error submit err
  const onSubmit: SubmitHandler<SubmitEvent> = (data: DataType) => {
    const newRow = {
      ...item,
      rowName: data.workName,
      salary: +data.salary,
      supportCosts: +data.spendings,
      equipmentCosts: +data.equipment,
      estimatedProfit: +data.income,
    };

    updateRow(newRow);
  };

  const { deleteRow } = useTableContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className='main-area__content__row main-area__content__row--item' onSubmit={handleSubmit(onSubmit)}>
      <div className='main-area__list--icon'>
        {!isOpen ? (
          <BsClipboardDataFill className='main-area__icon' onClick={() => setIsOpen(s => !s)} />
        ) : (
          <>
            <BsClipboardDataFill
              className='main-area__icon main-area__icon--add'
              onClick={() => setIsOpen(s => !s)}
            />
            <RiDeleteBin5Fill
              className='main-area__icon main-area__icon--delete'
              onClick={() => {
                setIsOpen(s => !s);
                deleteRow(item.id);
              }}
            />
          </>
        )}
      </div>

      {!isOpen ? (
        <>
          {' '}
          <div>{item.rowName}</div>
          <div>{item.salary}</div>
          <div>{item.equipmentCosts}</div>
          <div>{item.supportCosts}</div>
          <div>{item.estimatedProfit}</div>
        </>
      ) : (
        <>
          <button style={{ display: 'none' }}></button>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.rowName}
              inputName='workName'
              inputType='text'
              placeHolder='Наименование'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.salary}
              inputName='salary'
              inputType='number'
              placeHolder='З/п'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.equipmentCosts}
              inputName='equipment'
              inputType='number'
              placeHolder='Оборудование'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.supportCosts}
              inputName='spendings'
              inputType='number'
              placeHolder='Расходы'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.estimatedProfit}
              inputName='income'
              inputType='number'
              placeHolder='Прибыль'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>
        </>
      )}
    </form>
  );
}
