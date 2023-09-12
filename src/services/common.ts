import { OfficeIP } from '@/common/type'
import request from '@/utils/request'

export default {
  isInOffice: async () => {
    const data = await request.get<{ ip: string }>('https://fc.xiongmaoboshi.com/h5/tool/client/ip')
    return OfficeIP.includes((data as any)?.ip)
  },
}
