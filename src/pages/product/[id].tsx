import { useRouter } from 'next/router'
import React from 'react'

export default function Id() {
  const { query } = useRouter()
  return (
    <div>Product {JSON.stringify(query)}</div>
  )
}
