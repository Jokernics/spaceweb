import { useMemo, useState } from 'react'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import './index.scss'
import VpsList from './VpsList'

export default function VpsSection({result}) {
  let { categories, vpsPlans, datacenters, osPanel, selectOs, selectPanel } = result

  const [currentCategoryId, setCurrentCategoryId] = useState('all');
  categories = categories.map(item => {
    return { label: item.name, value: item.id }
  })

  const handleSelecectedCategory = (id) => {
    setCurrentCategoryId(id)
  }

  const tariffs = useMemo(() => {
    if (currentCategoryId === 'all') return vpsPlans
    return vpsPlans.filter(plan => plan.category_id === currentCategoryId)
  }, [currentCategoryId, vpsPlans])

 

  return (

    <div className='vps-container'>
      <div className='vps__account'>
        <p className='vps__account_line-1'>аккаунт</p>
        <p className='vps__account_line-2'>заказать vps</p>
      </div>
      <div className="vps-wrp">
        <p className='vps-title-1'>Категория</p>
        <div className='vps-select-category'>
          <CustomSelect
            onChange={handleSelecectedCategory}
            options={[{ label: 'Все', value: 'all' }, ...categories]}
          />
        </div>
        <VpsList
          {...{ tariffs, datacenters, osPanel, selectOs, selectPanel }}
        />
      </div>
    </div>
  )
}