import './App.css'
import Windows from './windows/Windows'
import useWindowDimensions from './hooks/useWindowDimensions'
import Android from './android/Android';

function App() {
  const { width } = useWindowDimensions();


  if (width < 650) {
    return <Android />
  }else{
   return  <Windows />
  }
}

export default App

