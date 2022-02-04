import { useCallback, useEffect, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { GroupCheckboxProps } from './interfaces'
import { Controller } from 'react-hook-form'
import * as S from './styles'

export function GroupCheckbox({
  items,
  name,
  control,
  error
}: GroupCheckboxProps): JSX.Element {
  const handleChecked = useCallback((values: string[], itemValue: string) => {
    let dataChecked: string[] = []
    if (values.length < 1) {
      dataChecked = [...values, itemValue]
    } else {
      if (values.includes(itemValue)) {
        dataChecked = values.filter(i => i !== itemValue)
      } else {
        dataChecked = [...values, itemValue]
      }
    }
    return dataChecked
  }, [])
  // const handleChecked = useCallback(
  //   (value: string) => {
  //     if (checkedItems.length === 0) {
  //       setCheckedItems([value])
  //       console.log('entrou em cima', checkedItems)
  //     } else {
  //       const hasChecked = checkedItems.filter(item => item === value)
  //       if (hasChecked.length > 0) {
  //         setCheckedItems(prevState => prevState.filter(item => item !== value))
  //         console.log('entrou no meio', hasChecked)
  //       } else {
  //         setCheckedItems(prevState => [...prevState, value])
  //         console.log('entrou embaixo', hasChecked)
  //       }
  //     }
  //   },
  //   [checkedItems]
  // )

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <S.Container>
            <S.Label>GroupCheckbox</S.Label>
            <S.Content>
              {items.map(item => (
                <Checkbox
                  key={item.value}
                  label={item.label}
                  checked={value.includes(item.value)}
                  onClick={() => onChange(handleChecked(value, item.value))}
                />
              ))}
            </S.Content>
            <S.Error>
              <p>{error}</p>
            </S.Error>
          </S.Container>
        )
      }}
      name={name}
      defaultValue={[]}
    />
  )
}
