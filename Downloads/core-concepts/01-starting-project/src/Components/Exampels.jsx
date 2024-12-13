import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx";


export default function Examples () {

    const [selectedTopic, setSelectedTopic] = useState ();

  function HandleSelect (selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p> please select a topic.</p> 

  if (selectedTopic) {
    tabContent = <div id="tab-content">  
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre> 
      <code> {EXAMPLES[selectedTopic].code} </code>
    </pre>
  </div>
  }

    return (
        <Section title="examples" id="examples">
        <h2> Examples</h2>
        <menu> 
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => {HandleSelect ('components')}}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => {HandleSelect ('jsx')}}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => {HandleSelect ('props')}}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => {HandleSelect ('state')}}>State</TabButton>
        </menu>
        {tabContent}
        </Section>
    )
}