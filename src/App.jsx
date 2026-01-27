import Translations from './translations'
import './App.css'
import { FeatureInfo, UserStoryFormatInfo, ScenarioInfo, RubixCubeExample, HappyPathScenarioInfo } from "./info"

function App() {
  return (
    <>
      <Translations />
      <FeatureInfo />
      <UserStoryFormatInfo />
      <ScenarioInfo />
      <RubixCubeExample />
      <HappyPathScenarioInfo />
    </>
  )
}

export default App
