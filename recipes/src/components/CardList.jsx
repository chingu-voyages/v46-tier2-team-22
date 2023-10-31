import { useState } from 'react';
import Card from './Card';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0,y:-100},
}

CardList.propTypes = {
  cardDetails: PropTypes.array.isRequired,
};

function CardList({ cardDetails }) {
  const renderedCards = 3; //change value after dummy is replaced
  // const [recipes] = useState(cardDetails);
  const recipes = cardDetails;
  const [loadMore, setLoadMore] = useState(renderedCards);

  const handleLoadMore = () => {
    setLoadMore(loadMore + renderedCards);
  };

  return (
    <div className=' flex flex-col'>
      <div
        className='relative flex flex-wrap items-center justify-evenly mx-auto mb-5 py-6 bg-Gunmetal-gray w-screen max-w-screen-25'
        id='card-holder'
      >
        {recipes.slice(0, loadMore).map((recipe,i) => (
                  <motion.div
                  key={recipe.id}
                  custom={i}
                  animate="visible"
                  variants={variants}
                  initial="hidden" 
                  style={{ listStyle: "none" }}
                >
                <Card recipe={recipe} key={recipe.id} />
                </motion.div>
        ))}
      </div>
      {loadMore < recipes.length && (
        <button
          onClick={handleLoadMore}
          className='w-36 border border-black m-4 p-3 rounded-sm self-center'
        >
          load more
        </button>
      )}
    </div>
  );
}

export default CardList;