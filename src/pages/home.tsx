import React, { memo } from 'react'
import { StartupProvider, useStartupState } from '../context/startups-context'
import withContextProvider from '../hoc/with-provider'
import { FoundersSection } from '../modules/founders-section'
import { StartupsSection } from '../modules/startups-section'
import { LinkButton } from '../styles/components'
import { Banner, BannerButtonBox, Content, Footer } from '../styles/layout'
import {
  HeadingPrimary,
  HeadingSecondary,
  SubHeading,
} from '../styles/typography'

const HomePage = withContextProvider(
  memo(() => {
    const context = useStartupState()

    return (
      <StartupProvider>
        <>
          <Content>
            <Banner>
              <HeadingPrimary>Stay hungry, stay foolish.</HeadingPrimary>
              <SubHeading>
                Learn from the hottest startups in the world.
              </SubHeading>
              <BannerButtonBox>
                <LinkButton to="/stories">Read now</LinkButton>
              </BannerButtonBox>
            </Banner>

            <FoundersSection />

            <StartupsSection records={context.startups} />
          </Content>
          <Footer>
            <HeadingSecondary>Let's get started</HeadingSecondary>
            <LinkButton to="/stories">Read now</LinkButton>
          </Footer>
        </>
      </StartupProvider>
    )
  }),
  StartupProvider
)

export default HomePage
