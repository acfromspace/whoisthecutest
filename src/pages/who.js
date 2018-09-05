import React from 'react'
import { Button, Icon, List, Segment } from 'semantic-ui-react'

import Layout from '../components/layout'

const Who = () => (
  <Layout>
    <h2>
      <span role="img" aria-label="Thinking Face">
        🤔
      </span>{' '}
      Who made this?
    </h2>
    <p>Hello there, I go by <b>@acfromspace</b>, the creator of this website.</p>
    <p>Goal of this website is to share with those in need of a smile.</p>
    <p>From the National Institute of Mental Health in 2016:</p>
    <Segment>
      <List>
        <List.Item>
          <Icon name="heartbeat" />
          <List.Content>
            <List.Description>
              Suicide was the second leading cause of death among individuals
              between the ages of 10 and 34, and the fourth leading cause of death
              among individuals between the ages of 35 and 54.
          </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="heartbeat" />
          <List.Content>
            <List.Description>
              Suicide was the tenth leading cause of death overall in the United
              States, claiming the lives of nearly 45,000 people.
          </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="heartbeat" />
          <List.Content>
            <List.Description>
              From years 1999 to 2016, the death rate from suicides
              dramatically rose by 28%.
          </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
    <p>
      Mental health is a serious issue, and we all deserve a chance to be happy
      and knowing everything will be okay.
    </p>
    <p>Reach out to me if you'd like to!</p>
    <Button
      color="github"
      onClick={() => window.open('https://github.com/acfromspace', '_blank')}
    >
      <Icon name="github" /> Github
    </Button>
    <Button
      color="linkedin"
      onClick={() =>
        window.open('https://www.linkedin.com/in/acfromspace/', '_blank')
      }
    >
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button
      color="twitter"
      onClick={() => window.open('https://twitter.com/acfromspace', '_blank')}
    >
      <Icon name="twitter" /> Twitter
    </Button>
  </Layout>
)

export default Who
