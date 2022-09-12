import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVpsData } from '../../features/vps/vpsSlice'
import './index.scss'
import VpsSection from './VpsSection'

export default function VpsSalePage() {
  const {isVpsDataLoading, vpsDataError, vpsData} = useSelector(state=> state.vps)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchVpsData())
  }, [dispatch]);

  if (vpsDataError) return <h1>{vpsDataError}</h1>
  if (isVpsDataLoading) return <p>Loading...</p>
  if (vpsData) {
    return (
      <>
        <VpsSection result={vpsData.result} />
      </>
    )
  }
  
}