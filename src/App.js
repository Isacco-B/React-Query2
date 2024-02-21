import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import RQSuperHero from './components/RQSuperHero.page'
import ParallelQueries from './components/ParallelQueries.page'
import DynamicParallel from './components/DynamicParallel.page'
import DependentQueries from './components/DependentQueries.page'
import PaginatedQueries from './components/PaginatedQueries.page'
import InfiniteQueries from './components/InfiniteQueries.page'
import Heroes from './components/Heroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-hero/1">RQ Super Hero</Link>
            </li>
            <li>
              <Link to="/heroes">heroes</Link>
            </li>
            <li>
              <Link to="/rq-parallel">parallel</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/rq-infinite">
            <InfiniteQueries />
          </Route>
          <Route path="/rq-colors">
            <PaginatedQueries />
          </Route>
          <Route path="/rq-dependent">
            <DependentQueries email="isacco@gmail.com" />
          </Route>
          <Route path="/rq-dinamic-parallel">
            <DynamicParallel heroIds={[1, 3]} />
          </Route>
          <Route path="/rq-super-hero/:heroId">
            <RQSuperHero />
          </Route>
          <Route path="/rq-parallel">
            <ParallelQueries />
          </Route>
          <Route path="/super-heroes">
            <SuperHeroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
