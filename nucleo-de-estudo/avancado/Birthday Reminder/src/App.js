import React, { useState } from 'react'
import { data } from './data'
import './Style.css'

function App() {
  const index = data.length + 1
  const [person, setPerson] = useState({ img: '', name: '', birthday: '', dir: '' })
  const [number, setNumber] = useState(index)
  const [list, setList] = useState(data)

  const diretoria = ['DEX', 'MKT', 'DGP', 'DAF', 'PRES', 'VP', 'DPROJ']

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value;
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.name && person.birthday) {
      const dataSplit = person.birthday.split('-')
      const day = dataSplit[2]
      const month = dataSplit[1]
      const year = dataSplit[0]
      const newDate = [day, month, year]
      person.birthday = newDate.join('/')

      const newPerson = { 
        ...person, 
        id: number, 
        img: '/assets/notfound.jpg', 
        dir: diretoria[Math.floor(Math.random()*diretoria.length)] 
      }
      
      setNumber(number + 1)
      setList([newPerson, ...list])
      setPerson({ name: '', birthday: '' })
    }
  }

  const removePerson = (id) => {
    let newPerson = list.filter((person) => person.id !== id)
    setList(newPerson)
  }

  const isYourBirthday = (birthday) => {
    let birthdaySplit = birthday.split('/')
    let givenDay = birthdaySplit[0]
    let givenMonth = birthdaySplit[1]
    let givenBirthday = [givenDay, givenMonth].join('/')

    let currentDay = new Date().getDate()
    let currentMonth = new Date().getMonth() + 1
    if (currentDay.toString().length < 2) currentDay = '0' + currentDay
    if (currentMonth.toString().length < 2) currentMonth = '0' + currentMonth
    let today = [currentDay, currentMonth].join('/')

    if (givenBirthday === today) return true
    else return false
  }

  return (
    <main>
      <section className='container'>
        <article className='title'>
          <h2>Info_Agenda</h2>
        </article>
        <article>
          <form>
            <div className='form'>
              <label htmlFor='name'>Nome</label>
              <input
                type='text'
                id='name'
                name='name'
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div className='form'>
              <label htmlFor='birthday'>Aniversário</label>
              <input
                type='date'
                id='birthday'
                name='birthday'
                value={person.birthday}
                onChange={handleChange}
              />
            </div>
          </form>
        </article>
        <button type='submit' className='btn' onClick={handleSubmit}>Adicionar</button>
        <article className='content-area'>
          {list.map((person) => {
            const { id, img, name, birthday, dir } = person;
            return (
              <li key={id} className={`list ${isYourBirthday(birthday) ? "birthday" : null}`}>
                <img src={img} alt='Membro' />
                <div>
                  <h4>{name}</h4>
                  <p>{birthday}</p>
                  <p className='diretoria'>
                    <span>{dir}</span>
                  </p>
                </div>
                <button className='form-btn' onClick={() => removePerson(id)}>remover</button>
              </li>
            )
          })}
        </article>
        <button className='btn' onClick={() => setList([])}>Limpar</button>
      </section>
    </main>
  )
}

export default App