import { useCallback, useMemo } from "react";
import { useState } from "react";
import CustomRadio from "../../components/UI/CustomRadio/CustomRadio";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import TariffBtn from "../../components/UI/TariffBtn/TariffBtn";
import { numberWithSpaces } from "../../utils/numberWithSpaces";
import { vpsData1 } from "./vpsdata"
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/selectArrow.svg';
import { setDelectedTariff } from "../../features/vps/vpsSlice";
import { useDispatch } from "react-redux";


export default function VpsItem({
  tariff,
  datacenters,
  osPanel,
  selectOs,
  selectPanel
}) {
  const dispatch = useDispatch()
  const [currentDist, setCurrentDist] = useState(selectOs[0]);
  const dists = useMemo(() => selectOs.map(item => {
    return { label: item.description, value: item }
  }), [selectOs])

  const handleDists = useCallback(
    (value) => {
      setCurrentDist(value)
    },
    [],
  )


  const os = useMemo(() => {
    return currentDist.panel_type.map(item => {
      const osTypes = selectPanel.filter(el => el.name.includes(item))
      return osTypes.map(el => {
        return { label: el.description, value: el }
      })
    }).reduce((prev, cur) => [...prev, ...cur],)
  }, [currentDist, selectPanel])

  const [currentOs, setCurrentOs] = useState(os[0].value);


  const handleOs = useCallback(
    (value) => {
      setCurrentOs(value)
    },
    [],
  )

  const dataCenteres = useMemo(() => {
    return tariff.datacenters.map(item => {
      const dataCenter = datacenters.find(el => +el.id === +item)
      return { label: dataCenter.location, value: dataCenter }
    })
  }, [datacenters, tariff.datacenters])

  const [currentLocation, setCurrentLocation] = useState(dataCenteres[0].value);

  const handleDataCenter = useCallback(
    (datacenter) => {
      setCurrentLocation(datacenter)
    },
    [],
  )

  const backgroundColor = vpsData1[tariff.category_id].color
  const frequency = vpsData1[tariff.category_id].frequency
  const Icon = vpsData1[tariff.category_id].icon
  const dops = vpsData1[tariff.category_id].dops

  const [isDops, setIsDops] = useState(false);


  const handleDops = () => {
    setIsDops(prev => !prev)
  }
  const handleBubmit = () => {
    dispatch(setDelectedTariff({ currentOs, currentLocation, currentDist }))

  }
  return (
    <div className='vps-item' style={{ backgroundColor: backgroundColor }} >
      <div className="vps-item__icon">
        <Icon />
        <span>{tariff.name}</span>
      </div>
      <p className="vps-item__price">{`${numberWithSpaces(tariff.price_per_month)} ₽/мес.`}</p>
      <p className="vps-item__line"><span className="vps-item__cpu">CPU </span><span className="vps-item__frequency">{`${tariff.cpu_cores} × ${frequency}`} ГГц</span></p>
      <p className="vps-item__line"><span className="vps-item__cpu">RAM </span><span className="vps-item__frequency">{`${tariff.ram}`} МБ</span></p>
      <p className="vps-item__line"><span className="vps-item__cpu">DISK </span><span className="vps-item__frequency">{`${tariff.volume_disk} ${tariff.disk_type}`}</span></p>
      <div className="vps-item__dist-wrp">
        <p className="vps-item__dist_title">Дистрибутив</p>
        <CustomSelect
          options={dists}
          onChange={handleDists}
        />
      </div>
      <div className="vps-item__dist-wrp">
        <p className="vps-item__dist_title">Программное обеспечение</p>
        <CustomSelect
          options={os}
          onChange={handleOs}
        />
      </div>
      <div className="vps-item__data-centre">
        <p className="vps-item__dist_title">Дата-центр</p>
        <div className="vps-item__dist-radio">
          <CustomRadio
            id={tariff.id}
            options={dataCenteres}
            onChange={handleDataCenter}
          />
        </div>
      </div>
      <div onClick={handleDops} className="vps-item-dops-wrp">
        <div>
          {isDops
            ? (
              <div ><ArrowIcon /></div>
            ) : (
              <PlusIcon />
            )}
        </div>
        <p className="vps-item-dops-text">{dops}</p>
      </div>
      <div className="vps-item__btn">
        <TariffBtn onClick={handleBubmit}>ЗАКАЗАТЬ</TariffBtn>
      </div>
    </div>
  )
}