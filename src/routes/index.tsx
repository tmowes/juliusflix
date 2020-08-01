import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import AddVideo from '../pages/AddVideo'
import PageNotFound from '../components/PageNotFound'
import AddCategory from '../pages/AddCategory'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastro/video" component={AddVideo} />
    <Route path="/cadastro/categoria" component={AddCategory} />
    <Route component={PageNotFound} />
  </Switch>
)

export default Routes
