import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import Home from './Home'
export default function Index() {
  return <Home />;
}
