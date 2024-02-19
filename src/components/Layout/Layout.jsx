// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="layout px-8 pt-4 overflow-hidden flex flex-col h-screen">{children}</div>
  )
}
export default Layout;