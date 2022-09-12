import { ReactComponent as BasketIcon } from '../../../assets/images/basket.svg'
import { ReactComponent as AccountIcon } from '../../../assets/images/account.svg'
import { ReactComponent as Profile } from '../../../assets/images/Profile.svg'
import { ReactComponent as FinancesIcon } from '../../../assets/images/Finances.svg'
import { ReactComponent as ServiceIcon } from '../../../assets/images/Service.svg'
import { ReactComponent as ServersIcon } from '../../../assets/images/servers.svg'
import { ReactComponent as MonitoringIcon } from '../../../assets/images/monitoring.svg'
import { ReactComponent as DomainIcon } from '../../../assets/images/domens.svg'
import { ReactComponent as MyDomainsIcon } from '../../../assets/images/My_domains.svg'
import { ReactComponent as DomainsBonusIcon } from '../../../assets/images/Domains_bonus.svg'
import { ReactComponent as DomainsPersonsIcon } from '../../../assets/images/Domains_persons.svg'
import { ReactComponent as SslIcon } from '../../../assets/images/SSL.svg'
import { ReactComponent as ShopIcon } from '../../../assets/images/Shop.svg'
import { ReactComponent as SeoIcon } from '../../../assets/images/seo.svg'
import { ReactComponent as HelpIcon } from '../../../assets/images/Help.svg'
import { ReactComponent as IdeaIcon } from '../../../assets/images/idea.svg'

export const sidebarData = [
  { to: '/vps', title: 'Заказать Vps', icon: BasketIcon },
  {
    to: '/account', title: 'АККАУНТ', icon: AccountIcon, nastedLinks:
      [{ to: '/account/profile', title: 'Профиль', icon: Profile },
      { to: '/account/finances', title: 'Финансы', icon: FinancesIcon },
      { to: '/account/service', title: 'Услуги', icon: ServiceIcon }]
  },
  { to: '/servers', title: 'СЕРВЕРЫ', icon: ServersIcon },
  { to: '/monitoring', title: 'МОНИТОРИНГ', icon: MonitoringIcon },
  {
    to: '/domains', title: 'ДОМЕНЫ', icon: DomainIcon, nastedLinks:
      [{ to: '/domains/mydomains', title: 'Мои домены', icon: MyDomainsIcon },
      { to: '/domains/domainsBonus', title: 'Доменные бонусы', icon: DomainsBonusIcon },
      { to: '/domains/domainspersons', title: 'Доменные персоны', icon: DomainsPersonsIcon }]
  },
  { to: '/ssl', title: 'SSL', icon: SslIcon },
  { to: '/shop', title: 'МАГАЗИН', icon: ShopIcon },
  { to: '/seo', title: 'SEO И РЕКЛАМА', icon: SeoIcon },
  { to: '/help', title: 'ПОДДЕРЖКА', icon: HelpIcon },
  { to: '/idea', title: 'ЕСТЬ ИДЕЯ', icon: IdeaIcon },
]