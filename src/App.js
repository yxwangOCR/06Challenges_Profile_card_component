import "./App.css";

import bg from "./assets/bg-pattern-card.svg";
import profile from "./assets/image-victor.jpg";

function App() {
  return (
    <div class='bg-white w-[330px] h-[375px] rounded-2xl'>
      <img
        class='w-full h-[140px] rounded-t-2xl'
        src={bg}
        alt='background-image'
      />
      <img
        class='rounded-full border-white border-8 flex justify-center items-center my-0 mx-auto relative top-[-15%]'
        src={profile}
        alt='profile'
      />
      <div class='flex gap-3 justify-center relative top-[-10%]'>
        <h1 class='font-bold'>Victor Crest</h1>{" "}
        <span class='text-grayishBlue'>26</span>
      </div>
      <span class='flex justify-center relative top-[-10%] my-1 text-grayishBlue'>
        London
      </span>
      <hr class='relative top-[-5%] bg-DarkGray h-[1px] opacity-20' />
      <div class='flex justify-center items-center gap-8 mb-5'>
        <div class='flex flex-col items-center'>
          <span class='font-bold'>80K</span>
          <span class='text-DarkGray text-xs'>Followers</span>
        </div>
        <div class='flex flex-col items-center'>
          <span class='font-bold'>803K</span>
          <span class='text-DarkGray text-xs'>Likes</span>
        </div>
        <div class='flex flex-col items-center'>
          <span class='font-bold'>1.4K</span>
          <span class='text-DarkGray text-xs'>Photos</span>
        </div>
      </div>
    </div>
  );
}

export default App;
