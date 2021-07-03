import React, {useState} from 'react'
import Products from './components/Products'
import {list} from './data/list'

function App() {
  return (
    <>
      <main className="root">
        <header className="header-title">
          <h1>Shopping List (💸)</h1>
        </header>
        <section className="products">
          {list.map((itens) => {
            return <Products key={list.id} {...itens} />
          })}
        </section>
        <section className="cart">

        </section>
      </main>
    </>
  );
}

export default App;
