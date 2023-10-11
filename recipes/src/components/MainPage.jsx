import saladPic from '../images/salads.jpg';

export const MainPage = () => {
  return (
    <main>
      <section className='flex items-center justify-center h-screen'>
        <h1 className=''>Welcome Message</h1>
      </section>

      <section className='flex items-center bg-slate-400'>
        <article className='flex items-center justify-evenly flex-row h-1/4 m-20 gap-10'>
          <div className='flex flex-col justify-start mr-10 my-0'>
            <h1>Title</h1>
            <p className='flex flex-wrap'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates soluta libero doloribus, nesciunt deserunt magnam fuga
              odio similique rem illum saepe non expedita maiores enim?
              Voluptatem voluptate vero exercitationem. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat voluptates soluta
              libero doloribus, nesciunt deserunt magnam fuga odio similique rem
              illum saepe non expedita maiores enim? Voluptatem voluptate vero
              exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat voluptates soluta libero doloribus, nesciunt
              deserunt magnam fuga odio similique rem illum saepe non expedita
              maiores enim? Voluptatem voluptate vero exercitationem.
            </p>
          </div>
          <div className='flex items-center justify-center w-full'>
            <img className='max-w-4xl h-auto' src={saladPic} alt='' />
          </div>
        </article>
      </section>
      <section className='flex items-center justify-center'>
        <h1>input search holder</h1>
      </section>
      <section className='flex items-center justify-center'>
        <h1>cards holder</h1>
      </section>
    </main>
  );
};
