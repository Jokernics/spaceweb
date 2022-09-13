
import VpsItem from "./VpsItem"



export default function VpsList({ tariffs, datacenters, osPanel, selectOs, selectPanel }) {


  return (
    <div className={`vps-list-container`}>
      <div className="vps-list-wrapper">
        {tariffs.map(tariff =>
          <VpsItem key={tariff.id}
            {...{tariff, datacenters, osPanel, selectOs, selectPanel}}
          />
        )}
      </div>
    </div>
  )
}