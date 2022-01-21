import { Component } from 'react'
import qs from 'qs'
import { HeaderWithProps, FooterWithProps, ThankyouPage } from '../../frontend'
import { BaseLayout } from '../../patterns'
import {
  GlobalDataProvider,
  ConfigurationProvider,
  TranslationProvider,
  AbTestingProvider,
  fetchMenuData,
  OxidCheckoutProvider,
} from '../../utils'
import ErrorPage from '../_error'

export default class Index extends Component {
  static async getInitialProps(ctx) {
    const { query, res } = ctx
    const { seoUrl, ...params } = qs.parse(query)

    try {
      const [menuData] = await Promise.all([fetchMenuData()])

      return { menuData, params }
    } catch (error) {
      console.error(error)

      if (res) {
        res.statusCode = 500
      }

      /**
       * Returning an empty here is intentional, see:
       * https://github.com/zeit/next.js/blob/master/errors/empty-object-getInitialProps.md
       */
      return {}
    }
  }

  render() {
    if (Object.entries(this.props).length === 0) {
      return <ErrorPage statusCode={404} />
    }

    const { language } = 'de'

    return (
      <GlobalDataProvider {...this.props}>
        <ConfigurationProvider assetUrl={process.env.MAKAIRA_ASSET_URL}>
          <TranslationProvider language={language}>
            <OxidCheckoutProvider>
              <AbTestingProvider>
                <BaseLayout>
                  <HeaderWithProps />

                  <ThankyouPage />

                  <FooterWithProps />
                </BaseLayout>
              </AbTestingProvider>
            </OxidCheckoutProvider>
          </TranslationProvider>
        </ConfigurationProvider>
      </GlobalDataProvider>
    )
  }
}
