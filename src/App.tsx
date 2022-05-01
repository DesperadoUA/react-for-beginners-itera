import './App.css'
import store from './store'
import Header from './components/header'
import Footer from './components/footer'
import UserThumbnail from './components/user/thumbnail'
import UserHead from './components/user/head'
import Content from './components/content'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='leftPart'>
           <UserThumbnail 
                    src={store.user.thumbnail}
           />
          </div>
          <div className='rightPart'>
            <UserHead 
                    name={store.user.name} 
                    surname={store.user.surname} 
                    year={store.user.year}
            />
            <Content 
                    text={store.user.biography} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default App
