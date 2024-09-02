import { useEffect, useState } from 'react';


function App() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [data, setData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleChangeFront = (e) => {
    setFront(e.target.value);
  }
  const handleChangeBack = (e) => {
    setBack(e.target.value);
  }
  const handleSubmitCard = () => {
    setData([...data, { front, back, flip: false }])
    // setCurrentIdx(currentIdx + 1)
    setBack('');
    setFront('');

  }
  const handleToggleFlip = (index) => {
    setData(
      data.map((card, i) =>
        i === index ? { ...card, flip: !card.flip } : card
      )
    )
  }


  return (
    <>
      <div className='min-h-screen bg-slate-200 flex justify-center items-center flex-col'>
        <form>
          <div className='flex justify-between w-[560px] items-center mt-[100px]'>
            <div>
              <input type="text" value={front} onChange={handleChangeFront} required placeholder='Enter Front Card Details' className='w-[200px] h-[50px] border border-slate-400 p-3 rounded-3xl' />
              <input type="text" value={back} onChange={handleChangeBack} required placeholder='Enter Back Card Details' className='w-[200px] h-[50px] border border-slate-400 p-3 rounded-3xl ml-3' />
            </div>
            <button onClick={handleSubmitCard} className='bg-slate-400 border border-slate-400 rounded-lg text-white font-bold uppercase text-lg hover:shadow-md hover:shadow-slate-500 p-3'>Add Card</button>
          </div>
        </form>
        <div className='flex flex-wrap justify-center items-center mt-[100px]'>
          {data.length === 0 ?<h1>Please Enter The Card Details</h1> : data.map((card, index) => (
            <div key={index} className='mx-5 mt-5 bg-slate-100 w-[300px] h-[350px] flex justify-center items-center flex-col border border-slate-400 rounded-md'>
              <h2 className='text-slate-500 font-extrabold text-3xl uppercase text-center'>{card.flip ? card.back : card.front}</h2>
              <button onClick={() => handleToggleFlip(index)} className='mt-[100px] text-slate-400 font-bold uppercase text-lg p-3 border rounded-md w-[150px] hover:text-white hover:bg-slate-400 transition-colors'>Flip</button>
            </div>
          )) }
          {}
        </div>
      </div >
    </>
  )
}

export default App
