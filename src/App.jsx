
function App() {
  const links = [
    {
      name : 'GitHub' , 
      link : '#'
    } , 
    {
      name : 'Frontend Mentor' , 
      link : '#'
    } , 
    {
      name : 'LinkedIn' , 
      link : '#'
    } , 
    {
      name : 'Twitter' , 
      link : '#'
    } , 
    {
      name : 'Instagram' , 
      link : '#'
    }
  ];

  return (
    <div className="container min-h-screen mx-auto px-6   ">

      <div className="bg-dark-grey mt-[116px] md:mt-[174px] p-6 flex flex-col items-center rounded-xl max-w-[327px] md:max-w-[384px] mx-auto ">
        <div className="w-[88px] aspect-square rounded-full overflow-hidden">
          <img src="/assets/images/avatar-jessica.jpeg" alt="" />
        </div>
        <div className="text-center mt-6">
          <h1 className="heading text-white mb-1 ">Jessica Randall</h1>
          <p className="body-text font-bold  text-neon-green">London, United Kingdom</p>
          <p className="text-white body-text mt-6">"Front-end developer and avid reader."</p>
        </div>

        <ul className="flex flex-col w-full gap-4 mt-6">
          {
            links.map( (item , index) =>(
              <li className=" w-full text-center   " key={index}>
                <a href={item.link} className="text-white body-text font-bold p-3 block bg-grey rounded-lg transition-all duration-300 hover:bg-neon-green hover:text-grey hover ">{item.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
