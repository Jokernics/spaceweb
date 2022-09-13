import { useMemo, useState } from 'react'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import './index.scss'
import VpsList from './VpsList'

export default function VpsSection({ result }) {
  let { categories, vpsPlans, datacenters, osPanel, selectOs, selectPanel } = result

  
  categories = useMemo(() => {
    let all = categories.map(item => {
      return { label: item.name, value: item.id }
    })
    all = [{ label: 'Все', value: 'all' }, ...all]
    return all
  }, [categories])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleSelecectedCategory = (category) => {
    setCurrentCategory(category)
  }

  const tariffs = useMemo(() => {
    if (currentCategory.value === 'all') return vpsPlans
    return vpsPlans.filter(plan => plan.category_id === currentCategory.value)
  }, [currentCategory, vpsPlans])

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
            value={currentCategory}
            onChange={handleSelecectedCategory}
            options={categories}
          />
        </div>
        <VpsList
          {...{ tariffs, datacenters, osPanel, selectOs, selectPanel }}
        />
      </div>
    </div>
  )
}