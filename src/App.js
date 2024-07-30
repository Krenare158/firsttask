// App.js
import React from 'react';
import './App.css';
import Card from './Card';

const data = [
  { title: "The TLD", description: "Does the domain extension match the language of the domain name?", icon: "FaGlobe" },
  { title: "Domain Length", description: "Is the domain short enough to remember?", icon: "FaRuler" },
  { title: "Language", description: "How complex is the actual domain name?", icon: "FaLanguage" },
  { title: "International recognition", description: "Can the domain name be used on an international scale?", icon: "FaRegHandshake" },
  { title: "Search engine", description: "Does the domain follow search engine guidelines?", icon: "FaSearch" },
  { title: "Advertising Potential", description: "Could the domain be used for advertising campaigns?", icon: "FaBullhorn" },
  { title: "Sales Opportunities", description: "Can the domain name be used on an international scale?", icon: "FaShoppingCart" },
  { title: "Typo susceptibility", description: "How high is the risk of mistyping the domain name?", icon: "FaTypo3" },
  { title: "Business potential", description: "Can the domain be used as your company address?", icon: "FaBuilding" }
];

function App() {
  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} icon={item.icon} />
      ))}
    </div>
  );
}

export default App;
