
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import type { NextApiRequest, NextApiResponse } from 'next'
  import { supabase } from '../../utils/supabase'
  
  type Data = {
    name: string
  }
  
  export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<any>
  ) {
      const { data, error } = await supabase
          .from('fields')
          .select(`
            id,
            name,
            booking_view(
                name,
                book_time
            )
          `)
  
    const dataParsed = data != null && parseTimeToInt(data) 
        
      res.status(200).json(dataParsed)
  }
  
const parseTimeToInt = (data: any[]) =>{
    return data.map(row =>{
        return {
            ...row,
            booking_view: row.booking_view.map((subRow: any) => {
                return {
                    ...subRow,
                    time: parseInt(subRow.book_time.substring(0,3))
                }
            })
        }
    })
}