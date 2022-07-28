
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
        .select()

    res.status(200).json(data)
}
