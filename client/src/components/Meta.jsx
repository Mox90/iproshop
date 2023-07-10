import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to iProShop',
  description: "It's not just a shop, It's a shop for all",
  keywords: 'electronics, high end electronics, etc',
}

export default Meta
