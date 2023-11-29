import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Investor Usability Officer</title>
          <meta
            property="og:title"
            content="test-page - Investor Usability Officer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_vnkrt5) => (
            <>
              <h1>{context_vnkrt5?.Name}</h1>
            </>
          )}
          initialData={props.contextVnkrt5Prop}
          persistDataDuringLoading={true}
          key={props?.contextVnkrt5Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextVnkrt5Prop = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextVnkrt5Prop: contextVnkrt5Prop?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
