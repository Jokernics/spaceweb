export default function SideBarItem({Icon, title}) {
  return (
      <div className="link-item">
        <Icon  />
        <p className="link-title" >{title}</p>
      </div>
  )
}