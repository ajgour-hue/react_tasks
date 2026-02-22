import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {

  const users = [
    {
       img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
       intro:'',
       tag: '1'
    },
   {
       img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
       intro:'',
       tag: '2'
    },
   {
       img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
       intro:'',
       tag: '3'
    },
  ]

  return (
    <div className='font-mono'>
      <Section1  users ={users} />
      <Section2 />
    </div>
  )
}

export default App