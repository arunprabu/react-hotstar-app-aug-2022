import React from 'react'
import LifeCycleDemo from '../../containers/LifeCycleDemo/LifeCycleDemo';
import MyProfile from '../../containers/MyProfile/MyProfile';
import RecentMovieList from '../../containers/RecentMovieList/RecentMovieList';
import TrendingShowList from '../../containers/TrendingShowList/TrendingShowList';
import LastLogin from '../LastLogin/LastLogin';
import Program from './Program/Program';
import Subscription from './Subscription/Subscription';

const Home = () => {
  const appName = 'Hotstar';

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg"
          alt={ `${appName} Logo` }
          width="350"
          height="250"
        />
        <h1 className="display-5 fw-bold">Welcome to {appName}!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt risus et laoreet maximus.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Login
            </button>
          </div>
        </div>
      </div>

      <h2>Featured Programs | Demo of Props </h2>
      <Program 
        name="Man Vs Wild" 
        category="Infotainment" 
        releasedOn="released last week">
        A Wild Adventure Show By Bear Grylls!
      </Program>

      <Program 
        name="Planet Earth" 
        category="Infotainment" 
        releasedOn="released a month ago">
        An amazing show hosted by David Attenborough!!
      </Program>

      <Program 
        name="Ind Vs Eng Test #4" 
        category="Sports" 
        releasedOn="released few weeks ago">
        Who will win the cup? Find out here
      </Program>

      <hr/>

      <h2>Recent Movie List | Demo of State, Props, Events in a Class Comp</h2>
      <RecentMovieList />

      <hr/>
      <h2>Trending Show List | Demo of State, Event with param, Conditionals, List and Keys</h2>
      <TrendingShowList />

      <hr/>
      <h2>Subscription | Styles Demo</h2>
      <Subscription />

      <hr/>
      <h2>MyProfile | Two Way Binding Demo</h2>
      <MyProfile />

      <hr />
      <h2>LifeCycle Hooks Demo</h2>
      <LifeCycleDemo/>

      <hr/>
      <h2>Last Login</h2>
      <LastLogin>
        <p>Last Login 1: </p>
      </LastLogin>

      <LastLogin>
        <p>Last Login 2: </p>
      </LastLogin>
    </>
  )
}

export default Home