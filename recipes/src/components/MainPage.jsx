import React from 'react';
import saladPic from '../images/salads.jpg'

export const MainPage = () => {
  return (
    <main>
      <h1>Welcome Message</h1>
      <section className='display:flex items-center'>
        <article className='display: flex items-center flex-row'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates soluta libero doloribus, nesciunt deserunt magnam fuga odio similique rem illum saepe non expedita maiores enim? Voluptatem voluptate vero exercitationem.</p>
          <img src={saladPic} alt='' />
        </article>
      </section>
      <section>
        <h1>input search holder</h1>
      </section>
      <section>
        <h1>cards holder</h1>
      </section>
    </main>
  );
};


