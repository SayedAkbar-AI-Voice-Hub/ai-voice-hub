import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'barbershops')

export default function Barbershops() {
  return <ServicePageLayout config={config} />
}
