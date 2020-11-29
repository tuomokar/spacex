import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const HomePage: React.FC = () => {
  const [testData, setTestData] = useState<null | { test: string }>(null)

  useEffect(() => {
    (async () => {
      const data = await (await fetch('/api/spacex')).json()

      setTestData(data)
    })()
  }, [])

  return (
    <div>
      <Head>
        <title>The best SpaceX app</title>
      </Head>

      <div>
        testContent
        <div>
          {testData?.test}
        </div>
      </div>
    </div>
  )
}

export default HomePage