import React from "react";
import './globals.css'

export const metadata = {
  title: 'English App',
  description: 'Study English from word every day',
}

type RootLayoutPropType = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutPropType) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
