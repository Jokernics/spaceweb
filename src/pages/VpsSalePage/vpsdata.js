import { ReactComponent as KvmIcon } from '../../assets/images/tariff_kvm.svg';
import { ReactComponent as HddIcon } from '../../assets/images/tariff_hdd.svg';
import { ReactComponent as TurboIcon } from '../../assets/images/tariff_turbo.svg';


export const vpsData1 = {
    1: {
        icon: KvmIcon,
        color: '#E0F6FC',
        frequency: '2,8',
        dops: '2 IP-адреса (lPv4 + lPv6) 3 резервных копии'
    },
    2: {
        icon: HddIcon, color: '#C4EBF8', frequency: '2,1', dops: '2 IP-адреса (lPv4 + lPv6)'
    },
    3: {
        icon: TurboIcon, color: '#ECFDF7', frequency: '5', dops: '2 IP-адреса (lPv4 + lPv6) 3 резервных копии'
    }
}