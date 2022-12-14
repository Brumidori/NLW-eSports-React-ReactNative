import './styles/main.css';
import LogoIMg from './assets/Logo.svg';
import {MagnifyingGlassPlus} from 'phosphor-react';

function App() {
  return (
    <div className='max-w-[1344] mx-auto flex flex-col items-center my-20'>
      <img src={LogoIMg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo </span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>Conter Striker</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>Fortnit</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold block text-white'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#242634] px-8 py-6 flex justify-between items-center'>
          <div>
              <strong className='text-2xl text-white font-black block'>Não encontrou seu duo</strong>
            <span className='text-zinc-400 block'>Publique um anúnco para encontrar novos players!</span>
          </div>
            <button className='py-3 px-r bg-violet-500 hover:bg-violet-600 rounded text-white flex intems-center gap-3'>
              <MagnifyingGlassPlus size={24} ></MagnifyingGlassPlus>
              Publicar anúncio
            </button>

        </div>
      </div>

    </div>


  )
}

export default App
