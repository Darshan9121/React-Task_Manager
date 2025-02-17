import logo from './logo.svg';
import './App.css';
import Category from "./components/Cateory"
import Tasks from "./components/Tasks"


function Home() {
  return (  
    
    <div className="flex flex-col gap-8 w-dvw h-dvh items-center justify-items-start text-xl px-4 py-8 md:items-start bg-white ">
   
    <header>
      <p className='text-3xl font-bold'>Tasksboard</p>
    </header>
    <main className=' w-full h-fit flex flex-col gap-8 text-md p-4 border-2 border-solid rounded-lg  border-zinc-900 bg-zinc-100 md:flex-row md:justify-center md:gap-1 md:self-center  '>
      <Category/>
      <Tasks/>
    </main>
    </div>
  );
}

export default Home;
