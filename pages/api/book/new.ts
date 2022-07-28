  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabase'
  
  
  type Data = {
    name: string
  }
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const { field_id, tanggal: book_date, nama: name, waktu: book_time } = req.body

    const { data, error } = await supabase
        .from('booking')
        .insert([
            { name, book_date, book_time, field_id  }
        ])
    if (!error)  res.redirect(303, '/book')
}