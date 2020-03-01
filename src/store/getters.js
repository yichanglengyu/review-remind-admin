const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.sysuser.token,
  avatar: state => state.sysuser.avatar,
  name: state => state.sysuser.name
}
export default getters
