import React from 'react'
import { Head } from '@inertiajs/inertia-react'

const Site = ({ title }) => {
  return (
    <Head>
      <title>{title ? `TrashApp UB | ${title}` : 'TrashApp UB'}</title>
    </Head>
  )
}

export default Site
