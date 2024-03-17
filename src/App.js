import './App.css';
import logo from './components/logo.png'
import TimerComponent from './components/TimerComponent'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='logo' />
      <h1 className='headline'>Boxer Timer</h1>
      <TimerComponent/>

      <div className='label-b'>
        <h4 className='headline4'>Set Timer</h4>
        <p className='para'>Set the time for your exercise. <br></br>Example: 120 seconds (2 minutes).</p>

        <h4 className='headline4'>Set Interval</h4>
        <p className='para'>Sets the interval until the next sequence. <br></br>Example: You are training Jab + Cross and want every 3 seconds there is an alert for the next repetition.</p>
      <br></br>
        <a className='para' target="_blank" href='https://joaocruz.com.br'>© Joao Cruz</a>
        </div>
    </div>
  );
}

export default App;
