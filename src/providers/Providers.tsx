'use client'
import '@/assets/styles/globals.scss'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient(
  {
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
)

export default function Providers({children }: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={queryClient}> 
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
          <AuthProvider>
						{children}
          </AuthProvider>
          </PersistGate>
        </Provider> 
     </QueryClientProvider>
  )
}
