import React from 'react' 
import Header from '../HomePage/Header'
import Banner_01 from '../HomePage/Banner_01'
import Card from '../HomePage/Card'
import Card2 from '../HomePage/Card2'
import Card3 from '../HomePage/Card3'
import styles from './styles.module.css'

import spaLogo from '../../assets/spa_logo.svg'
import monitor from '../../assets/spa_monitor.svg'
import notebook from '../../assets/spa_notebook.svg'
import smartphone from '../../assets/spa_smartphone.svg'

import services from '../../assets/group_services.png'
import imgRoute from '../../assets/img_aux_route.svg'
import imgApi from '../../assets/img_aux_api.svg'
import lock from '../../assets/lock.svg'
import check_small from '../../assets/check_small.svg'


export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner_01 />
      <Card props={
        {
          title: 'SPA Lab',
          description: 'Desenvolvimento de LandPages extraordinárias, com singularidade em cada detalhe!',
          imageSpaLogo: spaLogo,
          imageMonitor: monitor,
          imageNotebook: notebook,

        }
      } />
      <Card2 props={
        {
          title1: 'Widgets - Para transações online',
          title2: 'Estilos unicos e personalizados',
          title3: 'Interações e conexões inteligentes com serviços de terceiros',
          image1: services,
          image2: 'monitor',
          image3: smartphone,
          image4: imgRoute,
          image5: imgApi,
        }
      } />
      <Card3 props={
        {
          title1: 'Segurança e alcance otimizado',
          title2: 'Https://seudominio.com',
          image1: lock,
          image2: check_small,
          label1: 'Certificado SSL',
          label2: 'Dominio personalizado',
          label3: 'Backup em casos de erros graves',
          label4: 'Algoritmo para otimizar o SEO'
        }
      } />
      <div className={styles.content}></div>
    </div>
  )
}

