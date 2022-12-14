import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/selectArrow.svg';
import CustomRadio from "../../components/UI/CustomRadio/CustomRadio";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import TariffBtn from "../../components/UI/TariffBtn/TariffBtn";
import { setDelectedTariff } from "../../features/vps/vpsSlice";
import { numberWithSpaces } from "../../utils/numberWithSpaces";
import { vpsData1 } from "./vpsdata";


export default function VpsItem({
  tariff,
  datacenters,
  osPanel,
  selectOs,
  selectPanel
}) {
  const dispatch = useDispatch()
  const [price, setPrice] = useState(tariff.price_per_month);
  const dists = useMemo(() => selectOs.map(item => {
    return { label: item.description, value: item }
  }), [selectOs])
  const [currentDist, setCurrentDist] = useState(dists[0]);

  const handleDists = useCallback(
    (value) => {
      setCurrentDist(value)
    },
    [],
  )


  const os = useMemo(() => {
    return currentDist.value.panel_type.map(item => {
      const osTypes = selectPanel.filter(el => el.name.includes(item))
      return osTypes.map(el => {
        return { label: el.description, value: el }
      })
    }).reduce((prev, cur) => [...prev, ...cur],)
  }, [currentDist, selectPanel])

  const [currentOs, setCurrentOs] = useState(os[0]);


  const handleOs = useCallback(
    (value) => {
      const total = tariff.price_per_month + value.value.price
      setPrice(total)
      setCurrentOs(value)
    },
    [tariff.price_per_month],
  )


  const dataCenteres = useMemo(() => {
    return tariff.datacenters.map(item => {
      const dataCenter = datacenters.find(el => +el.id === +item)
      return { label: dataCenter.location, value: dataCenter }
    })
  }, [datacenters, tariff.datacenters])

  const [currentLocation, setCurrentLocation] = useState(dataCenteres[0]);

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
    dispatch(setDelectedTariff({ 
      tariff,
      dist: currentDist.value,
      os: currentOs.value, 
      location: currentLocation.value, 
      dops: isDops ? dops : null
    }))
  }
  return (
    <div className='vps-item' style={{ backgroundColor: backgroundColor }} >
      <div className="vps-item__icon">
        <Icon />
        <span>{tariff.name}</span>
      </div>
      <p className="vps-item__price">{`${numberWithSpaces(price)} ???/??????.`}</p>
      <p className="vps-item__line"><span className="vps-item__cpu">CPU </span><span className="vps-item__frequency">{`${tariff.cpu_cores} ?? ${frequency}`} ??????</span></p>
      <p className="vps-item__line"><span className="vps-item__cpu">RAM </span><span className="vps-item__frequency">{`${tariff.ram}`} ????</span></p>
      <p className="vps-item__line"><span className="vps-item__cpu">DISK </span><span className="vps-item__frequency">{`${tariff.volume_disk} ${tariff.disk_type}`}</span></p>
      <div className="vps-item__dist-wrp">
        <p className="vps-item__dist_title">??????????????????????</p>
        <CustomSelect
          value={currentDist}
          options={dists}
          onChange={handleDists}
        />
      </div>
      <div className="vps-item__dist-wrp">
        <p className="vps-item__dist_title">?????????????????????? ??????????????????????</p>
        <CustomSelect
          value={currentOs}
          options={os}
          onChange={handleOs}
        />
      </div>
      <div className="vps-item__data-centre">
        <p className="vps-item__dist_title">????????-??????????</p>
        <div className="vps-item__dist-radio">
          <CustomRadio
            value={currentLocation}
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
        <TariffBtn onClick={handleBubmit}>????????????????</TariffBtn>
      </div>
    </div>
  )
}