export const getVpsData = async () => {
  const req = await fetch('https://api.sweb.ru/notAuthorized/', {
    method: 'POST',
    body: JSON.stringify({ 'jsonrpc': "2.0", "method": "vpsOsConfig", "params": {} })
  })
  const data = await req.json()
  return data
}